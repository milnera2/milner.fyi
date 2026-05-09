import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { projectsData } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) return <div className="text-white p-10 text-center">Project not found.</div>;

  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)] text-slate-300 py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/projects" className="text-[var(--color-brand-accent)] hover:brightness-110 mb-8 inline-flex items-center font-semibold">
          <span className="mr-2">←</span> Back to Projects
        </Link>
        
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-64 md:h-96 object-cover rounded-xl mb-8 shadow-2xl border border-slate-800" 
        />

        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-brand-accent)] mb-4">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {project.technologies.map(tech => (
            <span key={tech} className="bg-[var(--color-brand-surface)] text-[var(--color-brand-accent)] px-3 py-1 rounded-md text-sm border border-slate-700 font-medium">
              {tech}
            </span>
          ))}
        </div>

        <div className="markdown-container">
          <ReactMarkdown>{project.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;