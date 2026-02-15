import React from 'react';
import { motion, type Variants } from 'framer-motion';
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
  const features = [
    {
      title: "Our Fee Structure",
      description: "We structured our fees to serve as a financial shield, ensuring you only pay for actual value and never for exploitation",
      image: fee,
      linkText: "View pricing",
      isFeeStructure: true // Specific flag for the custom layout
    },
    {
      title: "Neighbourhood Tour",
      description: "We help you experience the neighbourhood vibe before even committing to hunt",
      image: tour,
      linkText: "Explore cities"
    },
    {
      title: "Post Roommate Request",
      description: "Connect freely with people who might want to live with you.",
      image: roommate,
      linkText: "Find matches"
    },
    {
      title: "Full Concierge Experience",
      description: (
        <div className="space-y-4">
          <p>
            From the moment you pay your one-time activation fee on our app, you unlock a 
            personalized <span className="text-[#2F3337] font-bold">"Tenant’s Concierge Service."</span>
          </p>
          <p>
            A dedicated representative guides you through the entire process—from 
            managing your hunt request to move-in and beyond.
          </p>
        </div>
      ),
      image: concierge,
      linkText: "Learn about concierge"
    },
    {
      title: "Protection",
      description: (
        <div className="space-y-4">
          <p>Our "Protect" protocol ensures you are never left vulnerable to unfair charges or substandard living conditions.</p>
          <ul className="space-y-3 text-[16px] md:text-[18px]">
            <li><span className="font-bold text-[#2F3337]">Financial Safeguard:</span> Our Move-In Checklist documents every inch of your space to ensure you get your full caution fee back.</li>
            <li><span className="font-bold text-[#2F3337]">Family-First Vetting:</span> We vet properties as if our own families were moving in. If it's not good enough for them, it's not shown to you.</li>
            <li><span className="font-bold text-[#2F3337]">Instant Legal Empowerment:</span> Receive our exclusive book, “Landlord, Agent & Your Rights,” to handle disputes confidently.</li>
          </ul>
        </div>
      ),
      image: protection,
      linkText: "Our safety standards"
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-[64px] font-extrabold tracking-[-0.04em] text-[#2F3337] mb-6">
            Why <span className="text-[#1D4ED8]">Choose</span> Us
          </h2>
          <p className="text-[19px] md:text-[22px] text-[#4F5662] max-w-2xl mx-auto font-medium leading-[1.5]">
            Join a community of over 1,000+ people redefining the rental journey every single month.
          </p>
        </motion.div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* IMAGE SIDE */}
              <div className="w-full lg:w-[45%]">
                <div 
                  className={`relative overflow-hidden rounded-[1.5rem] bg-[#F8F9FB] shadow-sm border border-zinc-100 group/img 
                  ${feature.isFeeStructure ? 'h-auto' : 'aspect-[3/4]'}`}
                >
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className={`w-full h-full transition-transform duration-1000 group-hover/img:scale-105 
                      ${feature.isFeeStructure ? 'block object-top' : 'object-cover'}`}
                  />
                </div>
              </div>

              {/* TEXT SIDE */}
              <div className="w-full lg:w-[55%] flex justify-center">
                <div className="max-w-md w-full">
                  <h3 className="text-3xl md:text-5xl font-extrabold text-[#2F3337] mb-6 tracking-tight leading-tight">
                    {feature.title}
                  </h3>
                  <div className="text-[17px] md:text-[20px] text-[#4F5662] leading-[1.6] mb-8 font-medium">
                    {feature.description}
                  </div>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-4 text-[#1D4ED8] font-bold text-lg md:text-xl group"
                  >
                    <span className="border-b-2 border-transparent group-hover:border-[#1D4ED8] transition-all duration-300">
                      {feature.linkText}
                    </span>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-zinc-200 flex items-center justify-center group-hover:bg-[#1D4ED8] group-hover:text-white transition-all duration-300">
                        <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;