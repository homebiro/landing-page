import React from 'react';
import { motion } from 'framer-motion';
// Your import is correct here
import conciergexperience from '../../assets/conciergexperience.jpg';

const ConciergeExperience: React.FC = () => {
  return (
    <section id="concierge-experience" className="pt-8 pb-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Property Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl bg-zinc-100 aspect-video lg:aspect-[16/10]">
              <div className="w-full h-full relative group">
                
                {/* Fixed: Un-commented the img tag and used your imported variable */}
                <img 
                  src={conciergexperience} 
                  alt="Premium Ibadan Property Concierge" 
                  className="w-full h-full object-cover"
                />

                {/* Keeping the premium gradient overlay to ensure the "Property Visual" text logic doesn't interfere */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Heading & Description */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-zinc-900">
                The Full <br />
                <span className="text-[#1D4ED8]">Concierge</span> <br />
                Experience
              </h2>
              <p className="text-lg md:text-xl text-zinc-500 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
               Experience residential transition without the friction. From chauffeured property tours to expert legal advocacy and end-to-end relocation management, we ensure your arrival is as distinguished as your destination—regardless of the horizon.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ConciergeExperience;