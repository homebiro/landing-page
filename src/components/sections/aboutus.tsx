import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Asset imports (Ensure these paths remain correct in your project)
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
      description: "Our fee structure, which includes the total package chaos box are structured to serve as a financial shield, ensuring you only need to pay for actual value and not for agent extortion.",
      image: fee,
      linkText: "Learn More",
    },
    {
      title: "Neighbourhood Tour",
      description: "We help you experience the neighbourhood vibe before even committing to hunt in that area", 
      image: tour,
      linkText: "Explore cities",
    },
    {
      title: "Post Shared Apartment Request",
      description: "Create your algorithm and connect freely with people who might want to live with you",
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

  return (
    <section id="about-us" className="py-24 bg-white overflow-visible relative">
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
            Join a community of over 100 people redefining the rental journey every single month
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
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 scroll-mt-32 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-[45%]">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-[#F8F9FB] shadow-sm border border-zinc-100 group/img aspect-[4/3] lg:aspect-[3/4]">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105" 
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-[55%] flex justify-center">
                <div className="max-w-md w-full text-center lg:text-left">
                  <h3 className="text-3xl md:text-5xl font-extrabold text-[#2F3337] mb-6 tracking-tight leading-tight">
                    {feature.title}
                  </h3>
                  <div className="text-[17px] md:text-[20px] text-[#4F5662] leading-[1.6] mb-8 font-medium">
                    {feature.description}
                  </div>
                  <button className="inline-flex items-center gap-4 text-[#1D4ED8] font-bold text-lg md:text-xl group">
                    <span className="border-b-2 border-transparent group-hover:border-[#1D4ED8] transition-all duration-300">
                      {feature.linkText}
                    </span>
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
    </section>
  );
};

export default WhyChooseUs;