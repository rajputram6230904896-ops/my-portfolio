import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, Download, Code2, SlidersHorizontal, Moon, Sun, Volume2, VolumeX } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onOpenCustomizer?: () => void;
  audioEnabled?: boolean;
  onToggleAudio?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onOpenCustomizer,
  audioEnabled = false,
  onToggleAudio
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF2D2D] to-[#E50914] flex items-center justify-center font-poppins font-black text-xl text-white shadow-[0_0_15px_rgba(255,45,45,0.6)] group-hover:scale-105 transition-transform">
            RR
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF3B3B] rounded-full animate-ping opacity-75" />
          </div>
          <div className="flex flex-col">
            <span className="font-poppins font-bold text-lg text-white tracking-wide group-hover:text-[#FF2D2D] transition-colors">
              Rajput Ram
            </span>
            <span className="text-[10px] text-[#A0A0A0] uppercase tracking-wider font-semibold">
              Software Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#111111]/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-[#D1D1D1] hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-[#FF2D2D]/20 border border-[#FF2D2D]/60 rounded-full shadow-[0_0_12px_rgba(255,45,45,0.4)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Header Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {onToggleAudio && (
            <button
              onClick={onToggleAudio}
              title={audioEnabled ? 'Mute Ambient Audio' : 'Enable Ambient Sound'}
              className="p-2.5 rounded-full bg-[#111111] border border-white/10 text-neutral-400 hover:text-[#FF2D2D] hover:border-[#FF2D2D]/50 transition-colors"
            >
              {audioEnabled ? <Volume2 className="w-4 h-4 text-[#FF2D2D]" /> : <VolumeX className="w-4 h-4" />}
            </button>
          )}

          {onOpenCustomizer && (
            <button
              onClick={onOpenCustomizer}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-[#111111] border border-white/10 text-neutral-300 hover:text-white hover:border-[#FF2D2D]/40 transition-all"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#FF2D2D]" />
              <span>Customize</span>
            </button>
          )}

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF2D2D] to-[#E50914] text-white font-poppins font-semibold text-sm shadow-[0_0_20px_rgba(255,45,45,0.4)] hover:shadow-[0_0_30px_rgba(255,45,45,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          {onOpenCustomizer && (
            <button
              onClick={onOpenCustomizer}
              className="p-2 rounded-lg bg-[#111111] border border-white/10 text-neutral-300"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#FF2D2D]" />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#111111] border border-white/10 text-white hover:text-[#FF2D2D] hover:border-[#FF2D2D]/50 transition-all focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? 'bg-[#FF2D2D]/20 text-[#FF2D2D] border border-[#FF2D2D]/40'
                        : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-neutral-500">&rarr;</span>
                  </a>
                );
              })}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF2D2D] to-[#E50914] text-center text-white font-poppins font-bold shadow-[0_0_20px_rgba(255,45,45,0.5)]"
                >
                  Let's Work Together
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
