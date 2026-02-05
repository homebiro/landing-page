import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { supabase } from '../../lib/supabase';

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('leads').insert([{ whatsapp: email, status: 'waitlist' }]);
    if (!error) setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-zinc-100 rounded-[3rem] p-12 md:p-20 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic">
            "I'm looking for something <span className="text-green-600">very specific.</span>"
          </h2>
          <p className="text-zinc-600 text-lg">
            Have a unique request or want to partner with us? Drop your WhatsApp or Email and our Head Concierge will reach out personally.
          </p>

          {!sent ? (
            <form onSubmit={handleWaitlist} className="flex flex-col sm:row gap-4">
              <input 
                type="text" 
                placeholder="WhatsApp or Email" 
                className="flex-1 px-6 py-4 rounded-full border border-zinc-200 outline-none focus:border-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button variant="primary" type="submit" className="px-10">MESSAGE ME</Button>
            </form>
          ) : (
            <div className="bg-green-100 text-green-800 p-4 rounded-2xl font-bold">
              Got it! We'll be in touch shortly. ⚡
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;