import React, { useRef, useEffect } from 'react';
import { experienceData, skillsData, awardsData } from '../data/experience';

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
    const initializeScroll = () => {
      if (scrollRef.current) {
        const { cardWidth } = getScrollMetrics();
        scrollRef.current.scrollLeft = cardWidth * 2;
      }
    };

    const initTimer = setTimeout(initializeScroll, 100);

    const autoScrollTimer = setInterval(() => {
      const { current } = scrollRef;
      if (current) {
        const { cardWidth } = getScrollMetrics();
        current.scrollBy({ left: cardWidth * 2, behavior: 'smooth' });
      }
    }, 5000);

    return () => {
      clearTimeout(initTimer);
      clearInterval(autoScrollTimer);
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
    <section className="py-16 md:py-24 bg-slate-800 min-h-screen text-slate-200 overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-400">My Professional Journey</h1>
          <div className="mt-10">
            <a 
              href="media/other/MilnerResume.pdf" 
              className="bg-sky-500 text-white hover:bg-sky-600 font-semibold py-3 px-8 rounded-lg shadow-lg transition-all inline-flex items-center" 
              download
            >
              <span className="material-icons mr-2">download</span>
              Download My Resume
            </a>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-sky-400 mb-10 border-b border-slate-700 pb-2">Career Experience</h2>
          {experienceData.map((job, index) => (
            <div key={index} className="mb-10 bg-slate-700/40 p-6 rounded-xl border border-slate-600 hover:border-sky-500/40 transition-all shadow-md">
              <div className="flex flex-col sm:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                  <p className="text-sky-400 font-semibold">{job.company}</p>
                </div>
                <span className="text-slate-400 text-sm font-mono mt-1">{job.period}</span>
              </div>
              {/* Brightened list items from slate-400 to slate-200 */}
              <ul className="list-disc list-inside space-y-2 text-slate-200 leading-relaxed">
                {job.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills Carousel */}
        <div className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-sky-400 mb-12 text-center">Relevant Skills</h2>
          <div className="relative overflow-hidden">
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {loopedSkills.map((skillGroup, index) => (
                <div key={`${skillGroup.category}-${index}`} className="w-full md:w-[calc(50%-12px)] flex-shrink-0 snap-start">
                  <div className="bg-slate-700 p-8 rounded-2xl shadow-2xl border border-slate-600 h-full transition-all hover:border-sky-500/30">
                    <h4 className="text-xs font-black text-sky-400 mb-6 border-b border-slate-600/50 pb-3 uppercase tracking-[0.2em] text-center">
                      {skillGroup.category}
                    </h4>
                    <ul className="grid grid-cols-2 gap-4">
                      {skillGroup.items.map(item => (
                        <li key={item} className="text-white flex items-center text-sm font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mr-3 shrink-0"></span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-sky-400 mb-10 border-b border-slate-700 pb-2">Awards & Certifications</h2>
          <div className="space-y-6">
            {awardsData.map((award, index) => (
              <div key={index} className="bg-slate-700/40 p-6 rounded-xl border border-slate-600">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{award.title}</h3>
                  <span className="text-sky-500 font-mono text-xs">{award.date}</span>
                </div>
                <p className="text-sky-400 text-sm font-semibold mb-2">{award.issuer}</p>
                {/* Brightened description from slate-400 to slate-200 */}
                <p className="text-slate-200 text-sm leading-relaxed">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;