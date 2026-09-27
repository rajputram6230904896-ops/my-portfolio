import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Pointer, Check } from 'lucide-react';

interface ProficiencyBadgeProps {
  onSelectCategory?: (category: string) => void;
  activeCategory?: string;
}

export const ProficiencyBadge: React.FC<ProficiencyBadgeProps> = ({
  onSelectCategory,
  activeCategory = 'Creative'
}) => {
  const [selectedWord, setSelectedWord] = useState<string>('Creative');
  const words = ['Creative', 'Engineering', 'Full-Stack', 'UI/UX', 'Security'];

  const handleWordClick = (word: string) => {
    setSelectedWord(word);
    if (onSelectCategory) {
      if (word === 'Creative' || word === 'UI/UX') onSelectCategory('UI/UX');
      else if (word === 'Engineering' || word === 'Full-Stack') onSelectCategory('Frontend');
      else if (word === 'Security') onSelectCategory('Cyber Security');
    }
  };

  return (
    <div className="relative inline-block my-4 select-none">
      {/* Outer ambient glow overlay */}
      <div className="absolute -inset-4 bg-[#FF2D2D]/20 blur-xl rounded-full animate-pulse-glow pointer-events-none" />

      <div className="relative flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-6 py-4 bg-[#111111]/80 backdrop-blur-md rounded-2xl border border-[#FF2D2D]/30 shadow-[0_0_25px_rgba(255,45,45,0.25)]">
        
        {/* Animated Badge Header */}
        <div className="flex items-center gap-2 text-white font-extrabold text-xl sm:text-2xl tracking-tight font-poppins">
          <span className="text-white text-glow-white">Proficiency In</span>
          
          {/* Interactive Pill Button inspired by reference screenshot */}
          <div className="relative inline-flex items-center">
            <motion.div
              layoutId="glowing-pill"
              className="relative flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-[#FF2D2D] to-[#E50914] text-white rounded-full shadow-[0_0_20px_rgba(255,45,45,0.8)] border border-white/30 cursor-pointer group hover:scale-105 transition-transform"
            >
              <Sparkles className="w-4 h-4 text-white animate-spin" style={{ animationDuration: '6s' }} />
              <span className="font-black text-lg sm:text-xl tracking-wide uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {selectedWord}
              </span>
              
              {/* Reference style pointer hand icon */}
              <motion.div
                animate={{ y: [0, -3, 0], x: [0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="absolute -bottom-3 -right-2 text-white drop-shadow-[0_0_8px_rgba(255,45,45,1)]"
              >
                <Pointer className="w-5 h-5 fill-current text-[#FF2D2D] stroke-white stroke-[2]" />
              </motion.div>
            </motion.div>
          </div>

          <span className="text-[#FF2D2D] text-glow-red font-black">Tools</span>
        </div>

        {/* Word Switcher Tabs below or alongside */}
        <div className="w-full flex items-center justify-center gap-1.5 mt-2 pt-2 border-t border-white/10">
          {words.map((word) => {
            const isSelected = selectedWord === word;
            return (
              <button
                key={word}
                onClick={() => handleWordClick(word)}
                className={`text-xs px-2.5 py-1 rounded-full transition-all duration-300 flex items-center gap-1 font-medium ${
                  isSelected
                    ? 'bg-[#FF2D2D] text-white font-bold shadow-[0_0_10px_rgba(255,45,45,0.6)]'
                    : 'text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {isSelected && <Check className="w-3 h-3" />}
                {word}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
