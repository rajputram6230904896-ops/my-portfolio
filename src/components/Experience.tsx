import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceProps {
  experiences: Experience[];
}

export const ExperienceSection: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-24 relative bg-[#0D0D0D] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2D2D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-3 shadow-[0_0_15px_rgba(255,45,45,0.3)]">
            <Briefcase className="w-4 h-4 text-[#FF2D2D]" />
            <span className="text-xs font-bold text-[#FF2D2D] uppercase tracking-wider">Career Journey</span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl text-white tracking-tight">
            Professional <span className="text-[#FF2D2D] text-glow-red">Work Experience</span>
          </h2>
          <p className="mt-4 text-[#A0A0A0] text-base sm:text-lg max-w-2xl mx-auto font-sans">
            A track record of engineering leadership, scalable product deployments, and high-impact software solutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#FF2D2D]/40 ml-4 sm:ml-8 lg:ml-32 space-y-12">
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-6 sm:pl-10"
            >
              {/* Glowing Red Timeline Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#111111] border-2 border-[#FF2D2D] shadow-[0_0_15px_rgba(255,45,45,0.8)] flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF2D2D] animate-ping" />
              </div>

              {/* Timeframe Label for desktop */}
              <div className="hidden lg:block absolute -left-36 top-2 text-right w-28">
                <span className="font-poppins font-bold text-xs text-[#FF2D2D] uppercase tracking-wider">
                  {exp.period}
                </span>
              </div>

              {/* Glassmorphism Card */}
              <div className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-white/10 relative">
                
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="lg:hidden text-xs font-bold text-[#FF2D2D] bg-[#FF2D2D]/10 px-2.5 py-0.5 rounded-md border border-[#FF2D2D]/30">
                        {exp.period}
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-md bg-[#1A1A1A] text-neutral-300 font-semibold border border-white/10">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="font-poppins font-bold text-xl sm:text-2xl text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-[#FF3B3B] font-semibold mt-0.5">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-neutral-400 font-normal text-xs">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-[#D1D1D1] mb-6 leading-relaxed font-sans">
                  {exp.description}
                </p>

                {/* Responsibilities List */}
                <div className="mb-6">
                  <h4 className="font-poppins font-bold text-xs uppercase text-neutral-400 tracking-wider mb-3">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D1D1D1]">
                        <ChevronRight className="w-4 h-4 text-[#FF2D2D] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements List */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="mb-6 p-4 rounded-2xl bg-[#1A1A1A]/80 border border-[#FF2D2D]/20">
                    <h4 className="font-poppins font-bold text-xs uppercase text-[#FF2D2D] tracking-wider mb-2 flex items-center gap-1.5">
                      <Award className="w-4 h-4" />
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-white">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF2D2D] shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {exp.skillsUsed.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-[#111111] border border-white/10 text-[11px] text-[#A0A0A0] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
