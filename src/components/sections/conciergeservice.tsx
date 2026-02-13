import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Button } from '../ui/button';

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
    <section 
      id="solutions" 
      className="pt-12 pb-24 md:pt-20 md:pb-32 px-6 bg-zinc-50/50 overflow-hidden relative"
    >
      {/* Subtle Background Detail */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-zinc-200 to-transparent opacity-50" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-zinc-200 to-transparent opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Centered Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textVariants}
          className="text-center max-w-4xl mx-auto space-y-10"
        >
          {/* Main Heading */}
          <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter text-zinc-900">
            Our Concierge <br className="hidden md:block" /> Service
          </h2>
          
          <div className="flex flex-col items-center gap-10">
            <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl mx-auto leading-relaxed font-medium">
              Expert representation designed around your rental journey. Because real estate laws differ, 
              our concierge features and pricing are tailored to align with the unique requirements of each state.
            </p>
            
            <Button 
              className="rounded-full px-12 py-7 !bg-[#1D4ED8] !text-white hover:!bg-[#153ca3] hover:scale-105 transition-all duration-300 font-bold text-base shadow-2xl shadow-blue-200/50 border-none h-auto uppercase tracking-wider"
            >
              Learn More
            </Button>
          </div>
        </motion.div> 

      </div>
    </section>
  );
};

export default ConciergeService;