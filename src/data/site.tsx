export const links = {
  linkedin: "https://www.linkedin.com/in/lakshmisudeshna2035",
  github: "https://github.com/Lucky-hacker",
};

export const hero = {
  tag: "Web Developer • Cybersecurity Enthusiast",
  title: "Darshaboina Lakshmi Sudeshna",
  subtitle:
    "I build secure, performant, and elegant web applications with Next.js, TypeScript, and a hacker's curiosity.",
};

import type { ReactNode } from "react";

export type Social = { label: string; href: string; icon: ReactNode };
export type TechGroup = { title: string; desc: string; items: string[] };
export type Featured = { title: string; href: string; desc: string };

export const socials: Social[] = [
  {
    label: "GitHub",
    href: links.github,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.29 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.76.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.64-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z"/></svg>
    ),
  },
  {
    label: "LinkedIn",
    href: links.linkedin,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6v7h-4v-6.2c0-1.5 0-3.5-2.1-3.5s-2.4 1.7-2.4 3.4V24h-4V8z"/></svg>
    ),
  },
];

export const tech: TechGroup[] = [
  { title: "Frontend", desc: "Modern, accessible, and animated UIs.", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI"] },
  { title: "Backend & Email", desc: "APIs, email delivery, and security.", items: ["Route Handlers", "Nodemailer", "React Email", "Server Actions"] },
  { title: "Tooling", desc: "Performance, linting, and DX.", items: ["ESLint", "Turbopack", "TypeScript", "PostCSS"] },
  { title: "Security & SEO", desc: "Strong headers and search-optimized.", items: ["CSP", "Robots.txt", "Sitemap", "Open Graph"] },
];

export const featured: Featured[] = [
  { title: "Web-Based SQL Query Builder", href: "#", desc: "Build SQL visually (React + Tailwind)." },
  { title: "Wiki Clone", href: "https://monkey-wikipedia-clone-advanced.vercel.app/", desc: "Simple Wikipedia UI." },
];
