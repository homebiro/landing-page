import React from 'react';
import { Button } from './button';
import { supabase } from '../../lib/supabase';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, title = "Join the Waitlist" }) => {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const contact = formData.get('contact');

    const { error } = await supabase
      .from('leads')
      .insert([{ whatsapp: contact, status: 'app_waitlist' }]);

    if (!error) setSuccess(true);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-md rounded-[3rem] p-10 shadow-2xl animate-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-6 right-8 text-zinc-400 hover:text-black font-bold">CLOSE</button>
        
        {!success ? (
          <div className="space-y-6">
            <div className="inline-block bg-zinc-100 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Mobile App Coming Soon</div>
            <h3 className="text-3xl font-black leading-tight">{title}</h3>
            <p className="text-zinc-500 text-sm">Be the first to know when the Homebiro app drops on iOS and Android.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                name="contact"
                type="text" 
                placeholder="WhatsApp or Email" 
                required
                className="w-full p-4 rounded-2xl border border-zinc-100 bg-zinc-50 focus:border-black outline-none transition-all"
              />
              <Button variant="primary" className="w-full" disabled={loading}>
                {loading ? 'SAVING...' : 'NOTIFY ME'}
              </Button>
            </form>
          </div>
        ) : (
          <div className="text-center py-10 space-y-4">
            <div className="text-5xl">🚀</div>
            <h3 className="text-2xl font-bold">You're on the list!</h3>
            <p className="text-zinc-500">We'll text you the moment the app is live.</p>
            <Button variant="outline" onClick={onClose} className="w-full">CLOSE</Button>
          </div>
        )}
      </div>
    </div>
  );
};   
