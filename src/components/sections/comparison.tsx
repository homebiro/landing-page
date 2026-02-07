import React from 'react';
import { motion, type Variants } from "framer-motion";
import { CheckCircle2, XCircle, ShieldCheck } from "lucide-react";

const Comparison: React.FC = () => {
  const points = [
    { 
      label: "Search Process", 
      traditional: "Endless Extortion from agents", 
      homebiro: "Curated concierge matching your 'Vibe'" 
    },
    { 
      label: "Inspections", 
      traditional: "Paying 'inspection fees' for bad houses", 
      homebiro: "HD Video tours & vetted reports first" 
    },
    { 
      label: "Legal Protection", 
      traditional: "Vague agreements, zero rights", 
      homebiro: "Complimentary 'Tenant Rights' legal guide" 
    },
    { 
      label: "Outcome", 
      traditional: "Stress, hidden fees, and uncertainty", 
      homebiro: "Guaranteed match or 100% money back" 
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="protection" className="py-20 md:py-32 px-4 md:px-6 bg-[#FAFAFA] overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <ShieldCheck size={14} className="text-[#1D4ED8]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1D4ED8]">Security Layer</span>
          </motion.div>
          
          <motion.h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-zinc-900">
            Professional <span className="text-zinc-400 italic font-medium">vs.</span> Chaotic
          </motion.h2>
          <p className="text-zinc-500 font-medium text-lg max-w-2xl mx-auto">
            We’ve eliminated the friction of the Ibadan rental market to provide a premium, protected experience.
          </p>
        </div>

        {/* Premium Comparison Wrapper */}
        <div className="relative">
          {/* Header Labels (Desktop Only) */}
          <div className="hidden md:grid grid-cols-12 gap-4 mb-8 px-10">
            <div className="col-span-4 text-xs font-black uppercase tracking-widest text-zinc-400">Standard Feature</div>
            <div className="col-span-4 text-xs font-black uppercase tracking-widest text-red-400">Traditional Market</div>
            <div className="col-span-4 text-xs font-black uppercase tracking-widest text-[#1D4ED8]">Homebiro Premium</div>
          </div>

          <div className="space-y-4 md:space-y-3">
            {points.map((point, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="group relative bg-white md:bg-transparent border md:border-none border-zinc-200 rounded-3xl md:rounded-none overflow-hidden"
              >
                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-12 gap-4 items-center bg-white border border-zinc-100 p-8 rounded-[2rem] transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-200/50 hover:border-blue-100 hover:-translate-y-1">
                  <div className="col-span-4">
                    <span className="text-lg font-black text-zinc-900">{point.label}</span>
                  </div>
                  <div className="col-span-4 flex items-start gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                    <XCircle size={20} className="text-red-400 mt-1 shrink-0" />
                    <span className="text-zinc-500 font-medium">{point.traditional}</span>
                  </div>
                  <div className="col-span-4 flex items-start gap-3 bg-blue-50/50 p-6 rounded-2xl border border-blue-50">
                    <CheckCircle2 size={20} className="text-[#1D4ED8] mt-1 shrink-0" />
                    <span className="text-zinc-900 font-bold leading-tight">{point.homebiro}</span>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden p-6 space-y-6">
                  <div className="flex justify-between items-center border-b border-zinc-50 pb-4">
                    <span className="text-sm font-black text-zinc-900 uppercase tracking-tight">{point.label}</span>
                    <div className="h-1 w-12 bg-blue-100 rounded-full" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                        <XCircle size={16} className="text-red-400" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-red-300 uppercase mb-1">Traditional</p>
                        <p className="text-zinc-500 text-sm font-medium">{point.traditional}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50">
                      <div className="w-8 h-8 rounded-full bg-[#1D4ED8] flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
                        <CheckCircle2 size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-[#1D4ED8] uppercase mb-1">Homebiro</p>
                        <p className="text-zinc-900 text-sm font-bold">{point.homebiro}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center space-y-4"
        >
          <p className="text-zinc-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
            † 100% Risk-Free Professional Search Guarantee
          </p>
          <div className="flex justify-center gap-8 opacity-30 grayscale contrast-125">
            {/* These can be small logos or text placeholders for NDPA/Legal partners */}
            <span className="text-[10px] font-black uppercase">Verified Vetting</span>
            <span className="text-[10px] font-black uppercase">NDPA Compliant</span>
            <span className="text-[10px] font-black uppercase">Secure Escrow</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Comparison;