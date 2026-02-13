import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs: React.FC = () => {
  return (
    <section 
      id="solutions" 
      className="pt-10 pb-24 md:pt-16 md:pb-32 px-6 bg-[#fafafa] overflow-hidden relative"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-12 left-10 w-72 h-72 bg-[#1D4ED8] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* TOP: Refined Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-zinc-900 mb-4">
            Why <span className="text-[#1D4ED8]">Choose</span> Us
          </h2>
          <p className="text-lg md:text-xl text-zinc-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Join a community of over <span className="text-zinc-900 font-bold italic">1,000+ Nigerians</span> redefining shared living every single month.
          </p>
        </motion.div>

        {/* BOTTOM: Text Left, Chat Right */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
          
          {/* LEFT: Text Content (Replaced Image) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1 flex flex-col justify-center"
          >
            <div className="max-w-[600px] space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                  Your safety and comfort <br /> are our <span className="text-[#1D4ED8]">top priorities.</span>
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed font-medium">
                  At Home Biro, we don't just find you a room; we curate a living experience. 
                  Our rigorous verification process ensures that every community member is 
                  vetted, providing you with peace of mind and a secure environment to thrive.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-3xl border border-zinc-100 shadow-sm">
                  <div className="w-10 h-10 bg-blue-50 text-[#1D4ED8] rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04kM12 21.48l.348-.13c2.635-.97 4.608-3.1 5.103-5.704a8.385 8.385 0 000-7.292" /></svg>
                  </div>
                  <h4 className="font-bold text-zinc-900 mb-1">Vetted Roommates</h4>
                  <p className="text-sm text-zinc-500 font-medium">Verified identities for every match.</p>
                </div>
                
                <div className="p-6 bg-white rounded-3xl border border-zinc-100 shadow-sm">
                  <div className="w-10 h-10 bg-blue-50 text-[#1D4ED8] rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h4 className="font-bold text-zinc-900 mb-1">Zero Stress</h4>
                  <p className="text-sm text-zinc-500 font-medium">Automated matching in minutes.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: App UI */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[300px] bg-[#050505] rounded-[3.5rem] p-2 shadow-2xl border border-zinc-800">
              <div className="relative w-full h-full bg-zinc-50 rounded-[3rem] overflow-hidden">
                
                {/* Compact App Header */}
                <div className="bg-white/90 backdrop-blur-md p-4 pt-8 flex items-center gap-3 border-b border-zinc-100">
                  <div className="w-10 h-10 rounded-xl bg-[#1D4ED8] flex items-center justify-center font-bold text-white shadow-lg">HB</div>
                  <div>
                    <p className="text-zinc-900 text-xs font-bold">Home Biro</p>
                    <p className="text-green-500 text-[9px] font-bold uppercase tracking-widest flex items-center gap-1">
                      <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" /> Online
                    </p>
                  </div>
                </div>

                {/* Compact Chat Body */}
                <div className="h-[360px] p-5 flex flex-col gap-5 overflow-y-auto bg-[#FBFBFB]">
                  <div className="flex flex-col gap-1.5">
                    <div className="bg-white text-zinc-800 p-4 rounded-2xl rounded-tl-none shadow-sm border border-zinc-100 max-w-[85%]">
                        <p className="text-xs leading-relaxed font-medium text-zinc-800">
                        I need a roommate match in <span className="text-[#1D4ED8] font-bold">Oluyole</span>.
                        </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    <div className="bg-[#1D4ED8] text-white p-4 rounded-2xl rounded-tr-none shadow-md max-w-[85%]">
                        <p className="text-xs leading-relaxed font-medium text-white">
                        Checking... we have 3 matches that fit your vibe!
                        </p>
                    </div>
                    <span className="text-[8px] text-zinc-400 font-bold uppercase mr-1">Seen</span>
                  </div>

                  <div className="flex items-center gap-2 px-1">
                    <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-[#1D4ED8] rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-[#1D4ED8] rounded-full animate-bounce [animation-delay:0.2s]" />
                    </div>
                    <span className="text-[9px] font-bold text-[#1D4ED8] uppercase tracking-wider">Searching...</span>
                  </div>
                </div>

                {/* Refined Input */}
                <div className="p-4 bg-white border-t border-zinc-100">
                  <div className="h-10 bg-zinc-50 rounded-xl border border-zinc-200 px-4 flex items-center justify-between">
                    <span className="text-zinc-400 text-[10px] font-medium">Type a message...</span>
                    <div className="w-7 h-7 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M12 4.5v15m7.5-7.5h-15"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;