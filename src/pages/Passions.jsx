import React from 'react';
import { 
  Tent, 
  Book, 
  Wrench, 
  Gamepad2, 
  ExternalLink, 
  Link as LinkIcon 
} from 'lucide-react';

const Passions = () => {
  const hobbies = [
    {
      title: "Camping",
      icon: <Tent className="text-brand-accent" />,
      desc: "I love taking a break from the busyness of life to enjoy nature. This could be taking a hike through a scenic trail or roughing it with just a knife and a bottle of water. It's always fun to learn something about myself through the scope of nature."
    },
    {
      title: "Reading",
      icon: <Book className="text-brand-accent" />,
      desc: "One of my favorite things to do in my free time is read books. I generally prefer books that are themed on philosophy, history, or life lessons. My personal favorite book is \"The Last Lecture.\""
    },
    {
      title: "D.I.Y. / Creating",
      icon: <Wrench className="text-brand-accent" />,
      desc: "I enjoy building, fixing, and creating things with my own solutions. It's always fun to look around at a store and say 'I can make that!'"
    },
    {
      title: "Gaming",
      icon: <Gamepad2 className="text-brand-accent" />,
      desc: "I always like to de-stress by playing games. From board games to modern video games, I play a little bit of everything. My favorite games are by far strategy games!"
    }
  ];

  const inspirations = [
    {
      name: "Simon Sinek",
      subtitle: "Author & Founder of The Optimism Company",
      desc: "Making strides to change the way businesses think, act, and operate, Simon and his team work with leaders and organizations in nearly every industry to help transform company culture and create a better working world.",
      url: "https://simonsinek.com/"
    },
    {
      name: "JStu",
      subtitle: "YouTubers (Justin and Andrew)",
      desc: "Promoting trying new things and walking through life with joy. Their motto is 'LAUGH DAILY!' because they believe in the importance of bringing joy to people's lives.",
      url: "https://www.youtube.com/@MoreJStu"
    },
    {
      name: "FreeWater",
      subtitle: "Philanthropy & Sustainability",
      desc: "Innovative advertising platform that utilizes free premium spring water as a new type of advertising medium while prioritizing philanthropy and sustainability.",
      url: "https://www.freewater.io/"
    },
    {
      name: "Reuben Schmitz",
      subtitle: "Adventure Creator",
      desc: "Traveling to every continent with no money and relying on the kindness of strangers to show what can happen if you take the jump and chase your dreams.",
      url: "https://www.youtube.com/@ReubenSchmitz"
    }
  ];

  const webneighbors = [
    { name: "Zack Sargent", role: "Software Engineer", url: "https://zack.fyi/" },
    { name: "Alterra", role: "Game Development Community", url: "https://alterra.gg/" }
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-slate-300 font-sans">
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-accent mb-4">Beyond the Code</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Showing what I spend my time doing when I'm not working on projects. Also, find people and missions that I find inspiring.
          </p>
        </div>

        {/* Hobbies Section */}
        <div className="mb-16 bg-brand-surface p-8 rounded-2xl shadow-xl border border-white/5">
          <h2 className="text-3xl font-bold text-brand-accent mb-8">My Hobbies & Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {hobbies.map((hobby) => (
              <div key={hobby.title} className="group">
                <div className="flex items-center gap-3 mb-3">
                  {hobby.icon}
                  <h3 className="text-xl font-semibold text-slate-100 group-hover:text-brand-accent transition-colors">
                    {hobby.title}
                  </h3>
                </div>
                <p className="leading-relaxed text-slate-400">{hobby.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Inspirations Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-brand-accent mb-8">Inspiration & Motivation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {inspirations.map((item) => (
              <div key={item.name} className="bg-brand-surface p-6 rounded-xl border border-white/5 hover:border-brand-accent/50 transition-all group">
                <h4 className="text-lg font-bold text-brand-accent mb-1">{item.name}</h4>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-3 font-semibold">{item.subtitle}</p>
                <p className="text-sm text-slate-400 mb-4">{item.desc}</p>
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-brand-accent hover:underline gap-1"
                >
                  VISIT WEBSITE <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Webneighbors Section */}
        <div className="bg-brand-surface/50 p-8 rounded-2xl border border-white/5">
          <h2 className="text-2xl font-bold text-brand-accent mb-2">Webneighbors</h2>
          <p className="text-slate-500 mb-8 italic">Check out my friends and their projects!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {webneighbors.map((neighbor) => (
              <div key={neighbor.name} className="flex items-center justify-between bg-brand-bg p-4 rounded-lg border border-white/5">
                <div>
                  <h4 className="font-bold text-slate-200">{neighbor.name}</h4>
                  <p className="text-sm text-slate-500">{neighbor.role}</p>
                </div>
                <a 
                  href={neighbor.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-brand-accent transition-colors"
                >
                  <LinkIcon size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default Passions;