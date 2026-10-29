import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { Mail, ArrowRight, ArrowUpRight } from 'lucide-react';

const goldenCircle = [
  {
    word: 'What',
    text: (
      <>
        My main goal is to <strong className="text-white">make</strong>. This takes many different forms from making a difference, building communities, and solving problems. I utilize my experience to build solutions to problems that have yet to be solved or even to augment solutions that already exist.
      </>
    )
  },
  {
    word: 'How',
    text: (
      <>
        In order to make, I am continuously <strong className="text-white">learning</strong> new information and skills from all aspects of life. I'm always eager to pick up the next piece of knowledge to leverage as I build solutions or encounter difficulties. I also love to share the knowledge I gain with anyone who has an interest!
      </>
    )
  },
  {
    word: 'Why',
    text: (
      <>
        I strive to be an <strong className="text-white">inspiration</strong> to others. It is the CORE of why I do what I do. When I walk away from a task, I seek to achieve these three things: make a successful solution, learn something new in the process, and inspire others to chase their passions.
      </>
    )
  }
];

const Home = () => {
  const featuredProjects = projectsData.filter((p) => p.featured);
  const [heroOpacity, setHeroOpacity] = useState(1);

  // The hero (banner photo + text) fades out as you scroll, on all devices.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const fadeDistance = window.innerHeight * 0.8;
        setHeroOpacity(Math.max(0, 1 - window.scrollY / fadeDistance));
        raf = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg">

      {/* 1. Hero — banner photo block with text below; same on mobile and desktop.
             The photo fades out on scroll; the text stays solid. */}
      <section className="relative overflow-hidden">
        <img
          src="/media/photos/homebanner.jpg"
          alt="Aaron Milner at the AI in Robotics exhibit"
          className="w-full h-64 md:h-[46rem] object-cover object-center md:object-top"
          style={{ opacity: heroOpacity }}
        />
        {/* Soft fade of the photo into the page background */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none"
          style={{ opacity: heroOpacity }}
        ></div>

        <div className="container mx-auto px-6 pt-8 md:pt-10 pb-14 md:pb-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-3 tracking-tight text-white">
                Aaron Milner
              </h1>
              <p className="text-lg md:text-xl mb-6 text-brand-accent font-medium">
                Software &amp; Emerging Technology Engineer
              </p>
              <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                Building and augmenting solutions to create innovation.
              </p>
            </div>

            <div className="flex flex-row items-center gap-5 shrink-0">
              <Link
                to="/projects"
                className="bg-brand-primary text-white hover:bg-sky-600 font-semibold py-3.5 px-8 rounded-md transition-colors duration-150 text-center"
              >
                Explore Projects
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-brand-primary text-white hover:bg-sky-600 font-semibold py-3.5 px-8 rounded-md transition-colors duration-150 text-center"
              >
                Connect with Me
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Projects */}
      <section className="py-20 bg-brand-surface border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-10 gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
            <Link to="/projects" className="hidden md:inline-flex items-center gap-1 text-brand-accent hover:text-white font-semibold transition-colors duration-150 shrink-0">
              View All Projects <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <Link to="/projects" className="md:hidden inline-flex items-center gap-1 text-brand-accent hover:text-white font-semibold transition-colors duration-150 mt-8">
            View All Projects <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* 3. My Goal — Golden Circle as editorial rows */}
      <section className="py-20 md:py-28 bg-brand-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Lead the future of innovation through my Golden Circle: Make. Learn. Inspire.
            </h2>
            <p className="text-slate-400 mt-6 leading-relaxed text-lg max-w-2xl">
              Based on <a href="https://youtu.be/qp0HIF3SfI4?si=qvFq3GRmQllNfRZO" className="text-brand-accent underline underline-offset-4 hover:text-white decoration-brand-accent/40 transition-colors duration-150" target="_blank" rel="noreferrer">Simon Sinek's "Golden Circle,"</a> this represents the core of what I do, how I do it, and most importantly, why I do it.
            </p>
          </div>

          <div className="max-w-5xl mt-12 border-t border-white/10">
            {goldenCircle.map((row) => (
              <div key={row.word} className="grid md:grid-cols-[minmax(0, 12rem)_1fr] gap-3 md:gap-12 py-8 md:py-10 border-b border-white/10">
                <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-none">
                  {row.word}
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {row.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Let's Connect — asymmetric band */}
      <section className="py-20 bg-brand-surface border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or having casual conversations. Feel free to reach out.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 shrink-0">
              <a
                className="inline-flex items-center gap-2 bg-brand-primary text-white hover:bg-sky-600 font-semibold py-3.5 px-8 rounded-md transition-colors duration-150"
                href="mailto:aaron@milner.fyi"
              >
                <Mail size={18} aria-hidden="true" />
                aaron@milner.fyi
              </a>
              <a
                className="inline-flex items-center gap-2 bg-brand-primary text-white hover:bg-sky-600 font-semibold py-3.5 px-8 rounded-md transition-colors duration-150"
                href="https://www.linkedin.com/in/aaron-milner"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
