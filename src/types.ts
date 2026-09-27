export interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'UI/UX' | 'Backend' | 'Cyber Security' | 'AI & DevOps';
  level: number; // Percentage e.g. 95
  iconName: string;
  description: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDetails: string;
  category: 'Full-Stack' | 'AI & ML' | 'UI/UX Design' | 'Cyber Security' | 'Mobile';
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Lead';
  description: string;
  responsibilities: string[];
  achievements: string[];
  skillsUsed: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
  image: string;
  skills: string[];
}

export interface Statistic {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  projectRelation: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  tagline: string;
  shortBio: string;
  fullBio: string;
  location: string;
  email: string;
  phone: string;
  avatarUrl: string;
  availableForHire: boolean;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    dribbble: string;
    instagram?: string;
    youtube?: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
