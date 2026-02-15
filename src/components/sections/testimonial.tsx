import React from 'react';
import { motion, type Variants } from 'framer-motion';
import man1 from '../../assets/man1.jpg';
import lady from '../../assets/lady.jfif';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Chidi Okoro",
      role: "Tenant in Lagos",
      // Replace with your actual asset paths
      avatar: man1, 
      content: "The Concierge service is a game changer. I was worried about the move-in process, but having a dedicated rep made sure I didn't pay a kobo more than necessary. Finally, a platform that actually protects the tenant.",
    },
    {
      name: "Sarah Williams",
      role: "Recent Graduate",
      // Replace with your actual asset paths
      avatar: lady,
      content: "I found my roommate and my apartment through here. The vetting process gave me so much peace of mind. The 'Landlord & Your Rights' book they gave me has already saved me from one major dispute!",
    }
  ];

  return (
    <section className="py-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#2F3337] mb-4">
            Hear from our <span className="text-[#1D4ED8]">Community</span>
          </h2>
          <p className="text-[#4F5662] text-lg max-w-xl mx-auto font-medium">
            Real stories from people who redefined their rental journey with us.
          </p>
        </div>

        {/* Testimonial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white p-8 md:p-10 rounded-[2rem] border border-zinc-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* Quote Icon */}
                <div className="text-[#1D4ED8] mb-6 opacity-20">
                  <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                    <path d="M0 18.2C0 8.8 6.4 2.2 15 0l2.4 4.6C12.4 6.2 9.6 9.4 9 13.4h7.6v16H0v-11.2zm23.4 0c0-9.4 6.4-16 15-18.2l2.4 4.6c-5 1.6-7.8 4.8-8.4 8.8H40v16H23.4v-11.2z" />
                  </svg>
                </div>
                
                <p className="text-[#4F5662] text-[18px] md:text-[20px] leading-[1.7] italic mb-8 font-medium">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-zinc-50 pt-6">
                {/* User Avatar Image */}
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#1D4ED8]/10">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#2F3337] text-lg">{t.name}</h4>
                  <p className="text-sm text-[#4F5662] font-semibold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;