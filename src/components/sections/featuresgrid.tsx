import React from 'react';
import { motion, type Variants } from "framer-motion";

const features = [
  {
    icon: "📹",
    title: "HD Video Inspections",
    description: "Don't waste transport money. We send high-definition video walkthroughs of every room, corner, and ceiling leak."
  },
  {
    icon: "🛡️",
    title: "Vibe & Safety Check",
    description: "We check the neighborhood for drainage issues, electricity stability, and noise levels before you commit."
  },
  {
    icon: "⚖️",
    title: "Tenant Rights Legal",
    description: "Our legal team reviews your tenancy agreement to ensure there are no 'hidden' clauses that can be used against you."
  },
  {
    icon: "🤝",
    title: "Direct Negotiation",
    description: "We handle the landlords and 'Omonile' headaches. You only show up when the deal is clean and the price is fair."
  },
  {
    icon: "🚚",
    title: "Move-in Support",
    description: "From reliable cleaners to vetted moving trucks in Ibadan, we ensure your first day in your new home is stress-free."
  },
  {
    icon: "💰",
    title: "Outcome Guarantee",
    description: "If we don't find you a house that matches your 'Vibe' within 30 days, your concierge fee is 100% refundable."
  }
];

const FeaturesGrid: React.FC = () => {
  // 1. Container Variants for Orchestration
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Each card follows the other
        delayChildren: 0.2,
      },
    },
  };

  // 2. Individual Card Variants
  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.215, 0.61, 0.355, 1] // Custom cubic-bezier for a "premium" pop
      } 
    },
  };

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-zinc-900">
            The Full Concierge <br />
            <span className="text-zinc-400">Experience.</span>
          </h2>
          <p className="text-zinc-500 max-w-xl font-medium text-lg leading-relaxed">
            We do the dirty work of house hunting in Ibadan so you don't have to. 
            <span className="text-[#1D4ED8]"> One fee. Total protection.</span>
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100/80 hover:bg-white hover:border-[#1D4ED8]/20 hover:shadow-2xl hover:shadow-blue-50 transition-all group relative cursor-default"
            >
              {/* Subtle accent line on hover */}
              <div className="absolute top-10 left-0 w-1 h-8 bg-[#1D4ED8] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="text-5xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 inline-block">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-black mb-4 text-zinc-900 group-hover:text-[#1D4ED8] transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;