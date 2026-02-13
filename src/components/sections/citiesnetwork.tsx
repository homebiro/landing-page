import React from 'react';
import { motion } from 'framer-motion';

const CityNetwork: React.FC = () => {
  return (
    <section id="city-network" className="py-24 px-6 bg-zinc-950 overflow-hidden relative">
      {/* Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#1D4ED8]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          /* Centralized the container */
          className="text-center flex flex-col items-center"
        >
          {/* Stretched Heading: Added tracking-tighter and increased leading */}
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] text-white mb-12 uppercase">
            Making house hunting <br />
            in cities <span className="text-[#1D4ED8]">stress-free</span> <br />
            for people
          </h2>

          {/* Stretched Description: increased tracking and max-width */}
          <div className="space-y-12 w-full flex flex-col items-center">
            <p className="text-lg md:text-xl text-zinc-400 font-medium leading-[1.8] tracking-widest max-w-5xl">
              By connecting with our service representatives, we share our knowledge 
              of your preferred neighborhood and real-time data, and we are helping 
              to improve our cities.
            </p>

            {/* Quote Section: Stretched border and wider max-width */}
            <div className="pt-10 border-t border-zinc-900 w-full max-w-4xl">
              <p className="text-base md:text-lg text-zinc-500 leading-[1.8] italic font-light tracking-wide">
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