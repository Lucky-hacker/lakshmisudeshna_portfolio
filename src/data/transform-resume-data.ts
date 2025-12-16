import type { ReactNode } from "react";

// Original resume data interfaces
interface ResumeData {
  basics: {
    name: string;
    email: string;
    phone: string;
    url: { href: string };
    headline: string;
    location: string;
    picture: {
      url: string;
    };
  };
  sections: {
    profiles: {
      items: Array<{
        network: string;
        username: string;
        url: { href: string };
      }>;
    };
    summary: {
      content: string;
    };
    skills: {
      items: Array<{
        name: string;
        keywords: string[];
        level: number;
      }>;
    };
    projects: {
      items: Array<{
        name: string;
        summary: string;
        keywords: string[];
        url?: { href: string };
      }>;
    };
    experience: {
      items: Array<{
        company: string;
        position: string;
        summary: string;
        date: string;
      }>;
    };
    education: {
      items: Array<{
        institution: string;
        area: string;
        studyType: string;
        score: string;
        date: string;
        summary: string;
      }>;
    };
    certifications: {
      items: Array<{
        name: string;
        issuer: string;
        date: string;
        summary: string;
      }>;
    };
    interests: {
      items: Array<{
        name: string;
        keywords: string[];
      }>;
    };
    languages: {
      items: Array<{
        name: string;
        level: number;
      }>;
    };
  };
}

// Portfolio data interfaces
export interface Social {
  label: string;
  href: string;
  icon: ReactNode;
}

export interface TechGroup {
  title: string;
  desc: string;
  items: string[];
}

export interface Project {
  title: string;
  href: string;
  desc: string;
  keywords: string[];
  summary: string;
}

export interface Experience {
  company: string;
  position: string;
  summary: string;
  date: string;
}

export interface Education {
  institution: string;
  area: string;
  studyType: string;
  score: string;
  date: string;
  summary: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  summary: string;
}

export interface Interest {
  name: string;
  keywords: string[];
}

export interface Language {
  name: string;
  level: number;
}

// Helper function to clean HTML from summaries
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

// Helper function to extract links from HTML
function extractLinks(html: string): string[] {
  const linkRegex = /href="([^"]*)"/g;
  const links: string[] = [];
  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    if (match[1] && !match[1].startsWith('#')) {
      links.push(match[1]);
    }
  }
  return links;
}

export function transformResumeData(resumeData: ResumeData) {
  return {
    // Basic information
    hero: {
      tag: resumeData.basics.headline,
      title: resumeData.basics.name,
      subtitle: resumeData.sections.summary.content,
    },

    // Contact links
    links: {
      linkedin: resumeData.sections.profiles.items.find(p => p.network === 'LinkedIn')?.url.href || '',
      github: resumeData.sections.profiles.items.find(p => p.network === 'GitHub')?.url.href || '',
      portfolio: resumeData.basics.url.href || '',
      email: `mailto:${resumeData.basics.email}`,
      phone: `tel:${resumeData.basics.phone}`,
    },

    // Skills organized by categories
    tech: resumeData.sections.skills.items.map(skill => ({
      title: skill.name,
      desc: `Level ${skill.level}/5 proficiency`,
      items: skill.keywords,
    })),

    // Featured projects
    featured: resumeData.sections.projects.items.map(project => {
      const links = extractLinks(project.summary);
      return {
        title: project.name,
        href: links[0] || project.url?.href || '#',
        desc: stripHtml(project.summary).slice(0, 100) + '...',
        keywords: project.keywords,
        summary: stripHtml(project.summary),
      };
    }),

    // Work experience
    experience: resumeData.sections.experience.items.map(exp => ({
      company: exp.company,
      position: exp.position,
      summary: exp.summary,
      date: exp.date.replace('undefined', 'Present'),
    })),

    // Education
    education: resumeData.sections.education.items.map(edu => ({
      institution: edu.institution,
      area: edu.area,
      studyType: edu.studyType,
      score: edu.score,
      date: edu.date,
      summary: stripHtml(edu.summary),
    })),

    // Certifications
    certifications: resumeData.sections.certifications.items.map(cert => ({
      name: cert.name,
      issuer: cert.issuer,
      date: cert.date,
      summary: stripHtml(cert.summary),
    })),

    // Interests
    interests: resumeData.sections.interests.items.map(interest => ({
      name: interest.name,
      keywords: interest.keywords,
    })),

    // Languages
    languages: resumeData.sections.languages.items.map(lang => ({
      name: lang.name,
      level: lang.level,
    })),

    // Contact information
    contact: {
      email: resumeData.basics.email,
      phone: resumeData.basics.phone,
      location: resumeData.basics.location,
    },

    // Profile picture
    picture: resumeData.basics.picture.url,
  };
}