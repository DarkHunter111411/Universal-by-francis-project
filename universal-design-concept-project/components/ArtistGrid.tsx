
import React from 'react';
import { ARTISTS } from '../constants';
import { ExternalLink, Play } from 'lucide-react';

const ArtistGrid: React.FC = () => {
  return (
    <section id="artists" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2">Our Visionaries</h2>
            <h3 className="text-4xl md:text-5xl font-syncopate font-black uppercase">The Roster</h3>
          </div>
          <button className="hidden md:block border-b-2 border-red-600 pb-1 font-bold hover:text-red-500 transition-colors">
            VIEW ALL ARTISTS
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTISTS.map((artist) => (
            <div key={artist.id} className="group relative overflow-hidden bg-zinc-900 rounded-2xl aspect-[3/4]">
              <img 
                src={artist.image} 
                alt={artist.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-red-500 font-bold text-xs tracking-widest mb-2 block uppercase">{artist.genre}</span>
                <h4 className="text-3xl font-syncopate font-bold mb-3">{artist.name}</h4>
                <p className="text-sm text-zinc-300 line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {artist.bio}
                </p>
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-yellow-500 transition-colors">
                    <Play className="fill-current w-5 h-5 ml-1" />
                  </button>
                  <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-tighter hover:text-red-500 transition-colors">
                    Profile <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistGrid;
