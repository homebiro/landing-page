import React, { createContext, useContext, useState, ReactNode } from 'react';
import { VibeData } from '../types';

interface VibeContextType {
  vibeData: VibeData;
  updateVibe: (newData: Partial<VibeData>) => void;
  nextStep: () => void;
  resetVibe: () => void;
}

const VibeContext = createContext<VibeContextType | undefined>(undefined);

const initialVibe: VibeData = {
  step: 1,
  budget: '',
  location: '',
  name: '',
  whatsapp: '',
};

export const VibeProvider = ({ children }: { children: ReactNode }) => {
  const [vibeData, setVibeData] = useState<VibeData>(initialVibe);

  const updateVibe = (newData: Partial<VibeData>) => {
    setVibeData((prev) => ({ ...prev, ...newData }));
  };

  const nextStep = () => setVibeData((prev) => ({ ...prev, step: prev.step + 1 }));
  const resetVibe = () => setVibeData(initialVibe);

  return (
    <VibeContext.Provider value={{ vibeData, updateVibe, nextStep, resetVibe }}>
      {children}
    </VibeContext.Provider>
  );
};

export const useVibe = () => {
  const context = useContext(VibeContext);
  if (!context) throw new Error('useVibe must be used within a VibeProvider');
  return context;
};