import React, { useState, useEffect } from 'react';
import { ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { hobbiesData, inspirationsData } from '../data/passions';

// Every hobby photo, in display order — used for modal prev/next navigation.
const gallery = hobbiesData.flatMap((category) =>
  category.items
    .filter((item) => item.image)
    .map((item) => ({ ...item.image, caption: `${item.name} — ${category.title}` }))
);

// One bento box per category: title, item list, then that category's photos.
// Photos are shown in full (object-contain) so nothing is cropped.
// `tall` = the wide column, where images are shown larger.
// `short` = shorter box aspect, used for stacked pairs and for categories
// flagged compact in the data so the two columns stay close in height.
// Images flagged `fit: "contain"` in the data show in full, uncropped.
const ImageTile = ({ item, onOpen, short = false }) => (
  <button
    type="button"
    onClick={() => onOpen(item.image.src)}
    className={`relative block w-full ${item.image.aspect || (short ? 'aspect-[2/1]' : 'aspect-[4/3]')} rounded-md overflow-hidden bg-brand-bg border border-white/10 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent`}
    aria-label={`View ${item.name} image full size`}
  >
    <img
      src={item.image.src}
      alt={item.image.alt}
      className={`w-full h-full ${item.image.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
    />
  </button>
);

const CategoryBox = ({ category, onOpen, compact = false }) => {
  const images = category.items.filter((item) => item.image);

  return (
    <div className="mb-8 bg-brand-surface rounded-lg border border-white/10 overflow-hidden p-7">
      <h3 className="text-lg font-bold text-white mb-4 pb-3 border-b border-white/10">
        {category.title}
      </h3>

      <ul className="space-y-3 mb-6">
        {category.items.map((item) => (
          <li key={item.name} className="text-slate-300">
            <span className="font-semibold text-white">{item.name}</span>
            {item.note && (
              <p className="text-slate-400 text-sm mt-0.5 leading-relaxed">{item.note}</p>
            )}
          </li>
        ))}
      </ul>

      {/* Compact categories (flagged in data) and stacked pairs use a shorter
          box so the two columns stay close to the same height */}
      {images.length > 1 ? (
        <div className="flex flex-col gap-3">
          {images.map((item) => (
            <ImageTile key={item.name} item={item} onOpen={onOpen} short />
          ))}
        </div>
      ) : (
        images.map((item) => (
          <ImageTile key={item.name} item={item} onOpen={onOpen} short={compact} />
        ))
      )}
    </div>
  );
};

const Passions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeModal = () => setActiveIndex(null);
  const showPrev = () => setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % gallery.length);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  const openImage = (src) => setActiveIndex(gallery.findIndex((img) => img.src === src));

  return (
    <div className="min-h-screen bg-brand-bg text-slate-300">

      {/* Header — plain text, no banner */}
      <section className="py-16 md:py-20 max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Beyond the Code</h1>
          <p className="text-lg text-slate-400 mt-4 leading-relaxed">
            Showing what I spend my time doing when I'm not working on projects. Also, find people and missions that I find inspiring.
          </p>
        </div>

        {/* Hobbies — bento: category boxes with their images, split into a
            wide column (large images) and a narrow column (smaller images) */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 pb-3 border-b border-white/10">My Hobbies</h2>
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 items-start">
            <div>
              {hobbiesData.filter((category) => category.size === 'wide').map((category) => (
                <CategoryBox key={category.title} category={category} onOpen={openImage} compact={category.compact} />
              ))}
            </div>
            <div>
              {hobbiesData.filter((category) => category.size === 'narrow').map((category) => (
                <CategoryBox key={category.title} category={category} onOpen={openImage} compact={category.compact} />
              ))}
            </div>
          </div>
        </div>

        {/* Inspirations */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 pb-3 border-b border-white/10">Inspiration &amp; Motivation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {inspirationsData.map((item) => (
              <div key={item.name} className="bg-brand-surface p-6 rounded-lg border border-white/10 transition-colors duration-200 hover:border-white/25">
                <h4 className="text-lg font-bold text-white mb-1">{item.name}</h4>
                <p className="text-sm text-slate-400 mb-3">{item.subtitle}</p>
                <p className="text-slate-400 mb-4 leading-relaxed">{item.desc}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-accent hover:text-white transition-colors duration-150"
                >
                  Visit website <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Lightbox — full-size view of any hobby photo */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/85 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Hobby image viewer"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[activeIndex].src}
              alt={gallery[activeIndex].alt}
              className="w-full max-h-[75vh] object-contain rounded-lg"
            />

            <div className="flex items-center justify-between mt-4">
              <button
                type="button"
                onClick={showPrev}
                className="p-2 rounded-md bg-brand-surface border border-white/10 text-slate-300 hover:text-white hover:border-white/25 transition-colors duration-150"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>

              <span className="text-sm text-slate-400">
                {gallery[activeIndex].caption} · {activeIndex + 1} / {gallery.length}
              </span>

              <button
                type="button"
                onClick={showNext}
                className="p-2 rounded-md bg-brand-surface border border-white/10 text-slate-300 hover:text-white hover:border-white/25 transition-colors duration-150"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <button
              type="button"
              onClick={closeModal}
              className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 p-2 rounded-full bg-brand-surface border border-white/10 text-slate-300 hover:text-white hover:border-white/25 transition-colors duration-150"
              aria-label="Close viewer"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Passions;
