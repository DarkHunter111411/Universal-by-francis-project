
import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Maximize2, Music } from 'lucide-react';
import { TRACKS } from '../constants';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const currentTrack = TRACKS[currentTrackIndex];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-zinc-950/80 backdrop-blur-xl border-t border-zinc-800/50 z-[100] py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-8">
        {/* Track Info */}
        <div className="flex items-center gap-4 min-w-[200px] w-1/3">
          <img 
            src={currentTrack.cover} 
            alt={currentTrack.title} 
            className={`w-12 h-12 rounded-lg object-cover shadow-lg ${isPlaying ? 'animate-spin-slow' : ''}`} 
          />
          <div className="hidden sm:block truncate">
            <h4 className="font-bold text-sm truncate">{currentTrack.title}</h4>
            <p className="text-xs text-zinc-500 truncate">{currentTrack.artist}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-2 flex-1 max-w-xl">
          <div className="flex items-center gap-6">
            <button className="text-zinc-400 hover:text-white transition-colors">
              <SkipBack className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform"
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-1" />}
            </button>
            <button className="text-zinc-400 hover:text-white transition-colors">
              <SkipForward className="w-5 h-5" />
            </button>
          </div>
          <div className="w-full flex items-center gap-3 text-[10px] text-zinc-500 font-mono">
            <span>1:24</span>
            <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden group cursor-pointer">
              <div className="w-1/3 h-full bg-red-600 group-hover:bg-red-500"></div>
            </div>
            <span>3:45</span>
          </div>
        </div>

        {/* Extra Controls */}
        <div className="flex items-center justify-end gap-6 w-1/3">
          <div className="hidden md:flex items-center gap-2 group">
            <Volume2 className="w-5 h-5 text-zinc-400 group-hover:text-white" />
            <div className="w-20 h-1 bg-zinc-800 rounded-full">
              <div className="w-3/4 h-full bg-zinc-400 group-hover:bg-white"></div>
            </div>
          </div>
          <button className="text-zinc-400 hover:text-white hidden md:block">
            <Music className="w-5 h-5" />
          </button>
          <button className="text-zinc-400 hover:text-white">
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
