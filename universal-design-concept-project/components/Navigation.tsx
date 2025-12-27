
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, LayoutDashboard } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface NavigationProps {
  onNavClick: (section: string) => void;
  isAdmin: boolean;
  toggleAdmin: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavClick, isAdmin, toggleAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Artists', id: 'artists' },
    { name: 'Services', id: 'services' },
    { name: 'Shop', id: 'shop' },
    { name: 'News', id: 'news' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-1 shadow-xl' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer group scale-75 md:scale-90 origin-left"
          onClick={() => onNavClick('home')}
        >
          <BrandLogo size="sm" showText={false} className="group-hover:rotate-6 transition-transform" />
          <div className="flex flex-col -ml-2">
            <span className="font-syncopate text-xs font-bold tracking-tighter leading-none">
              UNIVERSAL
            </span>
            <span className="font-syncopate text-xs font-bold tracking-tighter leading-none text-red-500">
              DESIGN CONCEPT
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavClick(link.id)}
              className="text-xs font-bold hover:text-red-500 transition-colors uppercase tracking-[0.2em]"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={toggleAdmin}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all transform hover:scale-105"
          >
            {isAdmin ? <Globe className="w-3 h-3" /> : <LayoutDashboard className="w-3 h-3" />}
            {isAdmin ? 'Public' : 'Pro Portal'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-zinc-800 p-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 h-screen">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavClick(link.id);
                setIsOpen(false);
              }}
              className="text-2xl font-syncopate text-left uppercase"
            >
              {link.name}
            </button>
          ))}
          <button 
             onClick={() => {
                toggleAdmin();
                setIsOpen(false);
             }}
            className="bg-red-600 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2"
          >
            {isAdmin ? 'Exit Dashboard' : 'Artist Portal'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
