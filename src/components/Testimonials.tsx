import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquareQuote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative bg-[#0A0A0A] overflow-hidden">
      
      {/* Background Red Neon Radial Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF2D2D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-3 shadow-[0_0_15px_rgba(255,45,45,0.3)]">
            <MessageSquareQuote className="w-4 h-4 text-[#FF2D2D]" />
            <span className="text-xs font-bold text-[#FF2D2D] uppercase tracking-wider">Client Endorsements</span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl text-white tracking-tight">
            What <span className="text-[#FF2D2D] text-glow-red">Clients & Leaders</span> Say
          </h2>
          <p className="mt-4 text-[#A0A0A0] text-base sm:text-lg max-w-2xl mx-auto font-sans">
            Feedback from design directors, product leads, and executive engineering heads.
          </p>
        </div>

        {/* Carousel Card Container */}
        <div className="relative glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
          
          <Quote className="absolute top-6 right-8 w-24 h-24 text-white/5 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center max-w-3xl mx-auto"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FF2D2D] text-[#FF2D2D] drop-shadow-[0_0_8px_rgba(255,45,45,0.8)]" />
                ))}
              </div>

              {/* Review Content Quote */}
              <p className="font-poppins font-medium text-lg sm:text-2xl text-white leading-relaxed mb-8 italic">
                "{current.content}"
              </p>

              {/* Client Avatar & Information */}
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#FF2D2D] shadow-[0_0_15px_rgba(255,45,45,0.6)]"
                />
                <div className="text-left">
                  <h3 className="font-poppins font-bold text-lg text-white">
                    {current.name}
                  </h3>
                  <p className="text-xs text-[#FF3B3B] font-semibold">
                    {current.role} • {current.company}
                  </p>
                  <p className="text-[11px] text-[#A0A0A0]">
                    Project: {current.projectRelation}
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Controls Arrow & Dots */}
          <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
            
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-[#1A1A1A] text-white hover:bg-[#FF2D2D] transition-colors border border-white/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-8 bg-[#FF2D2D] shadow-[0_0_10px_rgba(255,45,45,0.8)]'
                      : 'w-2.5 bg-neutral-600 hover:bg-neutral-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-[#1A1A1A] text-white hover:bg-[#FF2D2D] transition-colors border border-white/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
