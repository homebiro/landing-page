import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Metric {
  label: string;
  value: string;
  description: string;
  trend: string;
  positive: boolean;
  progress: number;
}

const SuccessMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPerformanceData = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500)); 
        
        const mockData: Metric[] = [
          {
            label: "Conversion Rate",
            value: "14.2%",
            description: "Visitors becoming active users",
            trend: "+3.1%",
            positive: true,
            progress: 85
          },
          {
            label: "Bounce Rate",
            value: "28.5%",
            description: "Lower than sector avg (42%)",
            trend: "-4.2%",
            positive: true,
            progress: 72
          },
          {
            label: "7-Day Refund",
            value: "0.4%",
            description: "Instant trust verification",
            trend: "Stable",
            positive: true,
            progress: 96
          },
          {
            label: "30-Day Refund",
            value: "1.1%",
            description: "Subscriber retention rate",
            trend: "-0.1%",
            positive: true,
            progress: 89
          }
        ];

        setMetrics(mockData);
        setIsLoading(false);
      } catch (err) {
        console.error("Metric Fetch Error:", err);
        setError(true);
        setIsLoading(false);
      }
    };

    fetchPerformanceData();
  }, []);

  return (
    /* ADJUSTMENT: Removed pt-4 and added -mt-10 to pull it up */
    <section className="pb-24 bg-white font-sans min-h-[500px] -mt-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER: Reduced mb-10 to mb-8 to keep it tight */}
        <div className="mb-8 text-center flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-[#0A0D14] mb-4 tracking-tight"
          >
            Performance <span className="text-[#1D4ED8]">Benchmarks</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 max-w-2xl text-lg md:text-xl leading-relaxed"
          >
            Real-time transparency powered by our ecosystem data. 
            We track these KPIs to ensure Homebiro remains Nigeria's most trusted platform.
          </motion.p>
        </div>

        {/* LOADING & ERROR STATES */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-64 bg-zinc-100 animate-pulse rounded-[2.5rem]" />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-20 text-rose-500 font-bold">
            Failed to load live performance data. Please refresh.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {metrics.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-[2.5rem] bg-[#0A0D14] border border-zinc-800 relative overflow-hidden group hover:border-[#1D4ED8] transition-all duration-500 shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1D4ED8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.2em] mb-4 relative z-10">
                    {stat.label}
                  </p>
                  
                  <div className="flex items-baseline gap-3 mb-2 relative z-10">
                    <h3 className="text-4xl font-bold text-white tracking-tight">
                      {stat.value}
                    </h3>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                      stat.positive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                    }`}>
                      {stat.trend}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed relative z-10 mb-6">
                    {stat.description}
                  </p>

                  <div className="relative w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.progress}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="absolute top-0 left-0 h-full bg-[#1D4ED8] shadow-[0_0_10px_#1D4ED8]"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center mt-12"
        >
          <div className="h-px w-12 bg-zinc-200 mb-6" />
          <p className="text-zinc-400 text-[10px] uppercase tracking-[0.3em] font-medium">
          
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default SuccessMetrics;