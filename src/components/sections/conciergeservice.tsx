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
      id="pricing" 
      /* Reduced pt-12 to pt-4 and md:pt-20 to md:pt-8 to move it up */
      className="relative pt-4 md:pt-8 pb-24 md:pb-32 px-6 bg-zinc-50/50 overflow-hidden"
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
          className="text-center max-w-5xl mx-auto space-y-8"
        >
          {/* PREMIUM HEADLINE */}
          <h2 className="text-4xl md:text-[60px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#2F3337]">
            Our Concierge Service
          </h2>
          
          <div className="flex flex-col items-center gap-8">
            {/* BOLT-STYLE STRETCHED DESCRIPTION */}
            <p className="text-[17px] md:text-[20px] text-[#4F5662] max-w-4xl leading-[1.6] font-medium tracking-tight">
              One-time activation fee, Pricing and features vary by state.
            </p>
            
            {/* FORMAL BUTTON STYLE */}
            <Button 
              className="w-full sm:w-auto flex items-center justify-center rounded-lg text-[15px] font-bold px-10 h-[56px] sm:min-w-[220px] !bg-[#1D4ED8] !text-white hover:!bg-[#153ca3] transition-all duration-300 border-none shadow-none"
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