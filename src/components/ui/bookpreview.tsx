import React from 'react';

const BookPreview: React.FC = () => {
  return (
    <div className="relative group cursor-pointer">
      {/* 3D Book Effect */}
      <div className="relative w-48 h-64 bg-zinc-900 rounded-r-lg shadow-2xl transition-transform group-hover:-rotate-6 group-hover:scale-105 duration-500 overflow-hidden border-y border-r border-white/20">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black p-6 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-8 h-1 bg-green-500" />
            <h4 className="text-white font-black text-xs uppercase tracking-tighter leading-none">
              Tenant <br /> Rights <br /> In Nigeria
            </h4>
          </div>
          <div className="text-[8px] text-zinc-500 font-bold uppercase italic">
            A Homebiro Legal Publication
          </div>
        </div>
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
      
      {/* Glow */}
      <div className="absolute -inset-4 bg-green-500/10 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default BookPreview;
