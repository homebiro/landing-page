import React from 'react';
import { useVibe } from '../../context/vibecontext';
import { Button } from '../ui/button';
import type { IbadanLocation } from '../../types';

const locations: IbadanLocation[] = ['Bodija', 'Akala Express', 'Jericho', 'Oluyole', 'Iyaganku', 'Samonda'];

const VibeForm: React.FC = () => {
  const { vibeData, updateVibe, nextStep } = useVibe();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {locations.map((loc) => (
          <button
            key={loc}
            onClick={() => updateVibe({ location: loc })}
            className={`py-3 px-4 rounded-xl border-2 font-semibold transition-all text-sm ${
              vibeData.location === loc 
              ? 'border-black bg-black text-white' 
              : 'border-zinc-200 hover:border-zinc-400'
            }`}
          >
            {loc}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <label className="block font-bold text-zinc-700">Monthly Budget (₦)</label>
        <input 
          type="text" 
          placeholder="e.g. 150k - 250k"
          className="w-full p-4 rounded-xl border border-zinc-200 outline-none focus:border-black transition-all"
          value={vibeData.budget}
          onChange={(e) => updateVibe({ budget: e.target.value })}
        />
      </div>

      <Button 
        variant="primary" 
        className="w-full" 
        disabled={!vibeData.location || !vibeData.budget}
        onClick={nextStep}
      >
        NEXT: MATCH WITH CONCIERGE
      </Button>
    </div>
  );
};

export default VibeForm;