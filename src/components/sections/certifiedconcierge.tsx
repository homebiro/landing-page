import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", 
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT (Abuja)", "Gombe", 
  "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", 
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", 
  "Taraba", "Yobe", "Zamfara"
];

const CertifiedConcierge: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedState, setSelectedState] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedState) return;
    if (!termsAccepted) return;
    setSubmitted(true);
  };

  return (
    <section id="certified-concierge" className="py-12 md:py-24 lg:py-32 bg-white font-sans overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #27272a; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #1D4ED8; }
      `}} />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-[#0A0D14] rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-20 overflow-hidden relative border border-zinc-800/50 shadow-2xl">
          
          {/* Animated Background Orbs */}
          <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#1D4ED8] opacity-[0.07] blur-[100px] -mr-32 -mt-32 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-500 opacity-[0.05] blur-[80px] -ml-24 -mb-24 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* LEFT CONTENT - Spans 7 cols on desktop */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#3B82F6] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-6">
                  Partnership Opportunity
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 md:mb-8">
                  Become Our Tenant <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8]">
                    Concierge
                  </span>
                </h2>
                <p className="text-base md:text-xl text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  JOIN OUR PHYSICAL NETWORK OF PROFESSIONALS IN CITIES
                  WORKING FROM HOME. Earn industry-leading commissions by
                  facilitating premium rentals for House Hunters.
                </p>
              </motion.div>
            </div>

            {/* FORM - Spans 5 cols on desktop */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 bg-white/[0.03] backdrop-blur-xl p-6 md:p-10 rounded-[2rem] border border-white/10 ring-1 ring-white/5 shadow-2xl"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form key="form" exit={{ opacity: 0, y: -10 }} onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1.5">
                      <label className="text-white text-[10px] font-bold uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Chidi Okoro"
                        className="w-full bg-zinc-900/40 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/50 focus:border-[#1D4ED8] transition-all text-sm"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-white text-[10px] font-bold uppercase tracking-widest ml-1">Professional Email</label>
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full bg-zinc-900/40 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/50 focus:border-[#1D4ED8] transition-all text-sm"
                        required
                      />
                    </div>

                    <div className="relative space-y-1.5">
                      <label className="text-white text-[10px] font-bold uppercase tracking-widest ml-1">Primary Region</label>
                      <div 
                        onClick={() => setIsOpen(!isOpen)}
                        className={`w-full bg-zinc-900/60 border border-white/10 rounded-xl px-5 py-3.5 text-white cursor-pointer flex justify-between items-center transition-all hover:bg-zinc-900/80 ${isOpen ? 'ring-2 ring-[#1D4ED8]/50 border-[#1D4ED8]' : ''}`}
                      >
                        <span className={`text-sm ${selectedState ? "text-white" : "text-zinc-600"}`}>
                          {selectedState || "Select State"}
                        </span>
                        <motion.svg 
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div 
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            className="absolute z-50 w-full mt-2 bg-[#161A22] border border-white/10 rounded-xl max-h-56 overflow-y-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)] custom-scrollbar backdrop-blur-md"
                          >
                            {NIGERIAN_STATES.map((state) => (
                              <div 
                                key={state}
                                onClick={() => { setSelectedState(state); setIsOpen(false); }}
                                className="px-5 py-3 text-sm text-zinc-300 hover:bg-[#1D4ED8] hover:text-white cursor-pointer transition-colors border-b border-white/5 last:border-0"
                              >
                                {state}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="flex items-start gap-3 py-2">
                      <div className="relative flex items-center h-5">
                        <input
                          id="terms"
                          type="checkbox"
                          required
                          checked={termsAccepted}
                          onChange={(e) => setTermsAccepted(e.target.checked)}
                          className="w-5 h-5 rounded border-zinc-800 bg-zinc-900 text-[#1D4ED8] focus:ring-[#1D4ED8] focus:ring-offset-zinc-900 accent-[#1D4ED8] cursor-pointer"
                        />
                      </div>
                      <label htmlFor="terms" className="text-zinc-500 text-[10px] md:text-[11px] leading-snug cursor-pointer select-none">
                        I agree to the Homebiro <span className="text-zinc-300 underline underline-offset-2">Terms of Service</span> and <span className="text-zinc-300 underline underline-offset-2">Privacy Policy</span> regarding agent certification.
                      </label>
                    </div>

                    <button 
                      type="submit"
                      disabled={!selectedState || !termsAccepted}
                      className="group w-full bg-[#1D4ED8] hover:bg-[#2563EB] disabled:opacity-50 disabled:hover:bg-[#1D4ED8] text-white text-sm md:text-base font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-blue-950/20"
                    >
                      Apply for Training
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10 md:py-16">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-500">
                      <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">Application Sent</h3>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                      Thank you for your interest. Our partner relations team will review your profile and reach out within 48 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertifiedConcierge;