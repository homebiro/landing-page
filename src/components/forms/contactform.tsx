import React, { useState } from 'react';
import { useVibe } from '../../context/vibecontext';
import { supabase } from '../../lib/supabase';
import { Button } from '../ui/button';
import { ShieldCheck, User, Phone } from 'lucide-react'; // Added icons for a professional touch

const ContactForm: React.FC = () => {
  const { vibeData, updateVibe, nextStep } = useVibe();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: vibeData.name,
            whatsapp: vibeData.whatsapp,
            budget: vibeData.budget,
            location: vibeData.location,
            status: 'new'
          },
        ]);

      if (error) throw error;
      nextStep();
    } catch (err) {
      console.error('Error saving lead:', err);
      alert('Something went wrong. Please try again or message us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-5">
        {/* Full Name Field */}
        <div className="group">
          <label className="flex items-center gap-2 text-[13px] font-bold text-zinc-500 mb-2 ml-1 uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            Full Name
          </label>
          <input
            required
            type="text"
            placeholder="e.g. Segun Arinze"
            className="w-full p-4 rounded-2xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all duration-300 shadow-sm group-hover:border-zinc-300"
            value={vibeData.name}
            onChange={(e) => updateVibe({ name: e.target.value })}
          />
        </div>

        {/* WhatsApp Number Field */}
        <div className="group">
          <label className="flex items-center gap-2 text-[13px] font-bold text-zinc-500 mb-2 ml-1 uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5" />
            WhatsApp Number
          </label>
          <input
            required
            type="tel"
            placeholder="080..."
            className="w-full p-4 rounded-2xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all duration-300 shadow-sm group-hover:border-zinc-300"
            value={vibeData.whatsapp}
            onChange={(e) => updateVibe({ whatsapp: e.target.value })}
          />
        </div>
      </div>

      {/* Enhanced Privacy Note */}
      <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50 flex gap-3 items-start">
        <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <p className="text-[12px] text-blue-900/70 leading-relaxed font-medium">
          <strong className="text-blue-900">Privacy First:</strong> Your data is only shared with your 
          Homebiro Concierge. No spam, just your dream home.
        </p>
      </div>

      {/* Premium Button Styling */}
      <Button 
        type="submit" 
        variant="accent" 
        className="w-full py-7 rounded-2xl text-base font-bold tracking-tight shadow-xl shadow-blue-200/50 hover:shadow-blue-300/60 transition-all active:scale-[0.98]" 
        disabled={isSubmitting || !vibeData.name || !vibeData.whatsapp}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            SECURING CONCIERGE...
          </span>
        ) : 'COMPLETE REQUEST'}
      </Button>
    </form>
  );
};

export default ContactForm;