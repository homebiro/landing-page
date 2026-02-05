import React from 'react';

const testimonials = [
  {
    name: "Tunde",
    location: "Bodija",
    videoUrl: "/videos/testimonial-1.mp4", 
    quote: "Found a perfect 2-bed in 4 days. No agent wahala."
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
  return (
    <section id="testimonials" className="py-24 px-6 bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-4">Real Vibes. <br/><span className="text-zinc-500">Real Homes.</span></h2>
          <p className="text-zinc-400">See how we're changing the game for renters in Ibadan.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="group relative">
              <div className="aspect-[9/16] bg-zinc-800 rounded-[2rem] overflow-hidden border border-white/10 relative">
                {/* Video Element */}
                <video 
                  src={t.videoUrl} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                  muted
                  loop
                  playsInline
                />
                
                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                  <p className="font-bold text-xl">{t.name}, {t.location}</p>
                  <p className="text-sm text-zinc-300 italic mt-2">"{t.quote}"</p>
                </div>

                {/* Play Icon Decor */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
