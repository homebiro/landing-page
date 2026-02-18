import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';
import fee from '../../assets/fee.png';
import tour from '../../assets/tour.png';
import roommate from '../../assets/roommate.png';
import concierge from '../../assets/concierge.png';
import protection from '../../assets/protection.png';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const WhyChooseUs: React.FC = () => {
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

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

  const features = [
    {
      title: "Our Fee Structure",
      description: " Our fee structure, which includes the total package chaos box are structured to serve as a financial shield, ensuring you only need to pay for actual value and not for agent extortion. ",
      image: fee,
      linkText: "View pricing",
      isFeeStructure: true,
      onClick: () => setIsPricingOpen(true)
    },
    {
      title: "Neighbourhood Tour",
      description: "We help you experience the neighbourhood vibe before even committing to hunt in that area",                                    
      image: tour,
      linkText: "Explore cities",
    },
    {
      title: "Post Shared Apartment Request",
      description: " Create your algorithm and connect freely with people who might want to live with you",
      image: roommate,
      linkText: "Find matches",
    },
    {
      title: "Full Concierge Experience",
      description: (
        <div className="space-y-4 text-inherit">
          <p> From the moment you activate your one-time
              concierge fee, you unlock a personalized tenant concierge ready to
              professionally guide and manage your hunting experience, helping you vet every
              space as though their family were going to live in it by giving detailed disclosure <span className="font-bold">"Tenant’s Concierge Service."</span></p>
        </div>
      ),
      image: concierge,
      linkText: "Learn about concierge"
    },
    {
      title: "Protection",
      description: (
        <div className="space-y-4 text-inherit">
          <p>With Our Move in Checklist, we not only guarantee your refundable
            caution fee with the property manager, but also our newsletters on “landlord,
            agent, and your rights”, which is a lawyer in your pocket that helps you stay
            grounded with common problems with landlords and Property Agents</p>
        </div>
      ),
      image: protection,
      linkText: "Our safety standards"
    }
  ];

  const getSectionId = (title: string) => {
    if (title === "Concierge service") return "pricing";
    if (title === "Neighbourhood Tour") return "cities";
    return undefined;
  };

  const handleGetStarted = (planName: string) => {
    setSelectedPlan(planName);
    setIsFormOpen(true);
    setIsSubmitted(false);
  };

  return (
    <section id="about-us" className="py-24 bg-white overflow-visible relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="mb-20 text-center">
          <h2 className="text-4xl md:text-[64px] font-extrabold tracking-[-0.04em] text-[#2F3337] mb-6">
            Why <span className="text-[#1D4ED8]">Choose</span> Us
          </h2>
          <p className="text-[19px] md:text-[22px] text-[#4F5662] max-w-2xl mx-auto font-medium leading-[1.5]">
            Join a community of over 100 people redefining the rental journey every single month
          </p>
        </motion.div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              id={getSectionId(feature.title)}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }} 
              variants={sectionVariants} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 scroll-mt-32 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-[45%]">
                <div className={`relative overflow-hidden rounded-[1.5rem] bg-[#F8F9FB] shadow-sm border border-zinc-100 group/img ${feature.isFeeStructure ? 'h-auto' : 'aspect-[3/4]'}`}>
                  <img src={feature.image} alt={feature.title} className={`w-full h-full transition-transform duration-1000 group-hover/img:scale-105 ${feature.isFeeStructure ? 'block object-top' : 'object-cover'}`} />
                </div>
              </div>
              <div className="w-full lg:w-[55%] flex justify-center">
                <div className="max-w-md w-full">
                  <h3 className="text-3xl md:text-5xl font-extrabold text-[#2F3337] mb-6 tracking-tight leading-tight">{feature.title}</h3>
                  <div className="text-[17px] md:text-[20px] text-[#4F5662] leading-[1.6] mb-8 font-medium">{feature.description}</div>
                  <button onClick={feature.onClick} className="inline-flex items-center gap-4 text-[#1D4ED8] font-bold text-lg md:text-xl group">
                    <span className="border-b-2 border-transparent group-hover:border-[#1D4ED8] transition-all duration-300">{feature.linkText}</span>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-zinc-200 flex items-center justify-center group-hover:bg-[#1D4ED8] group-hover:text-white transition-all duration-300">
                      <ArrowRight size={20} className="transform transition-transform group-hover:translate-x-1" />
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
                  <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); setIsPricingOpen(false); }} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2 ml-1">Full Name</label>
                      <input required type="text" className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2 ml-1">Phone Number</label>
                      <input required type="tel" className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="+234 ..." />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2 ml-1">Preferred Location</label>
                      <input required type="text" className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="e.g. ibadan, Lagos" />
                    </div>
                    <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 mt-4">
                      Start Hunting
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center space-y-4">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check size={40} strokeWidth={3} />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900">House Hunting Request Sent!</h3>
                    <p className="text-zinc-600 text-lg font-medium">Homebiro will reach out to you shortly .</p>
                    <button onClick={() => setIsFormOpen(false)} className="mt-8 px-8 py-3 bg-zinc-900 text-white rounded-xl font-bold hover:bg-zinc-800 transition-all">Close</button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WhyChooseUs;