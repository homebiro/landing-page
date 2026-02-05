import React from 'react';

const Comparison: React.FC = () => {
  const points = [
    { 
      label: "Search Process", 
      traditional: "Endless Extortion from agents", 
      homebiro: "Curated concierge matching your 'Vibe'" 
    },
    { 
      label: "Inspections", 
      traditional: "Paying 'inspection fees' for bad houses", 
      homebiro: "HD Video tours & vetted reports first" 
    },
    { 
      label: "Legal Protection", 
      traditional: "Vague agreements, zero rights", 
      homebiro: "Complimentary 'Tenant Rights' legal guide" 
    },
    { 
      label: "Outcome", 
      traditional: "Stress, hidden fees, and uncertainty", 
      homebiro: "Guaranteed match or 100% money back" 
    }
  ];

  return (
    <section id="protection" className="py-24 px-6 bg-zinc-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tight mb-4">The Protection Layer</h2>
          <p className="text-zinc-500 font-medium">Why smart tenants in Ibadan are switching to Homebiro.</p>
        </div>

        <div className="bg-white rounded-[2.5rem] overflow-hidden border border-zinc-200 shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-100/50">
                <th className="p-6 md:p-8 text-sm uppercase tracking-widest font-bold text-zinc-400">Feature</th>
                <th className="p-6 md:p-8 text-lg font-black text-red-500">Traditional Market</th>
                <th className="p-6 md:p-8 text-lg font-black text-brand-green bg-zinc-100/30">Homebiro Concierge</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {points.map((point, i) => (
                <tr key={i} className="group hover:bg-zinc-50/50 transition-colors">
                  <td className="p-6 md:p-8 font-bold text-zinc-900">{point.label}</td>
                  <td className="p-6 md:p-8 text-zinc-500">{point.traditional}</td>
                  <td className="p-6 md:p-8 font-semibold text-black bg-zinc-50/30 group-hover:bg-transparent transition-colors">
                    {point.homebiro}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
