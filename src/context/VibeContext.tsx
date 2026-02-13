import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface VibeContextType {
  cookiesAccepted: boolean;
  acceptCookies: () => void;
}

const VibeContext = createContext<VibeContextType | undefined>(undefined);

export const VibeProvider = ({ children }: { children: ReactNode }) => {
  const [cookiesAccepted, setCookiesAccepted] = useState(() => {
    return localStorage.getItem("cookiesAccepted") === "true";
  });

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setCookiesAccepted(true);
  };

  return (
    <VibeContext.Provider value={{ cookiesAccepted, acceptCookies }}>
      {children}
    </VibeContext.Provider>
  );
};

export const useVibe = () => {
  const context = useContext(VibeContext);
  if (!context) throw new Error("useVibe must be used within VibeProvider");
  return context;
};
