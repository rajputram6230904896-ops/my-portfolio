import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Briefcase, Users, Award, Layers } from 'lucide-react';
import { Statistic } from '../types';

interface StatisticsProps {
  statistics: Statistic[];
}

const CounterItem: React.FC<{ stat: Statistic; index: number }> = ({ stat, index }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = 2000; // 2 seconds
      const incrementTime = Math.max(Math.floor(duration / end), 20);

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#FF2D2D]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#FF2D2D]" />;
      case 'Award': return <Award className="w-6 h-6 text-[#FF2D2D]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#FF2D2D]" />;
      default: return <Briefcase className="w-6 h-6 text-[#FF2D2D]" />;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-[#FF2D2D]/60 text-center relative group shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
    >
      <div className="mx-auto w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-[#FF2D2D]/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#FF2D2D] transition-all duration-300 shadow-[0_0_15px_rgba(255,45,45,0.3)]">
        <div className="group-hover:text-white transition-colors">
          {getIcon(stat.icon)}
        </div>
      </div>

      <div className="font-poppins font-black text-4xl sm:text-6xl text-white text-glow-red mb-2">
        {count}{stat.suffix}
      </div>

      <h3 className="font-poppins font-bold text-lg text-white mb-1">
        {stat.label}
      </h3>

      <p className="text-xs text-[#A0A0A0] font-sans">
        {stat.description}
      </p>
    </motion.div>
  );
};

export const StatisticsSection: React.FC<StatisticsProps> = ({ statistics }) => {
  return (
    <section className="py-20 relative bg-[#0D0D0D] overflow-hidden">
      
      {/* Background Red Glow Strip */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-32 bg-[#FF2D2D]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <CounterItem key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
