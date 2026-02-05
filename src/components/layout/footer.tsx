import React from 'react';
import { Button } from '../ui/Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tighter">HOMEBIRO</h3>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Ibadan's first tenant concierge service. Protecting your interests, 
              securing your home, and guaranteeing your peace of mind.
            </p>
            <div className="flex gap-4 grayscale opacity-50 hover:opacity-100 transition-opacity">
              <span className="text-xs font-bold border border-zinc-300 px-2 py-1 rounded">App Store</span>
              <span className="text-xs font-bold border border-zinc-300 px-2 py-1 rounded">Play Store</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold uppercase text-xs tracking-widest text-zinc-400">Company</h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li><a href="#about" className="hover:text-green-600 transition">About Us</a></li>
              <li><a href="#vibe-check" className="hover:text-green-600 transition">How it Works</a></li>
              <li><a href="#protection" className="hover:text-green-600 transition">The Protection Layer</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h4 className="font-bold uppercase text-xs tracking-widest text-zinc-400">Legal</h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li><a href="#" className="hover:text-green-600 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-600 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-green-600 transition">Refund Policy</a></li>
            </ul>
          </div>

          {/* App Teaser */}
          <div className="bg-white p-8 rounded-[2rem] border border-zinc-200 space-y-4">
            <div className="inline-block bg-black text-white text-[10px] font-black px-2 py-1 rounded mb-2 uppercase">Coming Soon</div>
            <h4 className="font-bold text-lg leading-tight">Manage your home from your phone.</h4>
            <p className="text-zinc-500 text-xs">Join 500+ users on the mobile waitlist.</p>
            <Button variant="outline" className="w-full !py-3 !text-xs">JOIN WAITLIST</Button>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-10 flex flex-col md:row justify-between items-center gap-4 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
          <p>© 2026 HOMEBIRO SOLUTIONS LTD. ALL RIGHTS RESERVED.</p>
          <p>MADE FOR THE IBADAN REAL ESTATE MARKET</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;