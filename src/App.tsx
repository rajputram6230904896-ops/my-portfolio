import React, { useState, useEffect } from 'react';
import { initialProfile, skillsData, projectsData, experiencesData, certificationsData, statisticsData, testimonialsData } from './data/portfolioData';
import { ProfileInfo } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ExperienceSection } from './components/Experience';
import { Certifications } from './components/Certifications';
import { StatisticsSection } from './components/Statistics';
import { TestimonialsSection } from './components/Testimonials';
import { ContactSection } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { PortfolioCustomizerModal } from './components/PortfolioCustomizerModal';

export default function App() {
  const [profile, setProfile] = useState<ProfileInfo>(initialProfile);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [customizerOpen, setCustomizerOpen] = useState<boolean>(false);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>('All');

  // Ambient synth sound generator using Web Audio API
  useEffect(() => {
    if (!audioEnabled) return;
    let audioCtx: AudioContext | null = null;
    let osc: OscillatorNode | null = null;
    let gain: GainNode | null = null;

    try {
      audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      osc = audioCtx.createOscillator();
      gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(110, audioCtx.currentTime); // Low warm pad frequency
      gain.gain.setValueAtTime(0.015, audioCtx.currentTime); // Soft volume

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
    } catch {
      // Browser audio policy fallback
    }

    return () => {
      if (osc) osc.stop();
      if (audioCtx) audioCtx.close();
    };
  }, [audioEnabled]);

  // Scroll Spy for active nav highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectSkillCategoryFromBadge = (category: string) => {
    setSelectedSkillCategory(category);
    const el = document.getElementById('skills');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative selection:bg-[#FF2D2D] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Custom Red Glowing Cursor */}
      <CustomCursor />

      {/* Sticky Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onOpenCustomizer={() => setCustomizerOpen(true)}
        audioEnabled={audioEnabled}
        onToggleAudio={() => setAudioEnabled(!audioEnabled)}
      />

      {/* Hero Section */}
      <Hero
        profile={profile}
        onExploreProjects={handleExploreProjects}
        onOpenContact={handleOpenContact}
        onSelectCategory={handleSelectSkillCategoryFromBadge}
      />

      {/* About Section */}
      <About profile={profile} />

      {/* Statistics Counter Section */}
      <StatisticsSection statistics={statisticsData} />

      {/* Skills Section with animated red glowing bars */}
      <Skills
        skills={skillsData}
        selectedCategory={selectedSkillCategory}
        onSelectCategory={setSelectedSkillCategory}
      />

      {/* Projects Showcase Section */}
      <Projects projects={projectsData} />

      {/* Experience Timeline Section */}
      <ExperienceSection experiences={experiencesData} />

      {/* Certifications Section */}
      <Certifications certifications={certificationsData} />

      {/* Testimonials Slider Section */}
      <TestimonialsSection testimonials={testimonialsData} />

      {/* Contact Section */}
      <ContactSection profile={profile} />

      {/* Footer */}
      <Footer profile={profile} />

      {/* Portfolio Persona Customizer Modal */}
      <PortfolioCustomizerModal
        isOpen={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        profile={profile}
        onUpdateProfile={setProfile}
      />

    </div>
  );
}
