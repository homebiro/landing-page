import React from 'react';
import { motion, type Variants } from 'framer-motion';
// import { Button } from '../ui/button';
import { ShieldCheck, Info } from 'lucide-react'; // Using Lucide for a premium feel

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, x: -20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, staggerChildren: 0.1 } 
  }
};

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Visual Content: Mission Card */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={cardVariants}
          className="order-2 lg:order-1 relative group"
        >
          {/* Decorative Backglow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#1D4ED8]/10 to-[#E67E22]/5 rounded-[2.5rem] blur-2xl transition-opacity group-hover:opacity-100 opacity-50" />
          
          <div className="aspect-[4/3] bg-zinc-900 rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center text-white p-8 md:p-16 relative shadow-2xl">
            {/* Logo-inspired icon */}
            <div className="mb-8 w-16 h-16 rounded-full bg-[#E67E22]/10 border border-[#E67E22]/20 flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-[#E67E22]" />
            </div>
            
            <div className="text-center relative z-10">
              <p className="text-[#E67E22] text-xs font-bold mb-6 uppercase tracking-[0.3em]">
                Foundational Mission
              </p>
              <h3 className="text-3xl md:text-4xl font-black leading-tight max-w-md mx-auto">
                Eliminating Agent Fee Extortion <span className="text-zinc-500">for Nigerian Tenants.</span>
              </h3>
            </div>

            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={textVariants}
          className="space-y-8 order-1 lg:order-2"
        >
          <div className="space-y-4">
            <motion.h2 variants={textVariants} className="text-4xl md:text-6xl font-black leading-none tracking-tighter">
              We aren't agents. <br/>
              <span className="text-zinc-400 italic">We are your protection.</span>
            </motion.h2>
            
            <motion.p variants={textVariants} className="text-zinc-600 leading-relaxed text-lg md:text-xl max-w-xl">
              Homebiro was founded in Ibadan to solve a systemic crisis: the lack of transparency in the rental market. 
              <span className="text-black font-semibold"> We don't work for landlords.</span> We represent you, the tenant.
            </motion.p>
          </div>

          {/* Featured Insight Box */}
          <motion.div 
            variants={textVariants}
            className="p-8 bg-zinc-50 rounded-3xl border border-zinc-200 relative overflow-hidden group hover:border-[#1D4ED8]/30 transition-colors"
          >
            <div className="flex gap-4 items-start relative z-10">
              <Info className="w-6 h-6 text-[#1D4ED8] shrink-0 mt-1" />
              <p className="font-bold text-zinc-900 leading-snug">
                Every Homebiro client receives our exclusive legal roadmap: 
                <span className="text-[#1D4ED8]"> Landlord, Agent & Your Rights</span> — so you never get cheated again.
              </p>
            </div>
            {/* Decorative subtle gradient */}
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-[#1D4ED8]/5 rounded-tl-full translate-x-10 translate-y-10" />
          </motion.div>

          <motion.div variants={textVariants} className="pt-4">
            {/* <Button 
              variant="outline" 
              className="rounded-full px-8 py-6 border-2 hover:bg-[#1D4ED8] hover:text-white hover:border-[#1D4ED8] transition-all duration-300 font-bold"
            >
              Learn more about our Concierges
            </Button> */}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;