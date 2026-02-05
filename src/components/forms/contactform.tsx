import React, { useState } from 'react';
import { useVibe } from '../../context/vibecontext';
import { supabase } from '../../lib/supabase';
import { Button } from '../ui/button';

const ContactForm: React.FC = () => {
  const { vibeData, updateVibe, nextStep } = useVibe();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('leads') // Ensure you have a 'leads' table in Supabase
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
      nextStep(); // Move to the "Success" step
    } catch (err) {
      console.error('Error saving lead:', err);
      alert('Something went wrong. Please try again or message us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-zinc-700 mb-2 text-left">Full Name</label>
          <input
            required
            type="text"
            placeholder="e.g. Segun Arinze"
            className="w-full p-4 rounded-xl border border-zinc-200 focus:border-black outline-none transition-all"
            value={vibeData.name}
            onChange={(e) => updateVibe({ name: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-zinc-700 mb-2 text-left">WhatsApp Number</label>
          <input
            required
            type="tel"
            placeholder="080..."
            className="w-full p-4 rounded-xl border border-zinc-200 focus:border-black outline-none transition-all"
            value={vibeData.whatsapp}
            onChange={(e) => updateVibe({ whatsapp: e.target.value })}
          />
        </div>
      </div>

      <div className="bg-green-50 p-4 rounded-xl border border-green-100">
        <p className="text-xs text-green-800 leading-relaxed">
          <strong>Privacy Note:</strong> Your data is shared only with your assigned 
          Homebiro Concierge to help with your search. No spam, ever.
        </p>
      </div>

      <Button 
        type="submit" 
        variant="accent" 
        className="w-full" 
        disabled={isSubmitting || !vibeData.name || !vibeData.whatsapp}
      >
        {isSubmitting ? 'SECURING CONCIERGE...' : 'COMPLETE REQUEST'}
      </Button>
    </form>
  );
};

export default ContactForm;