
import React from 'react';
import { Mic, Globe, Headphones, Share2, Disc, Rocket } from 'lucide-react';

const Services: React.FC = () => {
  const steps = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Production",
      desc: "Top-tier recording, sound design, and creative direction tailored for global appeal."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Engineering",
      desc: "Mixing and mastering by experts with experience in Dolby Atmos and spatial audio."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Distribution",
      desc: "Direct pipelines to Spotify, Apple Music, Deezer, Boomplay, and Audiomack."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Marketing",
      desc: "Strategic campaigns, PR, and playlist placement to amplify your international reach."
    }
  ];

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2">Our Ecosystem</h2>
            <h3 className="text-4xl md:text-5xl font-syncopate font-black uppercase mb-8 leading-tight">
              A COMPLETE <br />
              <span className="gradient-text">ARTISTIC ENGINE</span>
            </h3>
            <p className="text-zinc-400 text-lg mb-12 max-w-lg">
              We bridge the gap between creative inspiration and commercial success. Our infrastructure is built to support artists at every stage of their career.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col gap-4 p-6 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all group">
                  <div className="text-red-500 group-hover:scale-110 transition-transform origin-left">
                    {step.icon}
                  </div>
                  <h4 className="font-bold text-xl uppercase font-syncopate text-sm">{step.title}</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 udc-gradient opacity-20 blur-3xl rounded-full"></div>
            <img 
              src="https://picsum.photos/seed/studio/1000/1200" 
              alt="Studio Session" 
              className="relative rounded-3xl object-cover w-full aspect-[4/5] shadow-2xl border border-white/10"
            />
            <div className="absolute -bottom-8 -left-8 bg-zinc-900 p-8 rounded-2xl border border-white/10 shadow-2xl animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Disc className="animate-spin-slow" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Active Sessions</div>
                  <div className="text-xl font-bold font-syncopate">STUDIO A-01</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
