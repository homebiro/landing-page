import React, { useEffect, useState } from 'react';
import WaitlistForm from '../forms/waitlistform';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  // Sync internal render state with isOpen prop to allow for exit animations
  useEffect(() => {
    if (isOpen) setShouldRender(true);
  }, [isOpen]);

  // Handle the end of the transition to finally unmount the component
  const handleTransitionEnd = () => {
    if (!isOpen) setShouldRender(false);
  };

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-6 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onTransitionEnd={handleTransitionEnd}
    >
      {/* Backdrop with blur transition */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`} 
        onClick={onClose} 
      />
      
      {/* Modal Content: Scale and Fade animation */}
      <div className={`bg-white rounded-[2.5rem] p-8 md:p-12 max-w-md w-full relative shadow-2xl transition-all duration-500 transform ${
        isOpen 
          ? 'scale-100 translate-y-0 opacity-100' 
          : 'scale-95 translate-y-8 opacity-0'
      }`}>
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-[#1D4ED8] transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-8">
          {/* Branded background for the icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-[#1D4ED8] rounded-2xl mb-4 text-3xl animate-pulse">
            📱
          </div>
          <h3 className="text-2xl font-bold tracking-tight">App Coming Soon</h3>
          <p className="text-zinc-500 mt-2 text-sm leading-relaxed">
            We're building the ultimate tenant concierge app. Join the waitlist to get notified on launch.
          </p>
        </div>

        <WaitlistForm onSuccess={onClose} />
      </div>
    </div>
  );
};

export default WaitlistModal;