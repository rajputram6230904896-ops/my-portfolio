import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Award, CheckCircle2, FileText, Sparkles, MapPin, Mail, Phone, Calendar, ArrowUpRight, X } from 'lucide-react';
import { ProfileInfo } from '../types';

interface AboutProps {
  profile: ProfileInfo;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const [showCvModal, setShowCvModal] = useState(false);

  const careerHighlights = [
    { label: '5+ Years Engineering', desc: 'Building enterprise React, Node & Cloud platforms.' },
    { label: 'UI/UX Craftsmanship', desc: 'Expert in design systems, micro-interactions, and accessibility.' },
    { label: 'Security & Optimization', desc: 'Sub-100ms load times and OWASP security compliance.' },
    { label: 'Global Client Success', desc: 'Shipped 50+ applications with 99.9% uptime and zero critical bugs.' }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#0A0A0A] overflow-hidden">
      
      {/* Background glow circle */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#FF2D2D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-3">
            <User className="w-4 h-4 text-[#FF2D2D]" />
            <span className="text-xs font-bold text-[#FF2D2D] uppercase tracking-wider">About Me</span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl text-white tracking-tight">
            Designing the Future of <span className="text-[#FF2D2D] text-glow-red">Web Engineering</span>
          </h2>
          <p className="mt-4 text-[#A0A0A0] text-base sm:text-lg max-w-2xl mx-auto font-sans">
            A deep dive into my background, engineering philosophy, and passion for pixel-perfect digital experiences.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Glassmorphism Card Profile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-8 relative border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
              
              {/* Corner Ambient Glow */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#FF2D2D]/20 rounded-full blur-2xl pointer-events-none" />

              {/* Profile Image */}
              <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6 border border-[#FF2D2D]/30 shadow-lg">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#FF2D2D] text-white text-xs font-bold font-poppins shadow-md">
                    {profile.title}
                  </span>
                  <span className="text-xs text-neutral-300 bg-[#0A0A0A]/80 px-2.5 py-1 rounded-md border border-white/10">
                    {profile.location}
                  </span>
                </div>
              </div>

              {/* Personal Quick Details */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-[#D1D1D1]">
                  <MapPin className="w-4 h-4 text-[#FF2D2D]" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#D1D1D1]">
                  <Mail className="w-4 h-4 text-[#FF2D2D]" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#D1D1D1]">
                  <Phone className="w-4 h-4 text-[#FF2D2D]" />
                  <span>{profile.phone}</span>
                </div>
              </div>

              {/* Download CV Trigger */}
              <button
                onClick={() => setShowCvModal(true)}
                className="mt-6 w-full py-3.5 rounded-xl bg-[#1A1A1A] hover:bg-[#FF2D2D] text-white font-poppins font-bold text-sm border border-white/10 hover:border-[#FF2D2D] shadow-md hover:shadow-[0_0_20px_rgba(255,45,45,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <FileText className="w-4 h-4 text-[#FF2D2D] group-hover:text-white transition-colors" />
                <span>View Full Resume / CV</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

            </div>
          </motion.div>

          {/* Right Column: Bio, Philosophy & Experience Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-white mb-4">
              Passionate About Building <span className="text-[#FF2D2D]">High-Impact</span> Web Solutions
            </h3>

            <p className="text-[#D1D1D1] text-base sm:text-lg leading-relaxed mb-6 font-sans">
              {profile.fullBio}
            </p>

            {/* Core Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {careerHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl glass-panel border border-white/10 hover:border-[#FF2D2D]/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <CheckCircle2 className="w-5 h-5 text-[#FF2D2D]" />
                    <h4 className="font-poppins font-bold text-sm text-white">{item.label}</h4>
                  </div>
                  <p className="text-xs text-[#A0A0A0] leading-relaxed pl-7">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Achievements Counter Ribbon */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#111111] via-[#1A1A1A] to-[#111111] border border-[#FF2D2D]/30 flex flex-wrap items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#FF2D2D]/20 text-[#FF2D2D]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-white text-base">Top Rated Developer</h4>
                  <p className="text-xs text-[#A0A0A0]">Recognized by Meta & Google Cloud</p>
                </div>
              </div>

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full bg-[#FF2D2D] text-white font-poppins font-bold text-xs hover:bg-[#E50914] transition-colors shadow-[0_0_15px_rgba(255,45,45,0.5)]"
              >
                Let's Connect
              </a>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {showCvModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl bg-[#111111] border border-[#FF2D2D]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(255,45,45,0.4)] max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowCvModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#1A1A1A] text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-7 h-7 text-[#FF2D2D]" />
                <div>
                  <h3 className="font-poppins font-bold text-xl text-white">{profile.name} — Curriculum Vitae</h3>
                  <p className="text-xs text-[#A0A0A0]">{profile.title}</p>
                </div>
              </div>

              <div className="space-y-6 text-sm text-[#D1D1D1]">
                <div>
                  <h4 className="font-poppins font-bold text-[#FF2D2D] mb-1">Executive Summary</h4>
                  <p>{profile.fullBio}</p>
                </div>

                <div>
                  <h4 className="font-poppins font-bold text-[#FF2D2D] mb-1">Core Competencies</h4>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>Frontend: React 19, TypeScript, Next.js, Vite, Tailwind CSS, Framer Motion</li>
                    <li>Backend: Node.js, Express, REST APIs, WebSockets, Python, PostgreSQL, Firestore</li>
                    <li>Security: OWASP Top 10 Security Auditing, JWT/OAuth2, Payload Validation</li>
                    <li>AI & Cloud: Gemini API, Docker, Google Cloud Run, GitHub Actions CI/CD</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-poppins font-bold text-[#FF2D2D] mb-1">Education & Certifications</h4>
                  <p className="text-xs">B.S. in Computer Science — Stanford University (2019)</p>
                  <p className="text-xs">Meta Certified Full-Stack Software Engineer & AWS Solutions Architect</p>
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-3">
                <button
                  onClick={() => setShowCvModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-[#1A1A1A] text-neutral-300 text-xs font-semibold"
                >
                  Close
                </button>
                <a
                  href={`data:text/plain;charset=utf-8,${encodeURIComponent(
                    `${profile.name} - Resume\n\nTitle: ${profile.title}\nEmail: ${profile.email}\nPhone: ${profile.phone}\nLocation: ${profile.location}\n\nSummary:\n${profile.fullBio}`
                  )}`}
                  download={`${profile.name.replace(/\s+/g, '_')}_CV.txt`}
                  className="px-5 py-2.5 rounded-xl bg-[#FF2D2D] text-white text-xs font-bold hover:bg-[#E50914] shadow-[0_0_15px_rgba(255,45,45,0.4)] flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Text CV</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
