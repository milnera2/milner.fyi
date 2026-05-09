import React, { useState } from 'react';

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-slate-900 min-h-screen text-slate-300 font-sans">
      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-slate-800" id="contact-page">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-sky-400 drop-shadow-md">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mt-4 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or having casual conversations. Feel free to reach out.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 md:gap-12">
            
            {/* Connect Cards */}
            <div className="bg-slate-700 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-sky-500/20 transition-all duration-300 border border-slate-600">
              <h2 className="text-3xl font-semibold text-sky-400 mb-6">Connect With Me</h2>
              <div className="space-y-8">
                
                {/* Email */}
                <div className="group">
                  <h3 className="text-xl font-medium text-slate-200 mb-2 flex items-center">
                    <span className="material-icons mr-3 text-sky-400">email</span> Email
                  </h3>
                  <p className="text-slate-400 mb-3">
                    The best way to reach me for any questions or conversations.
                  </p>
                  <a 
                    className="inline-flex items-center text-sky-400 hover:text-sky-300 transition-colors font-semibold text-lg" 
                    href="mailto:aaron@milner.fyi"
                  >
                    aaron@milner.fyi
                    <span className="material-icons text-sm ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="group border-t border-slate-600 pt-8">
                  <h3 className="text-xl font-medium text-slate-200 mb-2 flex items-center">
                    <svg aria-hidden="true" className="w-6 h-6 mr-3 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                    LinkedIn
                  </h3>
                  <p className="text-slate-400 mb-3">
                    Connect with me for professional networking and updates.
                  </p>
                  <a 
                    className="inline-flex items-center text-sky-400 hover:text-sky-300 transition-colors font-semibold text-lg" 
                    href="https://www.linkedin.com/in/aaron-milner" 
                    rel="noopener noreferrer" 
                    target="_blank"
                  >
                    View My LinkedIn Profile
                    <span className="material-icons text-sm ml-1 group-hover:translate-x-1 transition-transform">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Availability / Calendar */}
            <div className="bg-slate-700 p-6 sm:p-8 rounded-xl shadow-lg border border-slate-600">
              <h2 className="text-3xl font-semibold text-sky-400 mb-6">My Availability</h2>
              <p className="text-slate-300 mb-6">
                Check my calendar below for my general availability. Feel free to reach out & propose a meeting time that works for you. My week begins on Monday and ends on Sunday.
              </p>
              
              <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden border border-slate-600 shadow-inner">
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
              
              <p className="text-xs text-slate-500 mt-4 text-center italic">
                My availability is in **Eastern Time (ET)**. Times above are automatically adjusted to your local timezone.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;