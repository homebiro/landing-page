import React from 'react';

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
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            The Full Concierge <br />
            <span className="text-zinc-400">Experience.</span>
          </h2>
          <p className="text-zinc-500 max-w-xl font-medium">
            We do the dirty work of house hunting in Ibadan so you don't have to. 
            One fee. Total protection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-all group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-extrabold mb-3">{feature.title}</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;