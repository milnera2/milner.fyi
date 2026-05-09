import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    /* Background set to the grayish surface color from your index.css */
    <div className="bg-[var(--color-brand-surface)] rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 flex flex-col border border-slate-700/50 project-card">
      {/* Image Section */}
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-56 object-cover" 
      />

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-[26px] leading-tight font-bold mb-4 text-[var(--color-brand-accent)]">
          {project.title}
        </h3>
        
        <p className="text-slate-300 text-[17px] mb-6 leading-relaxed">
          {project.summary}
        </p>
        
        <div className="space-y-1 text-[15px] mb-8">
          <p className="text-slate-400">
            <span className="font-bold text-slate-200">My Role:</span> {project.role}
          </p>
          <p className="text-slate-400">
            <span className="font-bold text-slate-200">Technologies:</span> {project.technologies.join(', ')}
          </p>
          <p className="text-slate-400 leading-snug">
            <span className="font-bold text-slate-200">Outcome:</span> {project.outcome}
          </p>
        </div>

        {/* Button Section */}
        <div className="mt-auto">
          <Link 
            to={`/projects/${project.id}`} 
            className="inline-block bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-2.5 px-7 rounded-lg transition-colors text-[16px]"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;