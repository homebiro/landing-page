import React from 'react';
import { motion } from 'framer-motion';

const CityNetwork: React.FC = () => {
  return (
    <section id="city-network" className="py-24 px-6 bg-zinc-950 overflow-hidden relative">
      {/* Optional: Subtle Radial Glow to keep the "Data/Network" feel without an image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#1D4ED8]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Centered Heading */}
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white mb-12">
            Making house hunting <br />
            in cities <span className="text-[#1D4ED8]">stress-free</span> <br />
            for people
          </h2>

          {/* Centered Descriptions */}
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed max-w-2xl mx-auto">
              By connecting with our service representatives, we share our knowledge 
              of your preferred neighborhood and real-time data, and we are helping 
              to improve our cities.
            </p>

            {/* Quote/Network Section centered with a subtle top border */}
            <div className="pt-10 border-t border-zinc-800 max-w-xl mx-auto">
              <p className="text-base md:text-lg text-zinc-500 leading-relaxed italic">
                "Our expansive city-wide network is the backbone of our guaranteed 
                delivery for clients; we have become the 'agent’s agent.' Local partners 
                and industry experts rely on our hyper-local knowledge and exclusive 
                hidden inventory to deliver what no one else can."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CityNetwork;