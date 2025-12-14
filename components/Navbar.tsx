import React, { useState, useEffect } from 'react';
import { CTA_LINK, BRAND_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-tighter text-slate-900">
            {BRAND_NAME}
          </span>
        </div>
        <div>
          <a 
            href={CTA_LINK} 
            className="text-sm font-semibold text-slate-900 border border-slate-200 px-5 py-2.5 rounded hover:bg-slate-50 transition-colors"
          >
            Acessar Plataforma
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;