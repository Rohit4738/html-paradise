import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 mt-12 bg-slate-900/50 border-t border-slate-800 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 mb-2">Built with Tailwind & React</p>
        <a 
          href="https://www.google.com/search?q=ryos+html+colour+picker+github" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-fuchsia-400 hover:text-fuchsia-300 font-medium transition-colors hover:underline hover:shadow-[0_0_10px_rgba(192,38,211,0.5)]"
        >
          ryos html colour picker github
        </a>
      </div>
    </footer>
  );
};

export default Footer;