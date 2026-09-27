import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Dribbble, Instagram, Heart } from 'lucide-react';
import { ProfileInfo } from '../types';

interface FooterProps {
  profile: ProfileInfo;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      
      {/* Background Red Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-24 bg-[#FF2D2D]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF2D2D] to-[#E50914] flex items-center justify-center font-poppins font-black text-lg text-white shadow-[0_0_15px_rgba(255,45,45,0.6)]">
                RR
              </div>
              <span className="font-poppins font-bold text-xl text-white tracking-wide">
                {profile.name}
              </span>
            </div>

            <p className="text-xs text-[#A0A0A0] leading-relaxed max-w-sm">
              {profile.tagline}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {profile.socialLinks.instagram && (
                <a
                  href={profile.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#111111] border border-white/10 text-neutral-400 hover:text-white hover:bg-[#FF2D2D] transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-[#FF2D2D]" />
                </a>
              )}
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#111111] border border-white/10 text-neutral-400 hover:text-white hover:bg-[#FF2D2D] transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#111111] border border-white/10 text-neutral-400 hover:text-white hover:bg-[#FF2D2D] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#111111] border border-white/10 text-neutral-400 hover:text-white hover:bg-[#FF2D2D] transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={profile.socialLinks.dribbble}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#111111] border border-white/10 text-neutral-400 hover:text-white hover:bg-[#FF2D2D] transition-all"
                aria-label="Dribbble"
              >
                <Dribbble className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-poppins font-bold text-xs uppercase text-white tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#A0A0A0]">
              <li><a href="#home" className="hover:text-[#FF2D2D] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#FF2D2D] transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-[#FF2D2D] transition-colors">Skills & Metrics</a></li>
              <li><a href="#projects" className="hover:text-[#FF2D2D] transition-colors">Project Showcase</a></li>
              <li><a href="#experience" className="hover:text-[#FF2D2D] transition-colors">Experience Timeline</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="font-poppins font-bold text-xs uppercase text-white tracking-wider">
              Availability
            </h4>
            <p className="text-xs text-[#A0A0A0] leading-relaxed">
              Open for full-time engineering roles, high-end design consultations, and select freelance project contracts.
            </p>
            <div className="p-3 rounded-xl bg-[#111111] border border-[#FF2D2D]/30 inline-flex items-center gap-2 text-xs text-[#FF3B3B] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#FF2D2D] animate-ping" />
              Available for Q3/Q4 2026
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A0A0A0]">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} {profile.name}. Engineered with <Heart className="w-3.5 h-3.5 text-[#FF2D2D] fill-current" /> & React.
          </p>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#111111] border border-white/10 text-white hover:bg-[#FF2D2D] hover:border-[#FF2D2D] transition-all shadow-md group flex items-center gap-2"
          >
            <span className="font-poppins font-semibold text-[11px]">Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
