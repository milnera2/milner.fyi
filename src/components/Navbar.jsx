import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Passions', path: '/passions' },
    { name: 'Contact', path: '/contact' },
  ];

  const navLinkStyles = ({ isActive }) => 
    `transition-all duration-300 py-2 border-b-2 text-xs font-bold tracking-widest uppercase relative ${
      isActive 
        ? "text-brand-accent border-brand-accent shadow-[0_4px_12px_-4px_rgba(56,189,248,0.4)]" 
        : "text-slate-400 border-transparent hover:text-white hover:border-slate-700"
    }`;

  return (
    <nav className="fixed w-full top-0 z-50 bg-brand-bg/95 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        
        {/* Logo - Styled per image_bcce38.png */}
        <NavLink 
          to="/" 
          className="text-2xl font-extrabold tracking-tight text-brand-accent hover:opacity-90 transition"
        >
          milner.fyi
        </NavLink>

        {/* Desktop Links - Styled per image_bcd213.png */}
        <div className="hidden md:flex items-center gap-8 font-sans">
          {links.map((link) => (
            <NavLink key={link.path} to={link.path} className={navLinkStyles}>
              {link.name}
            </NavLink>
          ))}
          
          {/* Resume CTA */}
          <a
            href="/media/other/MilnerResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2 border border-brand-accent/50 text-brand-accent text-xs font-bold tracking-widest rounded hover:bg-brand-accent/10 transition-all shadow-[inset_0_0_10px_rgba(56,189,248,0.1)]"
          >
            RESUME
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-accent p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`absolute top-20 left-0 w-full md:hidden overflow-hidden transition-all duration-300 bg-brand-surface border-b border-white/5 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="flex flex-col gap-4 p-6 font-bold tracking-widest text-xs text-center">
          {links.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => isActive ? "text-brand-accent" : "text-slate-400"}
            >
              {link.name.toUpperCase()}
            </NavLink>
          ))}
          <a href="/media/other/MilnerResume.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-accent pt-4 border-t border-white/5 uppercase">
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;