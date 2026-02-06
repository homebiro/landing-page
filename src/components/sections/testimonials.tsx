import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Tunde",
    location: "Bodija",
    videoUrl: "/videos/testimonial-1.mp4",
    quote: "Found a perfect 2-bedroom in 4 days. No agent wahala."
  },
  {
    name: "Blessing",
    location: "Akala Express",
    videoUrl: "/videos/testimonial-2.mp4",
    quote: "The HD video tour saved me so much transport money."
  },
  {
    name: "Dr. Kunle",
    location: "Jericho",
    videoUrl: "/videos/testimonial-3.mp4",
    quote: "The legal review of my agreement was a lifesaver."
  }
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const nextStep = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevStep = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 px-6 bg-[#F8F9FA] text-zinc-900 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Verified stories from our Residents
          </h2>
          <p className="text-zinc-500 font-medium">See how we're changing the game for renters in Ibadan.</p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center h-[400px]">
          <AnimatePresence mode="popLayout">
            {testimonials.map((t, i) => {
              if (i !== index) return null;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8, x: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -100 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative w-full max-w-2xl z-10"
                >
                  {/* The Premium Video Card */}
                  <div className="aspect-video rounded-[2rem] overflow-hidden bg-white relative shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 border-blue-100/50">
                    <video
                      src={t.videoUrl}
                      className="w-full h-full object-cover"
                      muted loop autoPlay playsInline
                    />

                    {/* Glossy Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex flex-col gap-1">
                        <span className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-1">Active Story</span>
                        <h3 className="text-white text-xl font-bold">{t.name}, {t.location}</h3>
                        <p className="text-zinc-200 italic text-sm">"{t.quote}"</p>
                      </div>
                    </div>

                    {/* Animated Play Button (Center) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-20 h-20 bg-blue-500/20 backdrop-blur-md rounded-full border border-blue-400/50 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                      >
                         <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[18px] border-l-white border-b-[12px] border-b-transparent ml-1" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Navigation Controls - UPDATED BUTTON SIZES */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:-px-8 z-20 pointer-events-none">
            <button 
              onClick={prevStep}
              className="p-2.5 rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors border border-zinc-100 group pointer-events-auto"
            >
              <ChevronLeft className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 transition-colors" />
            </button>
            <button 
              onClick={nextStep}
              className="p-2.5 rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors border border-zinc-100 group pointer-events-auto"
            >
              <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 transition-colors" />
            </button>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <div 
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-blue-500' : 'w-2 bg-zinc-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;