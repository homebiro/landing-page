import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Button } from '../ui/button';
import conciergeServiceHero from '../../assets/concierge.png'; 

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const ConciergeService: React.FC = () => {
  return (
    <section id="solutions" className="py-24 md:py-40 px-6 bg-zinc-50/50 overflow-hidden relative">
      {/* Subtle Background Detail */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-zinc-200 to-transparent opacity-50" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-zinc-200 to-transparent opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Centered Header Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textVariants}
          className="text-center max-w-4xl mx-auto mb-20 space-y-6"
        >
          <h2 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tight text-zinc-900">
            Our Concierge <br className="hidden md:block" /> Service
          </h2>
          
          <div className="flex flex-col items-center gap-8">
            <p className="text-lg md:text-xl text-zinc-500 max-w-xl mx-auto leading-relaxed">
              Expert representation designed around your rental journey. Because real estate laws differ, 
              our concierge features and pricing are tailored to align with the unique requirements of each state.
            </p>
            
            <Button 
              className="rounded-full px-10 py-6 !bg-[#1D4ED8] !text-white hover:!bg-[#153ca3] hover:scale-105 transition-all duration-300 font-bold text-sm shadow-xl shadow-blue-200/50 border-none h-auto"
            >
              LEARN MORE
            </Button>
          </div>
        </motion.div>

        {/* Bottom Full-Width Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative w-full rounded-[2.5rem] md:rounded-[5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] aspect-[16/10] md:aspect-[21/9] group bg-zinc-200"
        >
          <img 
            src={conciergeServiceHero} 
            alt="Homebiro Concierge Service" 
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
          />
          
          {/* Refined Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 md:p-20">
            <div className="max-w-2xl space-y-4">
              <div className="w-12 h-1 bg-[#1D4ED8]" />
              <p className="text-white text-2xl md:text-4xl font-bold leading-tight">
                Professional boots on the ground, representing your interests in every city.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConciergeService;