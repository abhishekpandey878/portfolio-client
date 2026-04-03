export interface SocialLink {
  label: string;
  url: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ProjectItem {
  name: string;
  stack: string[];
  description: string;
  link: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface SectionTitles {
  about: string;
  skills: string;
  links: string;
  experience: string;
  projects: string;
  education: string;
  contact: string;
}

export type EditorSectionKey =
  | 'profile'
  | 'about'
  | 'skills'
  | 'links'
  | 'experience'
  | 'projects'
  | 'education'
  | 'contact';

export interface PortfolioProfile {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  profilePhoto: string;
  resumePath: string;
  socialLinks: SocialLink[];
  highlights: string[];
  skills: string[];
  sectionTitles: SectionTitles;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
}

export interface AuthUser {
  email: string;
  role: string;
}

export interface LoginResponse {
  message: string;
  token: string;
  user: AuthUser;
}

export interface SectionMutationResponse<T = unknown> {
  message: string;
  section: EditorSectionKey;
  data: T;
}
