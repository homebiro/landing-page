import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { X, Check, Loader2 } from 'lucide-react';
import { Button } from '../ui/button';
import { supabase } from '../../lib/supabase';

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const ConciergeService: React.FC = () => {
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Form States
  const [selectedPlan, setSelectedPlan] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const pricingPlans = [
    { 
      name: "The Scout (Tier 1)", 
      price: "Free", 
      features: ["Unlimited Apartment Viewing", "Charge Inspection Fee", "Post Shared Apartment Request", "No concierge Support"], 
      color: "bg-zinc-100 text-zinc-900 border-zinc-200" 
    },
    { 
      name: "The Solo Hunter (Tier 2)", 
      price: "N12,500", 
      features: ["Zero Inspection Fee", "Max. 3 physical inspections", "Move-in Checklist (Refundable Caution Fee Guaranteed)", "Boost Shared Apartment Request", "Automatic Total Package Disclosure", "Apartment Status Overview", "Detailed Disclosure.", "Newsletter (Legal Guide)", "24/7 Personalized WhatsApp Concierge Support"], 
      color: "bg-blue-50 text-blue-900 border-blue-100", 
      highlight: true 
    },
    { 
      name: "The Family Suite (Tier 3)", 
      price: "N20,000", 
      features: ["Zero Inspection Fee", "Max. 4 physical inspections", "Move-in Checklist (Refundable Caution Fee Guaranteed)", "Boost Shared Apartment Request", "Automatic Total Package Disclosure", "Apartment Status Overview", "Detailed Disclosure.", "Newsletter (Legal Guide)", "24/7 Personalized WhatsApp Concierge Support"], 
      color: "bg-zinc-900 text-white border-zinc-800" 
    },
    { 
      name: "The Full Concierge Experience", 
      price: "N59,500", 
      features: ["All the Benefits of Tier 2 & 3", "Neighbourhood Tour", "3 Remote Proxy Inspection", "Access Vetted Handyman Services", "Rental Fee Negotiation", "Legal Support"], 
      color: "bg-blue-600 text-white border-blue-500" 
    }
  ];

  const handleGetStarted = (planName: string) => {
    setSelectedPlan(planName);
    setIsFormOpen(true);
    setIsSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await supabase
      .from('pricing_leads')
      .insert([
        { 
          full_name: fullName, 
          phone_number: phone, 
          preferred_location: location,
          selected_plan: selectedPlan 
        }
      ]);

    setIsLoading(false);

    if (!error) {
      setIsSubmitted(true);
      setFullName("");
      setPhone("");
      setLocation("");
    } else {
      console.error("Supabase Error:", error);
      alert("Error submitting request. Please try again.");
    }
  };

  return (
    <section 
      id="pricing" 
      className="relative pt-4 md:pt-8 pb-24 md:pb-32 px-6 bg-zinc-50/50 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-zinc-200 to-transparent opacity-50" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-zinc-200 to-transparent opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textVariants}
          className="text-center max-w-5xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-[60px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#2F3337]">
            Our Concierge Service
          </h2>
          
          <div className="flex flex-col items-center gap-8">
            <p className="text-[17px] md:text-[20px] text-[#4F5662] max-w-4xl leading-[1.6] font-medium tracking-tight">
              One-time activation fee, Pricing and features vary by state.
            </p>
            
            <Button 
              onClick={() => setIsPricingOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center rounded-lg text-[15px] font-bold px-10 h-[56px] sm:min-w-[220px] !bg-[#1D4ED8] !text-white hover:!bg-[#153ca3] transition-all duration-300 border-none shadow-none"
            >
              Learn More
            </Button>
          </div>
        </motion.div> 
      </div>

      <AnimatePresence>
        {isPricingOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} className="bg-white w-full max-w-7xl h-[90vh] rounded-[2.5rem] overflow-hidden flex flex-col relative shadow-2xl">
              <div className="p-8 border-b text-center relative bg-zinc-50">
                <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight">Pricing Plans</h2>
                <button onClick={() => setIsPricingOpen(false)} className="absolute right-8 top-1/2 -translate-y-1/2 p-2 hover:bg-zinc-200 rounded-full transition-colors"><X size={28} /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {pricingPlans.map((plan, i) => (
                    <div key={i} className={`p-8 rounded-[2rem] border flex flex-col shadow-sm ${plan.color}`}>
                      <div className="mb-6">
                        <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                        <div className="text-3xl font-black tracking-tighter">{plan.price}</div>
                      </div>
                      <ul className="space-y-4 mb-8 flex-1">
                        {plan.features.map((feat, j) => (
                          <li key={j} className="flex gap-3 text-sm font-medium leading-tight items-start">
                            <Check size={16} className="shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                      <button onClick={() => handleGetStarted(plan.name)} className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${plan.highlight ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200' : 'bg-zinc-200 text-zinc-800 hover:bg-zinc-300'}`}>
                        Start Hunting
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {isFormOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white w-full max-w-md p-8 rounded-[2rem] shadow-2xl relative">
              <button onClick={() => setIsFormOpen(false)} className="absolute right-6 top-6 p-2 hover:bg-zinc-100 rounded-full transition-colors"><X size={20} /></button>
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold mb-2">Almost there!</h3>
                  <p className="text-zinc-500 text-sm mb-6 font-medium">You've selected: <span className="text-blue-600 font-bold">{selectedPlan}</span></p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2 ml-1">Full Name</label>
                      <input required type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2 ml-1">Phone Number</label>
                      <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="+234 ..." />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2 ml-1">Preferred Location</label>
                      <input required type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="e.g. Ibadan, Lagos" />
                    </div>
                    <button type="submit" disabled={isLoading} className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 mt-4 flex items-center justify-center">
                      {isLoading ? <Loader2 className="animate-spin" size={20} /> : 'Start Hunting'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center space-y-4">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check size={40} strokeWidth={3} />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900">House Hunting Request Sent!</h3>
                    <p className="text-zinc-600 text-lg font-medium">Homebiro support team will reach out to you shortly.</p>
                    <button onClick={() => { setIsFormOpen(false); setIsPricingOpen(false); }} className="mt-8 px-8 py-3 bg-zinc-900 text-white rounded-xl font-bold hover:bg-zinc-800 transition-all">
                      Close
                    </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ConciergeService;