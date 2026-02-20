import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Button } from '../ui/button';

interface WaitlistFormProps {
  onSuccess: () => void;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [xAccount, setXAccount] = useState(''); // New state for X account
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage(null);

    const { error } = await supabase
      .from('waitlist_form')
      .insert([
        { 
          email_address: email, 
          phone_number: phone,
          x_handle: xAccount || null, // Insert null if empty so it stays optional
          status: 'pending' 
        }
      ]);

    if (error) {
      if (error.code === '23505') {
        setErrorMessage("You're already on the waitlist! ✨");
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
      setStatus('idle');
    } else {
      setStatus('success');
      setTimeout(onSuccess, 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === 'success' ? (
        <div className="p-4 bg-green-50 text-green-700 rounded-xl text-center font-medium animate-in fade-in zoom-in duration-300">
          You're on the list! ✨
        </div>
      ) : (
        <>
          <div className="space-y-3">
            <input
              required
              type="email"
              placeholder="Email address"
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#1D4ED8] outline-none transition-all shadow-sm"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errorMessage) setErrorMessage(null);
              }}
            />
            <input
              required
              type="tel"
              placeholder="WhatsApp number"
              className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#1D4ED8] outline-none transition-all shadow-sm"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errorMessage) setErrorMessage(null);
              }}
            />
            {/* Optional X Account Field */}
            <div className="relative">
              <input
                type="text"
                placeholder="X (Twitter) handle @username"
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#1D4ED8] outline-none transition-all shadow-sm"
                value={xAccount}
                onChange={(e) => setXAccount(e.target.value)}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-white px-1">
                Optional
              </span>
            </div>
          </div>

          {errorMessage && (
            <div className="px-1 animate-in slide-in-from-top-2 duration-300">
              <p className="text-sm font-bold text-[#E67E22] flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-[#E67E22]"></span>
                {errorMessage}
              </p>
            </div>
          )}

          <Button 
            variant="accent" 
            type="submit" 
            disabled={status === 'loading'}
            className="w-full !bg-[#1D4ED8] hover:opacity-90 transition-all active:scale-95"
          >
            {status === 'loading' ? 'Joining...' : 'Get Early Access'}
          </Button>
        </>
      )}
    </form>
  );
};

export default WaitlistForm;