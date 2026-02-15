import React from 'react';
import { motion, type Variants } from "framer-motion";
import { Button } from '../ui/button';
import rollup from '../../assets/rolup.png';

const Hero: React.FC = () => {
  const scrollToVibeCheck = () => {
    const element = document.getElementById('vibe-check');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.21, 1, 0.36, 1] } 
    },
  };

  return (
    <section className="relative pt-32 md:pt-48 pb-20 px-6 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        
        {/* CENTERED STACKED CONTENT */}
        <motion.div 
          className="flex flex-col items-center text-center space-y-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* PREMIUM HEADLINE - Fixed max-width to control stretch */}
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-[60px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#2F3337] max-w-4xl"
          >
            All-in-one tenant <span className="text-[#1D4ED8]">concierge service.</span>
          </motion.h1>

          {/* BOLT-STYLE STRETCHED SUB-HEADLINE - Matched max-w-4xl to fit heading */}
          <motion.p 
            variants={itemVariants} 
            className="text-[17px] md:text-[20px] text-[#4F5662] max-w-4xl leading-[1.6] font-medium tracking-tight"
          >
            Skip the agent and hunting chaos. Homebiro handles your searches, 
            inspections, and neighbourhood tour, so you can move into a home 
            you love without the stress.
          </motion.p>

          {/* BUTTON GROUP */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 pt-4 justify-center items-center w-full max-w-md sm:max-w-none">
            <Button 
              onClick={scrollToVibeCheck} 
              className="w-full sm:w-auto flex items-center justify-center rounded-lg text-[15px] font-bold px-10 h-[56px] sm:min-w-[220px] !bg-[#1D4ED8] !text-white hover:!bg-[#153ca3] transition-all duration-300 border-none shadow-none"
            >
              Start hunting today
            </Button>
            
            <button 
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg text-[15px] font-bold px-10 h-[56px] sm:min-w-[220px] bg-[#F2F5F7] text-[#2F3337] hover:bg-[#E8EDF0] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Watch how it works
            </button>
          </motion.div>
        </motion.div>

        {/* LARGE IMAGE UNDERNEATH */}
        <motion.div 
          className="relative w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.21, 1, 0.36, 1], delay: 0.4 }}
        >
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-2xl md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <img 
              src={rollup} 
              alt="Homebiro Service Display" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/[0.01]" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;