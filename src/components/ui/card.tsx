import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = "", hover = true }) => {
  return (
    <div className={`
      bg-white border border-zinc-100 rounded-[2rem] p-8
      ${hover ? 'hover:border-zinc-300 hover:shadow-xl transition-all duration-300' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};