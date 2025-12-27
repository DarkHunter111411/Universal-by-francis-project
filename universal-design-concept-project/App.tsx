
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ArtistGrid from './components/ArtistGrid';
import Services from './components/Services';
import AdminDashboard from './components/AdminDashboard';
import AudioPlayer from './components/AudioPlayer';
import Footer from './components/Footer';
import PaymentModal from './components/PaymentModal';
import { SERVICES, NEWS } from './constants';
import { ShoppingBag, Sparkles, MessageSquare } from 'lucide-react';
import { generateCreativeFeedback } from './services/geminiService';

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkoutService, setCheckoutService] = useState<{title: string, price: number} | null>(null);
  const [creativeQuery, setCreativeQuery] = useState('');
  const [creativeResponse, setCreativeResponse] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const scrollToSection = (id: string) => {
    setIsAdmin(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAiVision = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!creativeQuery.trim()) return;
    setIsAiLoading(true);
    const feedback = await generateCreativeFeedback(creativeQuery);
    setCreativeResponse(feedback);
    setIsAiLoading(false);
  };

  return (
    <div className="min-h-screen relative">
      <Navigation 
        onNavClick={scrollToSection} 
        isAdmin={isAdmin} 
        toggleAdmin={() => setIsAdmin(!isAdmin)} 
      />

      {isAdmin ? (
        <AdminDashboard />
      ) : (
        <>
          <Hero onStart={() => scrollToSection('artists')} />
          
          <ArtistGrid />
          
          <Services />

          {/* Shop Section */}
          <section id="shop" className="py-24 px-6 bg-black">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h3 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4 flex items-center justify-center gap-2">
                  <ShoppingBag size={16} /> Artist Store
                </h3>
                <h2 className="text-4xl md:text-5xl font-syncopate font-black uppercase">Professional Packages</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {SERVICES.map((service) => (
                  <div key={service.id} className="bg-zinc-900 border border-white/5 p-8 rounded-3xl hover:border-yellow-500/50 transition-all group">
                    <div className="text-zinc-400 mb-6 group-hover:text-yellow-500 transition-colors">
                      {/* Using dynamic lookup for icons would be cleaner, but static fallback for demo */}
                      <Sparkles size={32} />
                    </div>
                    <h4 className="text-xl font-bold font-syncopate mb-4">{service.title}</h4>
                    <p className="text-zinc-500 mb-8 leading-relaxed">{service.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-3xl font-syncopate font-black">${service.price}</span>
                      <button 
                        onClick={() => setCheckoutService({title: service.title, price: service.price})}
                        className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition-colors"
                      >
                        ORDER
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Creative Studio Section */}
          <section className="py-24 px-6 relative">
            <div className="absolute inset-0 udc-gradient opacity-5 skew-y-3"></div>
            <div className="max-w-4xl mx-auto relative z-10 text-center">
              <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-500 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                <Sparkles size={14} /> Powered by Gemini Vision
              </div>
              <h2 className="text-3xl md:text-5xl font-syncopate font-black uppercase mb-8">UDC Creative Studio</h2>
              <p className="text-zinc-400 text-lg mb-12">Ask our virtual Creative Director for professional insights on music production, distribution strategy, or artistic vision.</p>
              
              <form onSubmit={handleAiVision} className="relative mb-12">
                <input 
                  type="text"
                  value={creativeQuery}
                  onChange={(e) => setCreativeQuery(e.target.value)}
                  placeholder="e.g. How to break into the international market with Afro-Fusion?"
                  className="w-full bg-zinc-900 border border-white/10 p-6 rounded-2xl focus:outline-none focus:border-red-500 text-lg pr-32 transition-all"
                />
                <button 
                  disabled={isAiLoading}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-bold disabled:opacity-50 transition-all"
                >
                  {isAiLoading ? 'THINKING...' : 'ENVISION'}
                </button>
              </form>

              {creativeResponse && (
                <div className="bg-zinc-900/80 border border-white/10 p-8 rounded-3xl text-left animate-in slide-in-from-bottom-4">
                  <p className="text-zinc-200 leading-relaxed text-lg italic">"{creativeResponse}"</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-10 udc-gradient rounded-full"></div>
                    <div>
                      <div className="text-sm font-bold uppercase">UDC Vision AI</div>
                      <div className="text-xs text-zinc-500">Global Creative Director</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-24 px-6 bg-zinc-950">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h3 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h3>
                <h2 className="text-4xl md:text-5xl font-syncopate font-black uppercase mb-8">Let's Create <br /> Excellence</h2>
                <p className="text-zinc-500 text-lg mb-12">Interested in distribution, production, or joining our roster? Reach out to our global A&R team.</p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-red-500">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 uppercase font-bold">Email us</div>
                      <div className="text-xl font-bold">universaldesignconcept24@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-green-500">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 uppercase font-bold">WhatsApp</div>
                      <div className="text-xl font-bold">+242 06 646 06 15</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 p-10 rounded-3xl border border-white/5 shadow-2xl">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Your Name</label>
                      <input type="text" className="w-full bg-black border border-white/10 p-4 rounded-xl focus:border-red-500 focus:outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Your Email</label>
                      <input type="email" className="w-full bg-black border border-white/10 p-4 rounded-xl focus:border-red-500 focus:outline-none transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Subject</label>
                    <select className="w-full bg-black border border-white/10 p-4 rounded-xl focus:border-red-500 focus:outline-none transition-colors appearance-none">
                      <option>Artist Submission</option>
                      <option>Distribution Inquiry</option>
                      <option>Studio Booking</option>
                      <option>Press & Media</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                    <textarea rows={5} className="w-full bg-black border border-white/10 p-4 rounded-xl focus:border-red-500 focus:outline-none transition-colors resize-none"></textarea>
                  </div>
                  <button className="w-full udc-gradient py-4 rounded-xl font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform">
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </section>

          <Footer />
        </>
      )}

      {!isAdmin && <AudioPlayer />}
      
      <PaymentModal 
        isOpen={!!checkoutService} 
        onClose={() => setCheckoutService(null)}
        serviceTitle={checkoutService?.title || ''}
        price={checkoutService?.price || 0}
      />
    </div>
  );
};

export default App;
