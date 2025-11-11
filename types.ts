export interface Contact {
  phone: string;
  email: string;
  linkedin?: string;
}

export interface EducationItem {
  institution: string;
  year: number;
  degree: string;
  description?: string;
}

export interface ExperienceItem {
  company: string;
  period: string;
  role: string;
}

export interface Skill {
  name: string;
  category: 'adobe' | 'strategy' | 'video';
}

// Fix: Add the missing ReferenceItem type to resolve import error in References.tsx.
export interface ReferenceItem {
  name: string;
  title: string;
  phone: string;
}

export interface InstagramPost {
  id: number;
  url: string;
  imageUrl: string;
  tags?: string[];
}

export interface Affinity {
  name: string;
  affinity: number; // 0-100
}

export interface ResumeData {
  name: string;
  title: string;
  imageUrl: string;
  contact: Contact;
  address: string;
  about: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: Skill[];
  affinities: Affinity[];
  instagramPosts: InstagramPost[];
}