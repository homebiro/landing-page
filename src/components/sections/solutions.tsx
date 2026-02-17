import React from 'react';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const Solutions: React.FC = () => {
  return (
    /* Tight vertical padding for a sleek transition */
    <section id="solutions" className="py-12 md:py-20 px-6 bg-[#09090B] overflow-hidden relative">
      
      {/* Subtle background glow accent */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#1D4ED8]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col items-start text-left md:pl-20 lg:pl-32"
        >
          {/* HEADLINE */}
          <h2 className="text-4xl md:text-[64px] font-extrabold tracking-[-0.04em] leading-[1.05] text-white mb-12 max-w-4xl">
            Making house hunting in cities <span className="text-[#1D4ED8]">stress-free</span> for people
          </h2>

          {/* CONTENT STACK - Uniform styling for both descriptions */}
          <div className="flex flex-col items-start space-y-8 w-full">
            
            {/* Description 1 */}
            <p className="text-[20px] md:text-[24px] text-zinc-400 font-medium leading-[1.5] max-w-3xl tracking-tight">
              By connecting with our Service Representative, we share our knowledge of your 
              preferred neighbourhood and real-time data, and we’re helping to improve our cities.
            </p>

            {/* Description 2 - Now matches Description 1 styling */}
            <p className="text-[20px] md:text-[24px] text-zinc-400 font-medium leading-[1.5] max-w-3xl tracking-tight">
              Our expensive city-wide network is the backbone of our guaranteed delivery for 
              clients. We’ve become the "agent’s agent." Local partners and industry experts 
              rely on our hyper-local neighbourhood knowledge and exclusive hidden inventory 
              to deliver what no one else can.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;