import React from 'react';
import { useVibe } from '../../context/vibecontext';
import VibeForm from '../forms/VibeForm';
import ContactForm from '../forms/ContactForm';

const StepFlow: React.FC = () => {
  const { vibeData } = useVibe();

  return (
    <section id="vibe-check" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Progress Indicator */}
        <div className="flex justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-zinc-100 -translate-y-1/2 -z-10" />
          {[1, 2, 3].map((s) => (
            <div 
              key={s}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${
                vibeData.step >= s ? 'bg-[#2ecc71] text-white scale-110' : 'bg-zinc-100 text-zinc-400'
              }`}
            >
              {vibeData.step > s ? '✓' : s}
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            {vibeData.step === 1 && "Find your Ibadan Vibe"}
            {vibeData.step === 2 && "Secure your Concierge"}
            {vibeData.step === 3 && "Request Received!"}
          </h2>
          <p className="text-zinc-500 mt-2">
            {vibeData.step === 1 && "Tell us where and how you want to live."}
            {vibeData.step === 2 && "We'll match you with a protection expert."}
          </p>
        </div>

        {/* Step Rendering */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
          {vibeData.step === 1 && <VibeForm />}
          {vibeData.step === 2 && <ContactForm />}
          {vibeData.step === 3 && (
            <div className="text-center py-8 animate-in zoom-in duration-500">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold">You're all set!</h3>
              <p className="text-zinc-600 mt-2">A Homebiro concierge will WhatsApp you within 15 minutes.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StepFlow;