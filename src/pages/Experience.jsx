import React, { useRef, useEffect } from 'react';
import { Download } from 'lucide-react';
import {
  experienceData,
  skillsData,
  awardsData,
  educationData,
  professionalSummary
} from '../data/experience';

const Experience = () => {
  const scrollRef = useRef(null);

  const loopedSkills = [
    ...skillsData.slice(-2),
    ...skillsData,
    ...skillsData.slice(0, 2)
  ];

  const getScrollMetrics = () => {
    if (!scrollRef.current || !scrollRef.current.children.length) return { cardWidth: 0, totalWidth: 0 };
    const card = scrollRef.current.children[0];
    const style = window.getComputedStyle(card);
    const marginRight = parseFloat(style.marginRight) || 0;
    const cardWidth = card.offsetWidth + marginRight;
    return { cardWidth, totalWidth: cardWidth * skillsData.length };
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const initializeScroll = () => {
      if (scrollRef.current) {
        const { cardWidth } = getScrollMetrics();
        scrollRef.current.scrollLeft = cardWidth * 2;
      }
    };

    const initTimer = setTimeout(initializeScroll, 100);

    let autoScrollTimer;
    if (!prefersReducedMotion) {
      autoScrollTimer = setInterval(() => {
        const { current } = scrollRef;
        if (current) {
          const { cardWidth } = getScrollMetrics();
          current.scrollBy({ left: cardWidth * 2, behavior: 'smooth' });
        }
      }, 5000);
    }

    return () => {
      clearTimeout(initTimer);
      if (autoScrollTimer) clearInterval(autoScrollTimer);
    };
  }, []);

  const handleScroll = () => {
    const { current } = scrollRef;
    if (!current) return;
    const { cardWidth, totalWidth } = getScrollMetrics();

    if (current.scrollLeft >= totalWidth + (cardWidth * 2) - 10) {
      current.scrollLeft = cardWidth * 2;
    }
    if (current.scrollLeft <= 10) {
      current.scrollLeft = totalWidth;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-brand-bg min-h-screen text-slate-200 overflow-x-hidden">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Header — title left, resume right */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">My Professional Journey</h1>
          <a
            href="media/other/MilnerResume.pdf"
            className="inline-flex items-center gap-2 bg-brand-primary text-white hover:bg-sky-600 font-semibold py-3 px-7 rounded-md transition-colors duration-150 shrink-0 self-start"
            download
          >
            <Download size={18} aria-hidden="true" />
            Download My Resume
          </a>
        </div>

        {/* Professional Summary */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-5 pb-3 border-b border-white/10">Professional Summary</h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
            {professionalSummary}
          </p>
        </div>

        {/* Career Experience */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 pb-3 border-b border-white/10">Career Experience</h2>
          <div className="space-y-6">
            {experienceData.map((job, index) => (
              <div key={index} className="bg-brand-surface p-6 rounded-lg border border-white/10">
                <div className="flex flex-col sm:flex-row justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{job.title}</h3>
                    <p className="text-slate-300 font-medium">{job.company}</p>
                  </div>
                  <span className="text-slate-400 text-sm sm:text-right shrink-0">{job.period}</span>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">{job.description}</p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 leading-relaxed mb-4">
                  {job.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
                </ul>
                {job.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {job.tags.map(tag => (
                      <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills — rotating cards */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 pb-3 border-b border-white/10">Relevant Skills</h2>
          <div className="relative overflow-hidden">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {loopedSkills.map((skillGroup, index) => (
                <div key={`${skillGroup.category}-${index}`} className="w-full md:w-[calc(50%-12px)] flex-shrink-0 snap-start">
                  <div className="bg-brand-surface p-8 rounded-lg border border-white/10 h-full">
                    <h4 className="text-sm font-bold text-white mb-6 pb-3 border-b border-white/10">
                      {skillGroup.category}
                    </h4>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                      {skillGroup.items.map(item => (
                        <li key={item} className="text-slate-300 flex items-center text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mr-3 shrink-0"></span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 pb-3 border-b border-white/10">Education</h2>
          {educationData.map((edu, index) => (
            <div key={index} className="flex flex-col sm:flex-row justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                <p className="text-slate-300 font-medium">{edu.degree}</p>
                <p className="text-slate-400 mt-2">
                  <span className="font-semibold text-slate-300">Minors:</span> {edu.minors.join(', ')}
                </p>
              </div>
              <span className="text-slate-400 text-sm sm:text-right shrink-0">{edu.period}</span>
            </div>
          ))}
        </div>

        {/* Awards & Honors — list rows */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2 pb-3 border-b border-white/10">Awards &amp; Honors</h2>
          <div>
            {awardsData.map((award, index) => (
              <div key={index} className="grid sm:grid-cols-[1fr_auto] gap-x-8 gap-y-1 py-5 border-b border-white/10">
                <div>
                  <h3 className="font-bold text-white">{award.title}</h3>
                  <p className="text-sm text-slate-400 mt-0.5">{award.issuer} — <span className="text-slate-300">{award.description}</span></p>
                </div>
                <span className="text-sm text-slate-400 sm:text-right shrink-0">{award.date}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
