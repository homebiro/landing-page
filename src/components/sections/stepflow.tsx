import React from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useVibe } from '../../context/vibecontext';
import VibeForm from '../forms/vibeform';
import ContactForm from '../forms/contactform';

const StepFlow: React.FC = () => {
  const { vibeData } = useVibe();

  // Variants for the step content transitions
  const stepVariants: Variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  const progressVariants: Variants = {
    active: { scale: 1.1, backgroundColor: '#1D4ED8' },
    inactive: { scale: 1, backgroundColor: '#f4f4f5' },
    completed: { backgroundColor: '#10b981' } // Green for completion
  };

  return (
    <section id="vibe-check" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto">
        
        {/* Professional Progress Indicator */}
        <div className="flex justify-between mb-16 relative">
          {/* Progress Background Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-zinc-100 -translate-y-1/2 -z-10" />
          
          {/* Active Progress Line Layer */}
          <motion.div 
            className="absolute top-1/2 left-0 h-[2px] bg-[#1D4ED8] -translate-y-1/2 -z-10 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: (vibeData.step - 1) / 2 }}
            transition={{ duration: 0.5, ease: "circOut" }}
          />

          {[1, 2, 3].map((s) => (
            <div key={s} className="flex flex-col items-center gap-3">
              <motion.div 
                variants={progressVariants}
                animate={
                  vibeData.step > s ? 'completed' : 
                  vibeData.step === s ? 'active' : 'inactive'
                }
                className="w-12 h-12 rounded-2xl flex items-center justify-center font-black transition-shadow shadow-sm"
              >
                {vibeData.step > s ? (
                  <span className="text-white text-xl">✓</span>
                ) : (
                  <span className={vibeData.step === s ? 'text-white' : 'text-zinc-400'}>{s}</span>
                )}
              </motion.div>
              <span className={`text-[10px] uppercase tracking-widest font-black ${vibeData.step === s ? 'text-[#1D4ED8]' : 'text-zinc-300'}`}>
                {s === 1 && "Vibe"}
                {s === 2 && "Contact"}
                {s === 3 && "Done"}
              </span>
            </div>
          ))}
        </div>

        {/* Dynamic Header */}
        <div className="text-center mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={vibeData.step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl font-black tracking-tight text-zinc-900">
                {vibeData.step === 1 && "Define your Budget"}
                {vibeData.step === 2 && "Secure your Concierge"}
                {vibeData.step === 3 && "Request Received!"}
              </h2>
              <p className="text-zinc-500 mt-3 font-medium text-lg">
                {vibeData.step === 1 && "Tell us your preferences to start the hunt."}
                {vibeData.step === 2 && "We'll match you with a protection expert."}
                {vibeData.step === 3 && "High-five! We're on it."}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Form Container */}
        <div className="bg-white border border-zinc-200 rounded-[3rem] p-8 md:p-14 shadow-2xl shadow-zinc-100 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={vibeData.step}
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {vibeData.step === 1 && <VibeForm />}
              {vibeData.step === 2 && <ContactForm />}
              {vibeData.step === 3 && (
                <div className="text-center py-12">
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="text-7xl mb-6 inline-block"
                  >
                    🚀
                  </motion.div>
                  <h3 className="text-3xl font-black text-zinc-900">You're all set!</h3>
                  <p className="text-zinc-600 mt-4 text-lg leading-relaxed max-w-sm mx-auto">
                    A Homebiro concierge will WhatsApp you within <span className="text-[#1D4ED8] font-bold">15 minutes</span> to begin your search.
                  </p>
                  
                  <motion.div 
                    className="mt-10 p-4 bg-zinc-50 rounded-2xl border border-zinc-100 inline-flex items-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Concierge online now</span>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default StepFlow;