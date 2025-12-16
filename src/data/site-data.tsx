import type { ReactNode } from "react";

// Data types
export type Social = { label: string; href: string; icon: ReactNode };
export type TechGroup = { title: string; desc: string; items: string[] };
export type Featured = { title: string; href: string; desc: string; keywords: string[]; summary: string };
export type Experience = { company: string; position: string; summary: string; date: string };
export type Education = { institution: string; area: string; studyType: string; score: string; date: string; summary: string };
export type Certification = { name: string; issuer: string; date: string; summary: string };
export type Interest = { name: string; keywords: string[] };
export type Language = { name: string; level: number };

// Basic information and links
export const links = {
  linkedin: "https://www.linkedin.com/in/lakshmisudeshna2035",
  portfolio: "https://oibsip-ary8.vercel.app/",
  github: "https://github.com/Lucky-hacker",
  email: "mailto:lakshmisudheshana@gmail.com",
  phone: "tel:9347749117",
};

export const hero = {
  tag: "Passionate Full-Stack Developer & Cybersecurity Enthusiast",
  title: "Darshaboina Lakshmi sudeshna",
  subtitle: "I'm a passionate full-stack developer who transforms ideas into efficient, scalable, and user-friendly digital experiences. My expertise spans from Python and React to secure backend systems and UI/UX design. I thrive on solving real-world problems, experimenting with new tech stacks, and continuously learning to merge creativity with logic.",
};

// Contact information
export const contact = {
  email: "Lakshmisudheshana@gmail.com",
  phone: "9347749117",
  location: "Srikakulam, AndhraPradesh",
};

// Profile picture
export const picture = "https://ibb.co/5gzFhdfC";

// Social media profiles
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
]

// Technical skills organized by categories
export const tech: TechGroup[] = [
  {
    title: "Technical Languages",
    desc: "Level 4/5 proficiency",
    items: ["Python", "JavaScript", "C", "TypeScript", "Shell", "Bash"]
  },
  {
    title: "Frontend Development",
    desc: "Level 5/5 proficiency",
    items: ["HTML", "CSS", "React", "TailwindCSS", "Bootstrap", "Figma", "UI/UX Design"]
  },
  {
    title: "Backend & Databases",
    desc: "Level 4/5 proficiency",
    items: ["Node.js", "Express", "Flask", "MongoDB", "Firebase", "MySQL"]
  },
  {
    title: "Cybersecurity & DevOps",
    desc: "Level 4/5 proficiency",
    items: ["Ethical Hacking", "Secure Coding", "Linux Administration", "Git", "Version Control"]
  },
  {
    title: "Tools",
    desc: "Level 4/5 proficiency",
    items: ["VS Code", "Android Studio", "Postman", "Figma", "Canva"]
  }
];

// Featured projects
export const featured: Featured[] = [
  {
    title: "Weather App",
    href: "https://weather-app-beta-navy-21.vercel.app/",
    desc: "A fun and customizable weather forecast application that uses the Open‑Meteo API to fetch weather data based on your entered location.",
    keywords: ["Html,Open-Metro ApI"],
    summary: "Weather Forecast is application to check weather, with a polished UI, dark-mode support, mobile menu, and print‑ready layouts."
  },
  {
    title: "Chat Rooms",
    href: "https://chat-rooms-3.vercel.app/",
    desc: "A real-time chat application with both global and private chat rooms. Users can join the public global room or create private chat rooms using unique Room IDs.",
    keywords: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Supabase (PostgreSQL)", "Supabase Realtime", "session-based auth"],
    summary: "A real-time chat application with both global and private chat rooms. Users can join the public global room or create private chat rooms using unique Room IDs. Built with Next.js, TypeScript, Tailwind CSS, and Supabase Realtime."
  },
  {
    title: "Android Apps Collection",
    href: "https://github.com/Lucky-hacker/Android-Apps-Application",
    desc: "A comprehensive collection of 5 professional Android applications built with modern development practices.",
    keywords: ["Android SDK", "Material Design", "SQLite", "Gradle"],
    summary: "A comprehensive collection of 5 professional Android applications built with modern development practices. Each app demonstrates different aspects of Android development, from basic UI components to advanced database management and authentication systems. Key Highlights: Secure Code Signing - Unique keystores for each application, Enterprise Security - SHA-256 encryption & secure authentication, Material Design - Modern, responsive UI/UX, Data Persistence - SQLite integration with proper CRUD operations, Ready for Distribution - Signed APKs included"
  }
];

// Work experience
export const experience: Experience[] = [
  {
    company: "Clientura",
    position: "Full Stack Developer Intern",
    summary: "Developing web applications using modern full-stack technologies and collaborating with a team to solve real-world business challenges.",
    date: "Present - Present"
  },
  {
    company: "Freelance",
    position: "Independent Developer",
    summary: "Delivered freelance full-stack projects focused on UI/UX and backend performance.",
    date: "Present - Present"
  }
];

// Education background
export const education: Education[] = [
  {
    institution: "INTERNATIONAL INSTITUTE OF INFORMATION TECHNOLOGY(SRIKAKULAM)",
    area: "Electronics and Communication",
    studyType: "",
    score: "8.64 CGPA",
    date: "2024-06 - 2028-04",
    summary: "Studying core computer science concepts including software development, algorithms, and data security."
  },
  {
    institution: "INTERNATIONAL INSTITUTE OF INFORMATION TECHNOLOGY",
    area: "MPC",
    studyType: "Pre-University course",
    score: "8.0 CGPA",
    date: "March 2022-2024",
    summary: "In PUC MPC, I studied advanced Mathematics including calculus, coordinate geometry, and algebra which built my analytical thinking. I learned Physics covering mechanics, thermodynamics, waves, and electromagnetism, understanding how natural phenomena work through mathematical models. In Chemistry, I explored atomic structure, chemical bonding, organic compounds, and reaction mechanisms, gaining foundation knowledge about matter at molecular level. This combination developed my problem-solving skills and prepared me for engineering and science careers."
  },
  {
    institution: "Jyothi High School",
    area: "10th",
    studyType: "Secondary Education",
    score: "10",
    date: "",
    summary: "In 10th grade, I completed my foundation in Mathematics with topics like real numbers, polynomials, coordinate geometry, and statistics. I studied Physical Science covering basic physics (light, electricity, magnetism) and chemistry (acids, bases, metals, carbon compounds). In Biology, I learned about life processes, heredity, and natural resource management. Social Studies taught me history, geography, civics, and economics, giving me understanding of society and governance. This comprehensive curriculum built my fundamental knowledge across sciences, mathematics, and humanities, preparing me for specialized streams in higher secondary education."
  }
];

// Certifications and achievements
export const certifications: Certification[] = [
  {
    name: "ClientUra Offer Letter",
    issuer: "ClientUra",
    date: "2025-10 - Present",
    summary: "Official internship offer letter from ClientUra."
  },
  {
    name: "Oasis Android Application Development Certificate",
    issuer: "Oasis",
    date: "2025-09",
    summary: "Android application development completion certificate."
  },
  {
    name: "APSSDC Java Certificate",
    issuer: "APSSDC",
    date: "2025-07 to 2025-08",
    summary: "Java certification through APSSDC."
  },
  {
    name: "Solutions Architecture Job Simulation",
    issuer: "Platform/Institute",
    date: "2025-06",
    summary: "Completed job simulation for Solutions Architecture."
  },
  {
    name: "LearningTree Frontend Developer",
    issuer: "LearningTree",
    date: "2025-05 to 2025-06",
    summary: "Frontend development course completion."
  },
  {
    name: "Gwing Python Developer",
    issuer: "Gwing",
    date: "2025-05 to 2025-06",
    summary: "Completed Python developer course."
  },
  {
    name: "APSSDC Python Certificate",
    issuer: "APSSDC",
    date: "2025-05",
    summary: "Python certification through APSSDC."
  },
  {
    name: "Java Complete Certificate",
    issuer: "MindLuster",
    date: "2024-09",
    summary: "Completed full Java course."
  },
  {
    name: "HTML Certificate",
    issuer: "MindLuster",
    date: "2024-09",
    summary: "Completed HTML fundamentals."
  }
];

// Areas of interest
export const interests: Interest[] = [
  {
    name: "Full‑Stack Web Development",
    keywords: ["React", "Next.js", "Node.js", "Express", "TypeScript", "MongoDB", "REST", "GraphQL"]
  },
  {
    name: "UI/UX Design",
    keywords: ["Figma", "Prototyping", "a11y", "Design Systems", "TailwindCSS"]
  },
  {
    name: "Mobile & Cross‑Platform",
    keywords: ["Flutter", "React Native", "Firebase", "Play Store"]
  },
  {
    name: "Open‑Source & Community",
    keywords: ["Contributions", "Code Reviews", "Hackathons", "Tech Blogging", "Mentorship"]
  },
  {
    name: "DSA & Problem Solving",
    keywords: ["Algorithms", "Data Structures", "LeetCode", "Competitive Programming"]
  }
];

// Language proficiency
export const languages: Language[] = [
  { name: "Telugu", level: 5 },
  { name: "English", level: 4 },
  { name: "Hindi", level: 4 }
];
