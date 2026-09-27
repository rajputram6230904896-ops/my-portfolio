import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Sparkles, CheckCircle, Layers, BarChart2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#111111] border border-[#FF2D2D]/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,45,45,0.35)] my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-3 rounded-full bg-[#0A0A0A]/80 border border-white/20 text-white hover:text-[#FF2D2D] hover:border-[#FF2D2D] transition-all shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Image Header */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="px-3.5 py-1.5 rounded-full bg-[#FF2D2D] text-white text-xs font-poppins font-bold uppercase tracking-wider shadow-md mb-2 inline-block">
                  {project.category}
                </span>
                <h2 className="font-poppins font-black text-2xl sm:text-4xl text-white text-glow-white">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-[#D1D1D1] font-medium">
                  {project.subtitle}
                </p>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#0A0A0A]/90 hover:bg-[#FF2D2D] text-white text-xs font-semibold border border-white/20 transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF2D2D] to-[#E50914] text-white text-xs font-bold shadow-[0_0_20px_rgba(255,45,45,0.6)] hover:scale-105 transition-transform flex items-center gap-2"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Modal Content Details */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Extended Overview */}
            <div>
              <h3 className="font-poppins font-bold text-lg text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#FF2D2D]" />
                Project Overview
              </h3>
              <p className="text-sm sm:text-base text-[#D1D1D1] leading-relaxed font-sans">
                {project.fullDetails}
              </p>
            </div>

            {/* Performance Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <h4 className="font-poppins font-bold text-sm text-[#FF2D2D] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <BarChart2 className="w-4 h-4" />
                  Key Impact Metrics
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#1A1A1A] border border-white/10 text-center">
                      <p className="font-poppins font-black text-2xl text-white text-glow-white">{metric.value}</p>
                      <p className="text-xs text-[#A0A0A0]">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div>
              <h4 className="font-poppins font-bold text-sm text-neutral-300 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#FF2D2D]" />
                Technologies & Tools Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-[#FF2D2D]/30 text-white text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-neutral-500">
                Designed & Engineered by Rajput Ram
              </span>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#1A1A1A] text-white text-xs font-bold hover:bg-[#FF2D2D] transition-colors"
              >
                Close Showcase
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
