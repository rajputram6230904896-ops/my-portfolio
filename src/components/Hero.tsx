import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Dribbble, Instagram, ArrowRight, Download, Sparkles, Terminal, Code2, Shield, Flame } from 'lucide-react';
import { ProfileInfo } from '../types';
import { ProficiencyBadge } from './ProficiencyBadge';

interface HeroProps {
  profile: ProfileInfo;
  onExploreProjects: () => void;
  onOpenContact: () => void;
  onSelectCategory?: (cat: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onExploreProjects,
  onOpenContact,
  onSelectCategory
}) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 lg:pt-36 pb-16 flex items-center justify-center overflow-hidden bg-radial-gradient">
      
      {/* Background Floating Glow Elements & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FF2D2D]/15 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#E50914]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill mb-6 shadow-[0_0_15px_rgba(255,45,45,0.25)]"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF2D2D] animate-ping" />
              <span className="text-xs sm:text-sm font-semibold text-[#FF3B3B] uppercase tracking-wider">
                Available for New Projects & Roles
              </span>
            </motion.div>

            {/* Name / Title */}
            <h1 className="font-poppins font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white leading-[1.08] mb-4">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-white via-white to-[#FF2D2D] bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(255,45,45,0.3)]">
                {profile.name}
              </span>
            </h1>

            {/* Tagline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-semibold text-[#FF2D2D] text-glow-red mb-6 max-w-2xl leading-snug">
              {profile.title}
            </h2>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-[#D1D1D1] font-sans font-normal mb-8 max-w-xl leading-relaxed">
              {profile.shortBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onExploreProjects}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#FF2D2D] via-[#E50914] to-[#FF3B3B] text-white font-poppins font-bold text-base shadow-[0_0_25px_rgba(255,45,45,0.6)] hover:shadow-[0_0_40px_rgba(255,45,45,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#111111] hover:bg-[#1A1A1A] text-white font-poppins font-semibold text-base border border-white/15 hover:border-[#FF2D2D]/60 shadow-lg hover:shadow-[0_0_20px_rgba(255,45,45,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#FF2D2D]" />
                <span>Contact Me</span>
              </button>

              <a
                href="#about"
                className="px-5 py-4 text-xs sm:text-sm font-semibold text-[#A0A0A0] hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-4 h-4 text-[#FF2D2D]" />
                <span>View CV</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-full">
              <span className="text-xs font-semibold text-[#A0A0A0] uppercase tracking-wider">
                Connect
              </span>
              <div className="h-4 w-[1px] bg-white/20" />
              <div className="flex items-center gap-3">
                {profile.socialLinks.instagram && (
                  <a
                    href={profile.socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#111111] border border-white/10 text-neutral-300 hover:text-white hover:bg-[#FF2D2D]/20 hover:border-[#FF2D2D]/60 hover:scale-110 transition-all duration-200"
                    aria-label="Instagram Profile"
                  >
                    <Instagram className="w-5 h-5 text-[#FF2D2D]" />
                  </a>
                )}
                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#111111] border border-white/10 text-neutral-300 hover:text-white hover:bg-[#FF2D2D]/20 hover:border-[#FF2D2D]/60 hover:scale-110 transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#111111] border border-white/10 text-neutral-300 hover:text-white hover:bg-[#FF2D2D]/20 hover:border-[#FF2D2D]/60 hover:scale-110 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={profile.socialLinks.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#111111] border border-white/10 text-neutral-300 hover:text-white hover:bg-[#FF2D2D]/20 hover:border-[#FF2D2D]/60 hover:scale-110 transition-all duration-200"
                  aria-label="Twitter / X Profile"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={profile.socialLinks.dribbble}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#111111] border border-white/10 text-neutral-300 hover:text-white hover:bg-[#FF2D2D]/20 hover:border-[#FF2D2D]/60 hover:scale-110 transition-all duration-200"
                  aria-label="Dribbble Portfolio"
                >
                  <Dribbble className="w-5 h-5" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* RIGHT SIDE VISUAL & PROFICIENCY BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Animated Proficiency Indicator Pill (Prompt Reference Style) */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full flex justify-center mb-6"
            >
              <ProficiencyBadge onSelectCategory={onSelectCategory} />
            </motion.div>

            {/* Glowing Avatar Frame */}
            <div className="relative group w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              
              {/* Spinning Red Glow Aura */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#FF2D2D] via-[#E50914] to-[#FF3B3B] rounded-3xl blur-2xl opacity-65 group-hover:opacity-90 animate-pulse-glow transition-all duration-500" />
              
              {/* Glass Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-[#FF2D2D]/40 bg-[#111111] p-2 shadow-[0_0_50px_rgba(255,45,45,0.3)]">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />

                {/* Cyber Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                
                {/* Overlay Text Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0A0A0A]/80 backdrop-blur-md border border-[#FF2D2D]/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-[#FF2D2D] animate-pulse" />
                    <div>
                      <p className="text-xs font-bold text-white font-poppins">5+ Years Exp</p>
                      <p className="text-[10px] text-neutral-400">Full-Stack & UI/UX</p>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#FF2D2D] text-white font-bold">
                    95% Code
                  </span>
                </div>
              </div>

              {/* Floating Feature Badges around avatar */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 p-3 rounded-2xl glass-panel border border-[#FF2D2D]/40 shadow-[0_0_20px_rgba(255,45,45,0.3)] flex items-center gap-2.5 z-20"
              >
                <div className="p-2 rounded-xl bg-[#FF2D2D]/20 text-[#FF2D2D]">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white font-poppins">React 19 & Node</p>
                  <p className="text-[10px] text-neutral-400">Modern Architecture</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 p-3 rounded-2xl glass-panel border border-[#FF2D2D]/40 shadow-[0_0_20px_rgba(255,45,45,0.3)] flex items-center gap-2.5 z-20"
              >
                <div className="p-2 rounded-xl bg-[#E50914]/20 text-[#FF3B3B]">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white font-poppins">Cyber Security</p>
                  <p className="text-[10px] text-neutral-400">OWASP Audited</p>
                </div>
              </motion.div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
