import React from 'react';
import { motion } from 'framer-motion';
import neighbourhood from '../../assets/neigbourhood.jpg'; 

const NeighborhoodTour: React.FC = () => {
  return (
    /* Reduced top padding from py-24 to pt-12 pb-24 to pull everything up */
      <section id="neighborhood-tour" className="pt-2 pb-24 px-6 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-20 items-center">
          
          {/* LEFT: Heading & Description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            /* Removed space-y-6 and used specific margins to tighten the text */
            className="text-center lg:text-left"
          >
            <div className="mb-4">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-zinc-900">
                Neighborhood <span className="text-[#1D4ED8]">Tour</span>
              </h2>
              <p className="text-lg md:text-xl text-zinc-500 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 mt-2">
                Take a virtual step into Ibadan's most secure and vibrant communities. 
                We've vetted every street so you can focus on finding a place that 
                truly feels like home.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button className="bg-zinc-900 text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-[#1D4ED8] transition-all shadow-lg hover:shadow-[#1D4ED8]/20">
                View Available Streets
              </button>
              <button className="bg-white text-zinc-900 border border-zinc-200 px-8 py-3.5 rounded-2xl font-bold hover:bg-zinc-50 transition-all">
                Safety Reports
              </button>
            </div>

            {/* Quick Stats - Adjusted padding top */}
            <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-zinc-200">
              <div>
                <p className="text-2xl font-black text-zinc-900">12+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Locations</p>
              </div>
              <div>
                <p className="text-2xl font-black text-zinc-900">100%</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Vetted</p>
              </div>
              <div>
                <p className="text-2xl font-black text-zinc-900">24/7</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Security</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Neighborhood Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Reduced height by changing aspect-square to aspect-video (16/9) or aspect-[21/9] */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white aspect-video lg:aspect-[21/10] bg-zinc-200"
            >
              <div className="w-full h-full bg-zinc-300 relative group">
                <img 
                  src={neighbourhood} 
                  alt="Ibadan Neighborhood" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Location Badge - Scaled down slightly */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-xl shadow-xl">
                  <p className="text-[10px] font-black text-[#1D4ED8] uppercase tracking-widest mb-0.5">Featured</p>
                  <p className="text-base font-bold text-zinc-900 leading-none">Oluyole Estate, Ibadan</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Background Elements - Scaled down */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#1D4ED8]/10 rounded-full blur-3xl" />
            
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -right-2 top-10 bg-white py-3 px-4 rounded-xl shadow-xl border border-zinc-100 z-20 hidden sm:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <p className="text-[11px] font-bold text-zinc-600">Safe Zone Verified</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default NeighborhoodTour;