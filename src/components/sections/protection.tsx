import React from 'react';
import { motion } from 'framer-motion';
// import protectionImg from '../../assets/protection-visual.jpg';

const Protection: React.FC = () => {
  return (
    <section id="protection" className="pt-0 pb-24 px-6 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          
          {/* LEFT: Heading & Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} 
            className="text-center lg:text-left pt-4"
          >
            <div>
              {/* Added text-[#1D4ED8] to give the heading that premium brand pop */}
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-[#1D4ED8] mb-6">
                Protection
              </h2>
              <p className="text-lg md:text-xl text-zinc-500 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                We don't just find houses; we secure your peace of mind. Every 
                lease agreement is scrutinized by our legal experts in Ibadan to 
                protect you from hidden clauses and unfair terms.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Protection Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl bg-zinc-100 aspect-video lg:aspect-[16/10]">
              <div className="w-full h-full bg-zinc-200 flex items-center justify-center relative group">
                {/* <img src={protectionImg} alt="Security Protection" className="w-full h-full object-cover" /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="text-zinc-400 font-bold uppercase tracking-tighter opacity-50 text-center px-4">
                  Verified Protection
                </span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#1D4ED8]/5 rounded-full blur-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Protection;