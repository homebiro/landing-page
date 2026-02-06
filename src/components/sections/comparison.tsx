import React from 'react';
import { motion, type Variants } from "framer-motion"; // Type-safe import
import { CheckCircle2, XCircle } from "lucide-react"; // Optional: adding icons for professionalism

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

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rowVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="protection" className="py-24 px-6 bg-zinc-50 overflow-hidden">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-zinc-900"
          >
            The Protection Layer
          </motion.h2>
          <p className="text-zinc-500 font-medium text-lg">
            Why smart tenants in Ibadan are switching to <span className="text-[#1D4ED8] font-bold">Homebiro</span>.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-zinc-200 shadow-2xl shadow-zinc-200/50">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50 border-b border-zinc-100">
                <th className="p-6 md:p-10 text-[10px] md:text-xs uppercase tracking-[0.2em] font-black text-zinc-400">Feature</th>
                <th className="p-6 md:p-10 text-xl font-black text-red-500/80 italic">Traditional</th>
                <th className="p-6 md:p-10 text-xl font-black text-[#1D4ED8] bg-blue-50/30">
                  <span className="flex items-center gap-2">
                    Homebiro <span className="text-[10px] bg-[#E67E22] text-white px-2 py-0.5 rounded-full uppercase tracking-tighter hidden md:inline">Shield</span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {points.map((point, i) => (
                <motion.tr 
                  key={i} 
                  variants={rowVariants}
                  className="group hover:bg-zinc-50 transition-colors"
                >
                  <td className="p-6 md:p-10">
                    <span className="block font-black text-zinc-900 text-sm md:text-base">{point.label}</span>
                  </td>
                  <td className="p-6 md:p-10">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 text-red-300 group-hover:text-red-500 transition-colors hidden md:block">
                         <XCircle size={18} />
                      </span>
                      <span className="text-zinc-500 text-sm md:text-base leading-relaxed">{point.traditional}</span>
                    </div>
                  </td>
                  <td className="p-6 md:p-10 bg-blue-50/10 group-hover:bg-transparent transition-colors">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 text-[#1D4ED8] hidden md:block">
                        <CheckCircle2 size={18} />
                      </span>
                      <span className="font-bold text-zinc-900 text-sm md:text-base leading-relaxed">
                        {point.homebiro}
                      </span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Footer Guarantee text */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-10 text-zinc-400 text-sm font-bold uppercase tracking-widest"
        >
          † 100% Risk-Free Professional Search
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Comparison;