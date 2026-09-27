import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FolderGit2, ExternalLink, Github, Sparkles, Eye, Filter } from 'lucide-react';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'AI & ML', 'UI/UX Design', 'Cyber Security', 'Mobile'];

  const filteredProjects = projects.filter(
    (proj) => selectedCategory === 'All' || proj.category === selectedCategory
  );

  return (
    <section id="projects" className="py-24 relative bg-[#0A0A0A] overflow-hidden">
      
      {/* Background Red Neon Radial Overlay */}
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#FF2D2D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-3 shadow-[0_0_15px_rgba(255,45,45,0.3)]">
            <FolderGit2 className="w-4 h-4 text-[#FF2D2D]" />
            <span className="text-xs font-bold text-[#FF2D2D] uppercase tracking-wider">Portfolio Showcase</span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl text-white tracking-tight">
            Featured <span className="text-[#FF2D2D] text-glow-red">Projects & Products</span>
          </h2>
          <p className="mt-4 text-[#A0A0A0] text-base sm:text-lg max-w-2xl mx-auto font-sans">
            A curated selection of high-performance web applications, AI platforms, and cybersecurity tools built with futuristic design ethics.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 bg-[#111111]/80 backdrop-blur-md p-2 rounded-2xl border border-white/10 w-fit mx-auto shadow-inner">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-poppins font-semibold transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#FF2D2D] to-[#E50914] text-white shadow-[0_0_15px_rgba(255,45,45,0.6)] font-bold'
                    : 'text-[#A0A0A0] hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Grid: 3-column desktop, 2-column tablet, 1-column mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-[#FF2D2D]/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_40px_rgba(255,45,45,0.3)] transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative h-56 overflow-hidden bg-[#111111]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#FF2D2D] text-white text-[10px] font-poppins font-bold uppercase tracking-wider shadow-md">
                    {project.category}
                  </span>
                </div>

                {/* Live Hover Action Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                  <span className="px-4 py-2 rounded-full bg-[#FF2D2D] text-white text-xs font-bold font-poppins shadow-lg flex items-center gap-1.5">
                    <Eye className="w-4 h-4" />
                    <span>View Case Study</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-poppins font-bold text-xl text-white group-hover:text-[#FF2D2D] transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#FF3B3B] font-semibold mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-[#A0A0A0] leading-relaxed line-clamp-2 mb-4 font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#1A1A1A] border border-white/10 text-[11px] text-[#D1D1D1] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 rounded-md bg-[#1A1A1A] text-[10px] text-neutral-400 font-semibold">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>
                    
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs text-[#FF2D2D] font-bold hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
};
