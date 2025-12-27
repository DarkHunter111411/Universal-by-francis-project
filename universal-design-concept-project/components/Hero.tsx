
import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-yellow-500/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl flex flex-col items-center">
        <BrandLogo size="lg" className="mb-12 animate-in fade-in zoom-in duration-1000" />
        
        <h2 className="text-red-500 font-syncopate font-bold mb-4 tracking-[0.3em] text-sm md:text-base">
          GLOBAL MUSIC POWERHOUSE
        </h2>
        <h1 className="text-4xl md:text-7xl font-black font-syncopate leading-tight mb-8">
          CRAFTING THE <br />
          <span className="gradient-text">FUTURE OF SOUND</span>
        </h1>
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Universal Design Concept is more than a label. We are an international collective of visionaries, producers, and artists redefining excellence in music production and digital distribution.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button 
            onClick={onStart}
            className="group udc-gradient px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-all transform hover:-translate-y-1"
          >
            EXPLORE THE ROSTER
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="flex items-center gap-3 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Play className="fill-white w-4 h-4 ml-1" />
            </div>
            LATEST SHOWREEL
          </button>
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <span className="text-[10px] tracking-[0.5em] uppercase">Scroll to Discover</span>
        <div className="w-px h-20 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
