import React from 'react';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#38bdf8] mb-4">My Portfolio of Work</h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          A collection of my projects showcasing different skills and applications of my knowledge and leadership.
        </p>
      </div>

      {/* GitHub Call to Action Button */}
      <div className="text-center mb-16">
        <a 
          href="https://github.com/milnera2?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-sky-600 text-white hover:bg-sky-700 font-semibold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105 inline-flex items-center"
        >
          <svg aria-hidden="true" className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.869-.014-1.703-2.782.602-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.891 1.529 2.341 1.087 2.91.832.091-.647.349-1.086.635-1.337-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.645 0 0 .84-.269 2.75 1.025A9.712 9.712 0 0112 6.82c.85.004 1.705.114 2.505.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.375.203 2.392.1 2.645.64.698 1.028 1.591 1.028 2.682 0 3.842-2.338 4.687-4.565 4.935.359.307.679.916.679 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.578.688.48C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path>
          </svg>
          Check Out my Projects on GitHub
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;