import React from 'react';
import WaitlistForm from '../forms/WaitlistForm';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      {/* Modal Content */}
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 max-w-md w-full relative shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-zinc-100 rounded-2xl mb-4 text-3xl">
            📱
          </div>
          <h3 className="text-2xl font-bold tracking-tight">App Coming Soon</h3>
          <p className="text-gray-500 mt-2 text-sm">
            We're building the ultimate tenant concierge app. Join the waitlist to get notified on launch.
          </p>
        </div>

        <WaitlistForm onSuccess={onClose} />
      </div>
    </div>
  );
};

export default WaitlistModal;