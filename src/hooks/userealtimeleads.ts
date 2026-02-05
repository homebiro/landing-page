import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export const useRealtimeLeads = () => {
  const [recentLead, setRecentLead] = useState<{ name: string; location: string } | null>(null);

  useEffect(() => {
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'leads' },
        (payload) => {
          setRecentLead({
            name: payload.new.name.split(' ')[0], // Only first name for privacy
            location: payload.new.location,
          });
          
          // Clear after 5 seconds
          setTimeout(() => setRecentLead(null), 5000);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return recentLead;
};