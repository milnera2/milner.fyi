import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-bg text-slate-400 py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© 2026 Aaron Milner. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://github.com/milnera2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-150"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aaron-milner"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-150"
          >
            LinkedIn
          </a>
          <a
            href="mailto:aaron@milner.fyi"
            className="hover:text-white transition-colors duration-150"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
