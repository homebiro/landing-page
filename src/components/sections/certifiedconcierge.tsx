import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Verified list of all 36 States + FCT
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
    if (!selectedState) {
      alert("Please select your State of Residence.");
      return;
    }
    if (!termsAccepted) {
      alert("Please accept the Terms & Conditions.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="py-32 bg-white font-sans">
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #3f3f46; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #1D4ED8; }
      `}} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#0A0D14] rounded-[3rem] p-8 md:p-16 lg:p-24 overflow-hidden relative border border-zinc-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D4ED8] opacity-10 blur-[120px] -mr-48 -mt-48" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* LEFT CONTENT */}
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="inline-block px-4 py-2 rounded-full bg-[#1D4ED8]/20 text-[#3B82F6] text-sm font-bold tracking-widest uppercase mb-6"
              >
                Join the Elite
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-8">
                Become a certified <br />
                <span className="text-[#1D4ED8]">Homebiro Concierge</span>
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed max-w-md">
                Earn professional commissions by helping premium tenants find verified homes across Nigeria.
              </p>
            </div>

            {/* FORM */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form key="form" exit={{ opacity: 0, scale: 0.95 }} onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-zinc-400 text-xs font-black mb-2 ml-1 uppercase tracking-widest">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="Chidi Okoro"
                        className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#1D4ED8] transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-400 text-xs font-black mb-2 ml-1 uppercase tracking-widest">Email Address</label>
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="chidi@homebiro.com"
                        className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#1D4ED8] transition-all"
                        required
                      />
                    </div>

                    {/* CUSTOM DROPDOWN */}
                    <div className="relative">
                      <label className="block text-zinc-400 text-xs font-black mb-2 ml-1 uppercase tracking-widest">State of Residence</label>
                      <div 
                        onClick={() => setIsOpen(!isOpen)}
                        className={`w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 text-white cursor-pointer flex justify-between items-center transition-all ${isOpen ? 'border-[#1D4ED8] ring-1 ring-[#1D4ED8]' : ''}`}
                      >
                        <span className={selectedState ? "text-white" : "text-zinc-500"}>
                          {selectedState || "Select your state"}
                        </span>
                        <motion.svg 
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          className="w-4 h-4 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute z-50 w-full mt-2 bg-[#1A1F26] border border-white/20 rounded-2xl max-h-60 overflow-y-auto shadow-2xl custom-scrollbar"
                          >
                            {NIGERIAN_STATES.map((state) => (
                              <div 
                                key={state}
                                onClick={() => { setSelectedState(state); setIsOpen(false); }}
                                className="px-6 py-4 text-white hover:bg-[#1D4ED8] cursor-pointer transition-all border-b border-white/5 last:border-0"
                              >
                                {state}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* CHECKBOX */}
                    <div className="flex items-start gap-3 px-1">
                      <input
                        id="terms"
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="mt-1 w-5 h-5 rounded border-zinc-700 bg-white/5 text-[#1D4ED8] accent-[#1D4ED8] cursor-pointer"
                      />
                      <label htmlFor="terms" className="text-zinc-500 text-[11px] leading-tight cursor-pointer">
                        I agree to the Homebiro <span className="text-zinc-300 underline font-medium">Terms of Service</span> and <span className="text-zinc-300 underline font-medium">Privacy Policy</span> regarding certification.
                      </label>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#1D4ED8] hover:bg-[#1e40af] text-white text-lg font-black py-5 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-900/40"
                    >
                      Apply for Certification
                    </button>
                  </motion.form>
                ) : (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="w-20 h-20 bg-[#1D4ED8]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#1D4ED8]">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Application Received</h3>
                    <p className="text-zinc-400 text-sm">Our recruitment team will review your application and contact you via email.</p>
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