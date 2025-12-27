
import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md', showText = true, className = "" }) => {
  const scale = {
    sm: 0.5,
    md: 0.8,
    lg: 1.2,
    xl: 2.0
  }[size];

  return (
    <div className={`flex flex-col items-center select-none ${className}`} style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}>
      {/* The Diamond Icon */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Shadow layer for 3D effect */}
        <div className="absolute inset-0 rotate-45 scale-95 translate-y-2 bg-black/40 blur-sm rounded-lg"></div>
        
        {/* Main Logo Grid */}
        <div className="relative grid grid-cols-2 gap-1 rotate-45">
          {/* Top Diamond (C) - actually top in the diamond layout but top-left in grid before rotation */}
          {/* Correction: The layout is Top, Left, Right, Bottom. In a 2x2 grid rotated 45deg:
              Top-Left becomes Top
              Bottom-Left becomes Left
              Top-Right becomes Right
              Bottom-Right becomes Bottom
          */}
          
          {/* TOP (Red with 'C') */}
          <div className="w-14 h-14 bg-[#e31e24] rounded-lg flex items-center justify-center shadow-md">
            <span className="text-black font-black text-2xl -rotate-45 transform translate-x-0.5 translate-y-0.5">C</span>
          </div>

          {/* RIGHT (Yellow with Play Triangle) */}
          <div className="w-14 h-14 bg-[#fdee21] rounded-lg flex items-center justify-center shadow-md">
            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-[#e31e24] border-b-[10px] border-b-transparent -rotate-45 ml-1"></div>
          </div>

          {/* LEFT (Red with 'U') */}
          <div className="w-14 h-14 bg-[#e31e24] rounded-lg flex items-center justify-center shadow-md">
            <span className="text-black font-black text-2xl -rotate-45">U</span>
          </div>

          {/* BOTTOM (Red with 'D') */}
          <div className="w-14 h-14 bg-[#e31e24] rounded-lg flex items-center justify-center shadow-md">
            <span className="text-black font-black text-2xl -rotate-45">D</span>
          </div>
        </div>
      </div>

      {/* The Text Bar */}
      {showText && (
        <div className="mt-4 bg-[#fdee21] px-4 py-1.5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
          <span className="text-black font-black text-sm tracking-tight whitespace-nowrap" style={{ fontFamily: 'sans-serif' }}>
            Universal Design Concept
          </span>
        </div>
      )}
    </div>
  );
};

export default BrandLogo;
