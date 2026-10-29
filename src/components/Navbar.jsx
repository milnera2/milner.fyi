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

  // Hover: text turns white + blue underline (no dark block, no background).
  // Active: blue text + solid blue underline.
  const navLinkStyles = ({ isActive }) =>
    `py-2 border-b-2 text-sm font-medium transition-colors duration-150 ${
      isActive
        ? "text-brand-accent border-brand-accent"
        : "text-slate-300 border-transparent hover:text-white hover:border-brand-accent/60"
    }`;

  return (
    <nav className="fixed w-full top-0 z-50 bg-brand-bg/95 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-extrabold tracking-tight text-brand-accent hover:text-white transition-colors duration-150"
        >
          milner.fyi
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
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
            className="ml-4 px-5 py-2 bg-brand-primary hover:bg-sky-600 text-white text-xs font-bold tracking-wider rounded-md transition-colors duration-150"
          >
            Resume
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
        <div className="flex flex-col gap-4 p-6 text-center">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `py-1 border-b-2 transition-colors duration-150 ${
                  isActive
                    ? "text-brand-accent border-brand-accent"
                    : "text-slate-300 border-transparent hover:text-white hover:border-brand-accent/60"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="/media/other/MilnerResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-5 py-2 bg-brand-primary hover:bg-sky-600 text-white text-xs font-bold tracking-wider rounded-md transition-colors duration-150"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
