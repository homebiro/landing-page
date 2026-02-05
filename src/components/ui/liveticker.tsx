import React from 'react';
import { useRealtimeLeads } from '../../hooks/useRealtimeLeads';

const LiveTicker: React.FC = () => {
  const lead = useRealtimeLeads();

  if (!lead) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[80] animate-in slide-in-from-left-full duration-500">
      <div className="bg-white border border-zinc-200 shadow-xl rounded-2xl p-4 flex items-center gap-4">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">
          ⚡
        </div>
        <div>
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-tighter">Live Activity</p>
          <p className="text-sm font-semibold">
            {lead.name} just requested a concierge in <span className="text-green-600">{lead.location}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveTicker;
