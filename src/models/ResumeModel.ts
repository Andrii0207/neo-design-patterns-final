export type Contact = { email?: string; phone?: string; location?: string };

export interface Project {
  name: string;
  description: string;
  isRecent?: boolean;
}

export interface Experience {
  forEach(arg0: (exp: any) => void): unknown;
  position: string;
  company: string;
  start: string;
  end: string;
  projects: Project[];
}

export interface Education {
  forEach(arg0: (edu: any) => void): unknown;
  degree: string;
  field: string;
  institution: string;
  graduation: string;
}

export interface Skills {
  core: string[];
  tools: string[];
  languages: string[];
}

export interface ResumeModel {
  header: { fullName: string; title: string; contacts: Contact };
  summary: { text: string };
  experience: Experience[];
  education: Education[];
  skills: Skills;
}
