
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import BrandLogo from './BrandLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-20 pb-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8 origin-left scale-75">
              <BrandLogo size="md" />
            </div>
            <p className="text-zinc-500 max-w-md text-lg leading-relaxed mb-8">
              International music label and distribution powerhouse based at the intersection of creativity and technology. Excellence is our standard.
            </p>
            <div className="flex gap-6">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-zinc-500 hover:text-red-500 transition-colors">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-8 text-red-500">The Label</h4>
            <ul className="space-y-4 text-zinc-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Our History</a></li>
              <li><a href="#" className="hover:text-white transition-colors">The Roster</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-8 text-yellow-500">Artist Tools</h4>
            <ul className="space-y-4 text-zinc-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Distribution Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Book Studio Time</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mix & Master</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 text-zinc-600 text-xs gap-4 uppercase tracking-widest font-bold">
          <p>© 2024 UNIVERSAL DESIGN CONCEPT. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">International Licensing</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
