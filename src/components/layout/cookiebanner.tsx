import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('homebiro-cookies');
    if (!consent) setIsVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('homebiro-cookies', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 left-6 md:left-auto md:w-96 z-[110] animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="bg-zinc-900 text-white p-6 rounded-3xl shadow-2xl border border-white/10">
        <p className="text-sm text-zinc-300 leading-relaxed mb-4">
          We use cookies to enhance your experience and analyze our traffic to better protect Ibadan tenants. 
          <a href="#" className="text-white underline ml-1">Learn more</a>
        </p>
        <button 
          onClick={accept}
          className="w-full bg-white text-black py-3 rounded-xl font-bold text-sm hover:bg-zinc-200 transition-colors"
        >
          I UNDERSTAND
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;