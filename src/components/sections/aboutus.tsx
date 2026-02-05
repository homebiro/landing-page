import React from 'react';
import { Button } from '../ui/Button';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="aspect-video bg-zinc-900 rounded-[2rem] overflow-hidden flex items-center justify-center text-white p-12 relative">
             <div className="text-center">
                <p className="text-zinc-400 text-sm mb-4 uppercase tracking-widest">Our Mission</p>
                <h3 className="text-3xl font-bold">To eliminate the 'Agent Fee Extortion' from Nigerian Tenants.</h3>
             </div>
             {/* Subtle decorative overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>

        <div className="space-y-6 order-1 lg:order-2">
          <h2 className="text-4xl font-black leading-tight">We aren't agents. <br/><span className="text-zinc-400">We are your protection.</span></h2>
          <p className="text-zinc-600 leading-relaxed text-lg">
            Homebiro was founded in Ibadan to solve one problem: the lack of transparency in the rental market. We don't represent landlords; we represent **you**, the tenant.
          </p>
          <div className="p-6 bg-zinc-50 rounded-2xl border-l-4 border-black">
            <p className="font-bold text-black italic">
              "Every Homebiro client receives our exclusive guide: Landlord, Agent & Your Rights — a legal roadmap to never being cheated again."
            </p>
          </div>
          <Button variant="outline">Learn more about our Concierges</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;