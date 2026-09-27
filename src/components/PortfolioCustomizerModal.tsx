import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, SlidersHorizontal, Sparkles, User, RefreshCw, Check } from 'lucide-react';
import { ProfileInfo } from '../types';

interface PortfolioCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileInfo;
  onUpdateProfile: (updated: ProfileInfo) => void;
}

const presets: { name: string; title: string; bio: string; avatar: string }[] = [
  {
    name: "Rajput Ram",
    title: "Software Developer",
    bio: "I design and build cutting-edge web applications, interactive interfaces, and secure full-stack platforms with meticulous craftsmanship and modern visual art direction.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Ayush Chandail",
    title: "Senior AI Systems & Frontend Lead",
    bio: "Specializing in multi-modal generative AI user experiences, WebGL canvas tools, and high-performance React architectures.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Software Systems Team",
    title: "Cyber Security & Full-Stack Systems Engineering",
    bio: "Building zero-trust enterprise dashboards, automated incident triage platforms, and OWASP-compliant full-stack Node.js engines.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
  }
];

export const PortfolioCustomizerModal: React.FC<PortfolioCustomizerModalProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
}) => {
  const [formData, setFormData] = useState<ProfileInfo>({ ...profile });

  if (!isOpen) return null;

  const handleApplyPreset = (preset: typeof presets[0]) => {
    const updated = {
      ...formData,
      name: preset.name,
      title: preset.title,
      shortBio: preset.bio,
      avatarUrl: preset.avatar
    };
    setFormData(updated);
    onUpdateProfile(updated);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(formData);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-xl bg-[#111111] border border-[#FF2D2D]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(255,45,45,0.4)] my-8"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#1A1A1A] text-neutral-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-[#FF2D2D]/20 text-[#FF2D2D]">
              <SlidersHorizontal className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-poppins font-bold text-2xl text-white">
                Customize Portfolio Persona
              </h3>
              <p className="text-xs text-[#A0A0A0]">
                Live-edit profile credentials or select a developer persona preset.
              </p>
            </div>
          </div>

          {/* Persona Presets */}
          <div className="mb-6">
            <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
              Select Preset Persona
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {presets.map((preset) => {
                const isActive = formData.name === preset.name;
                return (
                  <button
                    key={preset.name}
                    type="button"
                    onClick={() => handleApplyPreset(preset)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      isActive
                        ? 'bg-[#FF2D2D]/20 border-[#FF2D2D] text-white shadow-[0_0_12px_rgba(255,45,45,0.3)]'
                        : 'bg-[#1A1A1A] border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <p className="font-poppins font-bold text-xs">{preset.name}</p>
                    <p className="text-[10px] truncate opacity-75">{preset.title}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Custom Form */}
          <form onSubmit={handleSave} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-neutral-300 uppercase mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-white focus:border-[#FF2D2D] outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-neutral-300 uppercase mb-1">
                Professional Title & Role
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-white focus:border-[#FF2D2D] outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-neutral-300 uppercase mb-1">
                Short Introduction Tagline
              </label>
              <textarea
                rows={3}
                value={formData.shortBio}
                onChange={(e) => setFormData({ ...formData, shortBio: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-white focus:border-[#FF2D2D] outline-none resize-none"
              />
            </div>

            <div>
              <label className="block font-bold text-neutral-300 uppercase mb-1">
                Avatar Image URL
              </label>
              <input
                type="text"
                value={formData.avatarUrl}
                onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-white focus:border-[#FF2D2D] outline-none"
              />
            </div>

            <div className="pt-4 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-[#1A1A1A] text-neutral-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-[#FF2D2D] text-white text-xs font-bold hover:bg-[#E50914] shadow-[0_0_15px_rgba(255,45,45,0.5)] flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
            </div>

          </form>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
