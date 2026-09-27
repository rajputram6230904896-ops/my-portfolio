import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ExternalLink, Award, Calendar, CheckCircle } from 'lucide-react';
import { Certification } from '../types';

interface CertificationsProps {
  certifications: Certification[];
}

export const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section id="certifications" className="py-24 relative bg-[#0A0A0A] overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-[#FF2D2D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-3 shadow-[0_0_15px_rgba(255,45,45,0.3)]">
            <Award className="w-4 h-4 text-[#FF2D2D]" />
            <span className="text-xs font-bold text-[#FF2D2D] uppercase tracking-wider">Verified Credentials</span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl text-white tracking-tight">
            Industry <span className="text-[#FF2D2D] text-glow-red">Certifications</span>
          </h2>
          <p className="mt-4 text-[#A0A0A0] text-base sm:text-lg max-w-2xl mx-auto font-sans">
            Formal engineering accreditations and security certifications validated by global tech institutions.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-[#FF2D2D] shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_35px_rgba(255,45,45,0.35)] transition-all duration-300 relative group flex flex-col sm:flex-row items-center gap-6"
            >
              {/* Image / Badge Container */}
              <div className="relative w-full sm:w-40 h-40 shrink-0 rounded-2xl overflow-hidden bg-[#111111] border border-white/10 group-hover:border-[#FF2D2D]/60 transition-colors">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-70" />
                <div className="absolute top-2 right-2 p-1.5 rounded-full bg-[#FF2D2D] text-white shadow-md">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              {/* Certification Information */}
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold text-[#FF2D2D] uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <span className="text-neutral-500">•</span>
                  <span className="text-xs text-neutral-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </span>
                </div>

                <h3 className="font-poppins font-bold text-lg sm:text-xl text-white group-hover:text-[#FF2D2D] transition-colors mb-2">
                  {cert.title}
                </h3>

                <p className="text-xs text-[#A0A0A0] font-mono mb-4">
                  Credential ID: {cert.credentialId}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-[#1A1A1A] border border-white/10 text-[11px] text-[#D1D1D1] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* External Verification Link */}
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF2D2D] hover:text-white transition-colors"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
