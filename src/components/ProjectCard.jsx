import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Images, X, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const hasDetail = Boolean(project.content);
  const hasExternal = Boolean(project.externalUrl);
  const gallery = project.gallery || [];
  const hasGallery = gallery.length > 0;

  // Escape key + arrow keys for the gallery modal
  useEffect(() => {
    if (!galleryOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setGalleryOpen(false);
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i + 1) % gallery.length);
      if (e.key === 'ArrowLeft') setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [galleryOpen, gallery.length]);

  const openGallery = () => {
    setActiveIndex(0);
    setGalleryOpen(true);
  };

  const button = hasDetail ? (
    <Link
      to={`/projects/${project.id}`}
      className="inline-block bg-brand-primary hover:bg-sky-600 text-white font-semibold py-2.5 px-6 rounded-md transition-colors duration-150 text-[15px]"
    >
      View Details
    </Link>
  ) : hasExternal ? (
    <a
      href={project.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-brand-primary hover:bg-sky-600 text-white font-semibold py-2.5 px-6 rounded-md transition-colors duration-150 text-[15px]"
    >
      {project.externalUrl.includes('github') ? 'View on GitHub' : 'View Project'}
      <ExternalLink size={16} aria-hidden="true" />
    </a>
  ) : hasGallery ? (
    <button
      type="button"
      onClick={openGallery}
      className="inline-flex items-center gap-2 bg-brand-primary hover:bg-sky-600 text-white font-semibold py-2.5 px-6 rounded-md transition-colors duration-150 text-[15px]"
    >
      <Images size={16} aria-hidden="true" />
      View Gallery
    </button>
  ) : null;

  return (
    <>
      <div className="bg-brand-surface rounded-lg overflow-hidden flex flex-col border border-white/10 transition-colors duration-200 hover:border-white/25">
        {/* Cover — cards without an image start directly with the content */}
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover"
          />
        )}

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-3 text-sm text-slate-400">
            <span>{project.date}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
          </div>

          <h3 className="text-[26px] leading-tight font-bold mb-4 text-white">
            {project.title}
          </h3>

          <p className="text-slate-300 text-[17px] mb-6 leading-relaxed">
            {project.summary}
          </p>

          <div className="space-y-1 text-[15px] mb-8">
            <p className="text-slate-400">
              <span className="font-semibold text-slate-200">My Role:</span> {project.role}
            </p>
            {project.technologies?.length > 0 && (
              <p className="text-slate-400">
                <span className="font-semibold text-slate-200">Technologies:</span>{' '}
                <span className="font-mono text-[13px] text-slate-300">{project.technologies.join(', ')}</span>
              </p>
            )}
            <p className="text-slate-400 leading-snug">
              <span className="font-semibold text-slate-200">Outcome:</span> {project.outcome}
            </p>
          </div>

          {/* Button Section */}
          <div className="mt-auto">
            {button}
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {hasGallery && galleryOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/85 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} image gallery`}
          onClick={() => setGalleryOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[activeIndex]}
              alt={`${project.title} — image ${activeIndex + 1}`}
              className="w-full max-h-[75vh] object-contain rounded-lg"
            />

            <div className="flex items-center justify-between mt-4">
              <button
                type="button"
                onClick={() => setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length)}
                className="p-2 rounded-md bg-brand-surface border border-white/10 text-slate-300 hover:text-white hover:border-white/25 transition-colors duration-150"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>

              <span className="text-sm text-slate-400">
                {activeIndex + 1} / {gallery.length}
              </span>

              <button
                type="button"
                onClick={() => setActiveIndex((i) => (i + 1) % gallery.length)}
                className="p-2 rounded-md bg-brand-surface border border-white/10 text-slate-300 hover:text-white hover:border-white/25 transition-colors duration-150"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setGalleryOpen(false)}
              className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 p-2 rounded-full bg-brand-surface border border-white/10 text-slate-300 hover:text-white hover:border-white/25 transition-colors duration-150"
              aria-label="Close gallery"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
