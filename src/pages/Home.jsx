import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      
      {/* 1. Modern Asymmetric Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e293b] to-[#334155] text-white py-20 md:py-32">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#0ea5e9] opacity-10 blur-[100px] rounded-full"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            
            {/* Image Container */}
            <div className="md:w-5/12 lg:w-4/12 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#0ea5e9] to-sky-400 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <img 
                  alt="Aaron Milner professional headshot" 
                  className="relative rounded-[2rem] shadow-2xl w-full aspect-[4/5] object-cover border border-white/10" 
                  src="/media/photos/PXL_20250510_001540556~2.jpg"
                />
              </div>
            </div>

            {/* Hero Text */}
            <div className="md:w-7/12 lg:w-8/12 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-md tracking-tight">
                Aaron Milner
              </h1>
              <p className="text-2xl md:text-3xl mb-8 text-sky-300 font-medium">
                Software & Emerging Technology Engineer
              </p>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl leading-relaxed">
                Building and augmenting solutions to create innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/projects" 
                  className="bg-[#0ea5e9] text-white hover:bg-[#0284c7] font-bold py-4 px-10 rounded-xl shadow-lg transition-all hover:scale-105 text-center"
                >
                  Explore Projects
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-sky-400 text-white hover:bg-sky-700/30 font-bold py-4 px-10 rounded-xl shadow-lg transition-all hover:scale-105 text-center"
                >
                  Connect with Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Projects Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#38bdf8]">Featured Projects</h2>
              <div className="h-1 w-20 bg-[#0ea5e9] mt-2 rounded-full"></div>
            </div>
            <Link to="/projects" className="hidden md:block text-sky-400 hover:text-white font-semibold transition-colors">
              View All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Philosophy / Golden Circle Section - Horizontal Stacked */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#38bdf8]">
            My Golden Circle
          </h2>
          
          <div className="max-w-7xl mx-auto p-8 md:p-12 border border-slate-700 rounded-[3rem] shadow-2xl bg-slate-800/50 backdrop-blur-sm">
            
            <p className="text-slate-300 mb-16 leading-relaxed text-xl md:text-2xl text-center max-w-3xl mx-auto">
              Based on <a href="https://youtu.be/qp0HIF3SfI4?si=qvFq3GRmQllNfRZO" className="text-sky-400 underline underline-offset-8 hover:text-sky-300 decoration-2 transition-colors" target="_blank" rel="noreferrer">Simon Sinek's "Golden Circle,"</a> this is my personal Golden Circle of: what I do, how I do it, and most importantly, why I do it. For me, this can be represented by Make. Learn. Inspire.
            </p>
            
            <div className="flex flex-col lg:flex-row gap-6 items-stretch">
              
              {/* Card 01 - What */}
              <div className="flex-1 bg-slate-900/50 p-10 rounded-3xl border border-slate-700 flex flex-col items-center md:items-start text-center md:text-left transition-transform hover:scale-[1.02]">
                <h3 className="text-3xl font-bold text-sky-500 mb-4 tracking-tight">What</h3>
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                  My main goal is to <strong className='text-white'>make</strong>. This takes many different forms from making a difference, building communities, and solving problems. I utilize my experience to build solutions to problems that have yet to be solved or even to augment solutions that already exist.
                </p>
              </div>

              {/* Card 02 - How */}
              <div className="flex-1 bg-slate-900/50 p-10 rounded-3xl border border-slate-700 flex flex-col items-center md:items-start text-center md:text-left transition-transform hover:scale-[1.02]">
                <h3 className="text-3xl font-bold text-sky-500 mb-4 tracking-tight">How</h3>
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                  In order to make, I am continuously <strong className='text-white'>learning</strong> new information and skills from all aspects of life. I'm always eager to pick up the next piece of knowledge to leverage as I build solutions or encounter difficulties. I also love to share the knowledge I gain with anyone who has an interest!
                </p>
              </div>

              {/* Card 03 - Why */}
              <div className="flex-1 bg-slate-900/50 p-10 rounded-3xl border border-sky-500/30 ring-1 ring-sky-500/20 flex flex-col items-center md:items-start text-center md:text-left transition-transform hover:scale-[1.02]">
                <h3 className="text-3xl font-bold text-sky-400 mb-4 tracking-tight">Why</h3>
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                  I strive to be an <strong className='text-white'>inspiration</strong> to others. It the CORE of why I do what I do. When I walk away from a task, I seek to achieve these three things: make a successful solution, learn something new in the process, and inspire others to chase their passions.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e293b] to-[#334155] text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Let's Connect</h2>
          <p className="text-lg text-sky-300 mb-10 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or having casual conversations. Feel free to reach out.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
            <a 
              className="inline-flex items-center bg-[#0ea5e9] text-white hover:bg-[#0284c7] font-bold py-4 px-10 rounded-xl shadow-lg transition-all hover:scale-110" 
              href="mailto:aaron@milner.fyi"
            >
              <span className="material-icons mr-2">email</span>
              aaron@milner.fyi
            </a>
            <a 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-xl border border-white/20 shadow-lg transition-all hover:scale-110" 
              href="https://www.linkedin.com/in/aaron-milner" 
              target="_blank" 
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;