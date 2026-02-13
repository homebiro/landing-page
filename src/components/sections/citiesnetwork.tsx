import React from 'react';
import { motion } from 'framer-motion';
import smartconnection from '../../assets/smartconnection.jpg';

const CityNetwork: React.FC = () => {
  return (
    /* Changed bg-white to bg-zinc-950 (Rich Black) */
    <section id="city-network" className="pt-12 pb-24 px-6 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center lg:-mt-8">
          
          {/* LEFT: The Visual Representation of the "Network" */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl bg-zinc-900 aspect-video lg:aspect-[16/10]">
              <div className="w-full h-full relative">
                 <img 
                    src={smartconnection} 
                    alt="City Wide Network" 
                    className="w-full h-full object-cover block brightness-90" 
                 /> 
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1D4ED8]/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            
            {/* FIX: Removed 'hidden' so it shows on mobile, adjusted positioning/size for small screens */}
            <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-[#1D4ED8] text-white px-5 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl shadow-xl z-20">
               <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest">The "Agent's Agent"</p>
            </div>
          </motion.div>

          {/* RIGHT: Heading & Description */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            {/* Changed text-zinc-900 to text-white for the dark background */}
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] text-white mb-8">
              Making house hunting <br />
              in cities <span className="text-[#1D4ED8]">stress-free</span> <br />
              for people
            </h2>

            <div className="space-y-6">
              {/* Adjusted text color to zinc-400 for better readability on black */}
              <p className="text-lg text-zinc-400 font-medium leading-relaxed">
                By connecting with our service representatives, we share our knowledge 
                of your preferred neighborhood and real-time data, and we are helping 
                to improve our cities.
              </p>

              {/* Border changed to zinc-800 to be subtle on black */}
              <div className="pt-6 border-t border-zinc-800">
                <p className="text-base text-zinc-500 leading-relaxed italic">
                  "Our expansive city-wide network is the backbone of our guaranteed 
                  delivery for clients; we have become the 'agent’s agent.' Local partners 
                  and industry experts rely on our hyper-local knowledge and exclusive 
                  hidden inventory to deliver what no one else can."
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CityNetwork;