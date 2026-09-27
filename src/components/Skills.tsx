import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Layout, Server, ShieldCheck, Terminal, Palette, Database, Cpu, Atom, FileCode2, Sparkles, Search, Check } from 'lucide-react';
import { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
  selectedCategory?: string;
  onSelectCategory?: (cat: string) => void;
}

export const Skills: React.FC<SkillsProps> = ({
  skills,
  selectedCategory = 'All',
  onSelectCategory
}) => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Frontend', 'UI/UX', 'Backend', 'Cyber Security', 'AI & DevOps'];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5" />;
      case 'FileCode2': return <FileCode2 className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Atom': return <Atom className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  const handleTabChange = (cat: string) => {
    setActiveTab(cat);
    if (onSelectCategory) onSelectCategory(cat);
  };

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory = activeTab === 'All' || skill.category === activeTab;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative bg-[#0D0D0D] overflow-hidden">
      
      {/* Background Red Neon Radial Overlay */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#FF2D2D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-3 shadow-[0_0_15px_rgba(255,45,45,0.3)]">
            <Sparkles className="w-4 h-4 text-[#FF2D2D]" />
            <span className="text-xs font-bold text-[#FF2D2D] uppercase tracking-wider">Technical Mastery</span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl text-white tracking-tight">
            Skills & <span className="text-[#FF2D2D] text-glow-red">Proficiency Metrics</span>
          </h2>
          <p className="mt-4 text-[#A0A0A0] text-base sm:text-lg max-w-2xl mx-auto font-sans">
            Quantified technical expertise across modern full-stack web stacks, UI architecture, and security auditing.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-[#111111]/80 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-inner w-full md:w-auto">
            {categories.map((cat) => {
              const isSelected = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleTabChange(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-poppins font-semibold transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#FF2D2D] to-[#E50914] text-white shadow-[0_0_15px_rgba(255,45,45,0.6)] font-bold'
                      : 'text-[#A0A0A0] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#111111] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF2D2D] focus:ring-1 focus:ring-[#FF2D2D] transition-all placeholder:text-neutral-500"
            />
          </div>

        </div>

        {/* Skills Proficiency Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 relative group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#1A1A1A] border border-[#FF2D2D]/30 text-[#FF2D2D] group-hover:bg-[#FF2D2D] group-hover:text-white transition-all duration-300 shadow-[0_0_12px_rgba(255,45,45,0.2)]">
                    {getIcon(skill.iconName)}
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-lg text-white group-hover:text-[#FF2D2D] transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] text-[#A0A0A0] font-semibold uppercase tracking-wider">
                      {skill.category}
                    </span>
                  </div>
                </div>

                {/* Animated Glowing Percentage Badge */}
                <div className="px-3.5 py-1.5 rounded-full bg-[#FF2D2D]/15 border border-[#FF2D2D]/50 shadow-[0_0_12px_rgba(255,45,45,0.4)]">
                  <span className="font-poppins font-black text-sm text-[#FF3B3B] text-glow-red">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-[#D1D1D1] mb-4 leading-relaxed font-sans">
                {skill.description}
              </p>

              {/* Red Glowing Animated Fill Bar */}
              <div className="w-full h-3 bg-[#1A1A1A] rounded-full overflow-hidden p-0.5 border border-white/5 relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                  className="h-full bg-gradient-to-r from-[#FF2D2D] via-[#E50914] to-[#FF3B3B] rounded-full relative shadow-[0_0_15px_rgba(255,45,45,0.8)]"
                >
                  {/* Subtle shimmer sheen */}
                  <div className="absolute inset-0 shimmer-bg rounded-full opacity-60" />
                </motion.div>
              </div>

            </motion.div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-neutral-400">
            <p>No skills found matching "{searchQuery}".</p>
          </div>
        )}

      </div>
    </section>
  );
};
