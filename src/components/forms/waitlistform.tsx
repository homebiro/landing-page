import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Button } from '../ui/Button';

interface WaitlistFormProps {
  onSuccess: () => void;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ onSuccess }) => {
  const [contact, setContact] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const { error } = await supabase
      .from('waitlist') // Ensure this table exists in your Supabase DB
      .insert([{ contact_info: contact, source: 'landing_page_nav' }]);

    if (error) {
      alert("Error joining waitlist. Please try again.");
      setStatus('idle');
    } else {
      setStatus('success');
      setTimeout(onSuccess, 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === 'success' ? (
        <div className="p-4 bg-green-50 text-green-700 rounded-xl text-center font-medium">
          You're on the list! ✨
        </div>
      ) : (
        <>
          <input
            required
            type="text"
            placeholder="WhatsApp or Email"
            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-black outline-none transition-all"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <Button variant="accent" className="w-full" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Joining...' : 'Get Early Access'}
          </Button>
        </>
      )}
    </form>
  );
};

export default WaitlistForm;