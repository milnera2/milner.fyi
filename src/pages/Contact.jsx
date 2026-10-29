import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const Contact = () => {
  return (
    <div className="bg-brand-bg min-h-screen text-slate-300">
      <section className="py-16 md:py-24" id="contact-page">
        <div className="container mx-auto px-6 max-w-5xl">

          {/* Header — left aligned */}
          <div className="max-w-2xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Get In Touch
            </h1>
            <p className="text-lg text-slate-400 mt-4 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or having casual conversations. Feel free to reach out.
            </p>
          </div>

          {/* Connect — two cards side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="bg-brand-surface p-6 rounded-lg border border-white/10">
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2.5">
                <Mail size={20} className="text-brand-accent" aria-hidden="true" /> Email
              </h2>
              <p className="text-slate-400 mb-4 leading-relaxed text-sm">
                The best way to reach me for any questions or conversations.
              </p>
              <a
                className="inline-flex items-center gap-1 text-brand-accent hover:text-white transition-colors duration-150 font-semibold"
                href="mailto:aaron@milner.fyi"
              >
                aaron@milner.fyi
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="bg-brand-surface p-6 rounded-lg border border-white/10">
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2.5">
                <LinkedinIcon className="w-5 h-5 text-brand-accent" /> LinkedIn
              </h2>
              <p className="text-slate-400 mb-4 leading-relaxed text-sm">
                Connect with me for professional networking and updates.
              </p>
              <a
                className="inline-flex items-center gap-1 text-brand-accent hover:text-white transition-colors duration-150 font-semibold"
                href="https://www.linkedin.com/in/aaron-milner"
                rel="noopener noreferrer"
                target="_blank"
              >
                View my profile
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Availability / Calendar */}
          <div className="bg-brand-surface p-6 sm:p-8 rounded-lg border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">My Availability</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Check my calendar below for my general availability. Feel free to reach out &amp; propose a meeting time that works for you. My week begins on Monday and ends on Sunday.
            </p>

            <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden border border-white/10 bg-white">
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=America%2FNew_York&showPrint=0&mode=WEEK&showTz=0&showTitle=0&showCalendars=0&src=bWlsbmVyYWFyb241QGdtYWlsLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%230b8043"
                style={{ borderWidth: 0 }}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                title="Availability Calendar"
              ></iframe>
            </div>

            <p className="text-xs text-slate-400 mt-4 italic">
              My availability is in <strong className="not-italic text-slate-300">Eastern Time (ET)</strong>. Times above are automatically adjusted to your local timezone.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
