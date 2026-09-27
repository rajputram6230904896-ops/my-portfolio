import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, Github, Linkedin, Twitter, Dribbble, Instagram } from 'lucide-react';
import { ProfileInfo, ContactFormData } from '../types';

interface ContactProps {
  profile: ProfileInfo;
}

export const ContactSection: React.FC<ContactProps> = ({ profile }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message content is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1200);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0D0D0D] overflow-hidden">
      
      {/* Background Red Neon Radial Overlay */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF2D2D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-3 shadow-[0_0_15px_rgba(255,45,45,0.3)]">
            <Mail className="w-4 h-4 text-[#FF2D2D]" />
            <span className="text-xs font-bold text-[#FF2D2D] uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl text-white tracking-tight">
            Let's Build Something <span className="text-[#FF2D2D] text-glow-red">Extraordinary</span>
          </h2>
          <p className="mt-4 text-[#A0A0A0] text-base sm:text-lg max-w-2xl mx-auto font-sans">
            Have a project in mind, a prospective role, or want to collaborate? Send a message and I'll respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Map Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel rounded-3xl p-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <h3 className="font-poppins font-bold text-2xl text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#1A1A1A] border border-[#FF2D2D]/30 text-[#FF2D2D] shadow-[0_0_12px_rgba(255,45,45,0.3)]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-sm text-neutral-300">Email Address</h4>
                    <a href={`mailto:${profile.email}`} className="text-base text-white hover:text-[#FF2D2D] font-medium transition-colors">
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#1A1A1A] border border-[#FF2D2D]/30 text-[#FF2D2D] shadow-[0_0_12px_rgba(255,45,45,0.3)]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-sm text-neutral-300">Phone Number</h4>
                    <a href={`tel:${profile.phone}`} className="text-base text-white hover:text-[#FF2D2D] font-medium transition-colors">
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#1A1A1A] border border-[#FF2D2D]/30 text-[#FF2D2D] shadow-[0_0_12px_rgba(255,45,45,0.3)]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-sm text-neutral-300">Location & PIN Code</h4>
                    <p className="text-base text-white font-medium">{profile.location}</p>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-md bg-[#FF2D2D]/10 border border-[#FF2D2D]/40 text-[#FF2D2D] text-xs font-mono font-bold">
                      PIN Code: 140401
                    </span>
                  </div>
                </div>

              </div>

              {/* Location Map Preview */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-poppins font-bold text-xs uppercase text-neutral-400 tracking-wider flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#FF2D2D]" />
                    Interactive Map (140401)
                  </h4>
                  <a
                    href="https://maps.google.com/?q=140401+Kharar+Punjab+India"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-[#FF2D2D] hover:underline font-semibold"
                  >
                    Open in Google Maps →
                  </a>
                </div>
                <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-white/10 shadow-lg group">
                  <iframe
                    title="Location Map 140401"
                    src="https://maps.google.com/maps?q=140401%20Kharar%20Punjab%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(0.8) invert(0.9) contrast(1.2)' }}
                    allowFullScreen={false}
                    loading="lazy"
                    className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-[#0A0A0A]/90 backdrop-blur-md border border-[#FF2D2D]/40 text-[11px] font-bold text-white flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#FF2D2D] animate-ping" />
                    Kharar, Punjab (140401)
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="font-poppins font-bold text-xs uppercase text-neutral-400 tracking-wider mb-4">
                  Follow & Connect
                </h4>
                <div className="flex items-center gap-3">
                  {profile.socialLinks.instagram && (
                    <a
                      href={profile.socialLinks.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-white hover:bg-[#FF2D2D] transition-all"
                      aria-label="Instagram Profile"
                    >
                      <Instagram className="w-5 h-5 text-[#FF2D2D]" />
                    </a>
                  )}
                  <a
                    href={profile.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-white hover:bg-[#FF2D2D] transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={profile.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-white hover:bg-[#FF2D2D] transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={profile.socialLinks.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-white hover:bg-[#FF2D2D] transition-all"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={profile.socialLinks.dribbble}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-white hover:bg-[#FF2D2D] transition-all"
                  >
                    <Dribbble className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel rounded-3xl p-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center flex flex-col items-center justify-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#FF2D2D]/20 border border-[#FF2D2D] text-[#FF2D2D] flex items-center justify-center shadow-[0_0_25px_rgba(255,45,45,0.6)] animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-poppins font-bold text-2xl text-white">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm text-[#D1D1D1] max-w-md">
                      Thank you for reaching out. Rajput Ram will review your inquiry and get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-full bg-[#1A1A1A] text-white text-xs font-bold hover:bg-[#FF2D2D] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="font-poppins font-bold text-2xl text-white mb-2">
                      Send a Direct Message
                    </h3>

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`w-full px-4 py-3 rounded-2xl bg-[#111111] border text-white text-sm focus:outline-none transition-all ${
                            errors.name ? 'border-red-500' : 'border-white/10 focus:border-[#FF2D2D]'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full px-4 py-3 rounded-2xl bg-[#111111] border text-white text-sm focus:outline-none transition-all ${
                            errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#FF2D2D]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        placeholder="Project Inquiry / Job Opportunity"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={`w-full px-4 py-3 rounded-2xl bg-[#111111] border text-white text-sm focus:outline-none transition-all ${
                          errors.subject ? 'border-red-500' : 'border-white/10 focus:border-[#FF2D2D]'
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                        Message Details *
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Describe your project, timeline, and scope..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full px-4 py-3 rounded-2xl bg-[#111111] border text-white text-sm focus:outline-none transition-all resize-none ${
                          errors.message ? 'border-red-500' : 'border-white/10 focus:border-[#FF2D2D]'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-gradient-to-r from-[#FF2D2D] via-[#E50914] to-[#FF3B3B] text-white font-poppins font-bold text-base shadow-[0_0_25px_rgba(255,45,45,0.6)] hover:shadow-[0_0_40px_rgba(255,45,45,0.9)] hover:scale-[1.02] active:scale-98 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
