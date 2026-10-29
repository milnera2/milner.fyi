import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) return <div className="text-white p-10 text-center">Project not found.</div>;

  return (
    <div className="min-h-screen bg-brand-bg text-slate-300 py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/projects" className="text-brand-accent hover:text-white mb-8 inline-flex items-center gap-2 font-semibold transition-colors duration-150">
          <ArrowLeft size={18} aria-hidden="true" /> Back to Projects
        </Link>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 shadow-2xl border border-white/10"
        />

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>

        <div className="flex flex-wrap gap-x-2 gap-y-1 mb-6 text-sm text-slate-400">
          <span>{project.date}</span>
          <span aria-hidden="true">·</span>
          <span>{project.category}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies?.map(tech => (
            <span key={tech} className="bg-white/5 text-slate-300 px-3 py-1 rounded-md text-sm border border-white/10 font-mono">
              {tech}
            </span>
          ))}
        </div>

        {project.externalUrl && (
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-sky-600 text-white font-semibold py-2.5 px-6 rounded-md transition-colors duration-150 mb-10"
          >
            {project.externalUrl.includes('github') ? 'View on GitHub' : 'Open Link'}
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        )}

        <div className="markdown-container">
          <ReactMarkdown>{project.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
