// Usage examples for the comprehensive portfolio data
// This file shows how to use all the data from site-data.tsx in your components

import {
  hero,
  links,
  contact,
  picture,
  socials,
  tech,
  featured,
  experience,
  education,
  certifications,
  interests,
  languages,
  type Social,
  type TechGroup,
  type Featured,
  type Experience,
  type Education,
  type Certification,
  type Interest,
  type Language
} from './site-data';

// Example: Hero section component
export function HeroSection() {
  return (
    <section className="hero">
      <img src={picture} alt={hero.title} className="profile-picture" />
      <h1>{hero.title}</h1>
      <p className="tag">{hero.tag}</p>
      <p className="subtitle">{hero.subtitle}</p>
      
      {/* Contact links */}
      <div className="contact-links">
        <a href={links.email}>Email</a>
        <a href={links.phone}>Call</a>
        <a href={links.linkedin}>LinkedIn</a>
        <a href={links.github}>GitHub</a>
      </div>
    </section>
  );
}

// Example: Skills section component
export function SkillsSection() {
  return (
    <section className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {tech.map((skillGroup: TechGroup, index) => (
          <div key={index} className="skill-group">
            <h3>{skillGroup.title}</h3>
            <p className="desc">{skillGroup.desc}</p>
            <div className="skill-tags">
              {skillGroup.items.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Example: Projects section component
export function ProjectsSection() {
  return (
    <section className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {featured.map((project: Featured, index) => (
          <div key={index} className="project-card">
            <h3>
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h3>
            <p className="project-desc">{project.desc}</p>
            <div className="tech-stack">
              {project.keywords.map((tech, techIndex) => (
                <span key={techIndex} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Example: Experience section component
export function ExperienceSection() {
  return (
    <section className="experience">
      <h2>Work Experience</h2>
      <div className="experience-timeline">
        {experience.map((exp: Experience, index) => (
          <div key={index} className="experience-item">
            <div className="company-info">
              <h3>{exp.position}</h3>
              <p className="company">{exp.company}</p>
              <p className="date">{exp.date}</p>
            </div>
            <p className="summary">{exp.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Example: Education section component
export function EducationSection() {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((edu: Education, index) => (
          <div key={index} className="education-item">
            <div className="institution-info">
              <h3>{edu.institution}</h3>
              <p className="degree">{edu.studyType} in {edu.area}</p>
              {edu.score && <p className="score">Score: {edu.score}</p>}
              <p className="date">{edu.date}</p>
            </div>
            <p className="summary">{edu.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Example: Certifications section component
export function CertificationsSection() {
  return (
    <section className="certifications">
      <h2>Certifications & Achievements</h2>
      <div className="certifications-grid">
        {certifications.map((cert: Certification, index) => (
          <div key={index} className="certification-card">
            <h3>{cert.name}</h3>
            <p className="issuer">{cert.issuer}</p>
            <p className="date">{cert.date}</p>
            <p className="summary">{cert.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Example: Interests section component
export function InterestsSection() {
  return (
    <section className="interests">
      <h2>Areas of Interest</h2>
      <div className="interests-grid">
        {interests.map((interest: Interest, index) => (
          <div key={index} className="interest-item">
            <h3>{interest.name}</h3>
            <div className="keywords">
              {interest.keywords.map((keyword, keywordIndex) => (
                <span key={keywordIndex} className="keyword-tag">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Example: Languages section component
export function LanguagesSection() {
  return (
    <section className="languages">
      <h2>Languages</h2>
      <div className="languages-list">
        {languages.map((lang: Language, index) => (
          <div key={index} className="language-item">
            <span className="language-name">{lang.name}</span>
            <div className="proficiency">
              <div className="proficiency-bar">
                <div 
                  className="proficiency-fill" 
                  style={{ width: `${(lang.level / 5) * 100}%` }}
                />
              </div>
              <span className="proficiency-level">{lang.level}/5</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Example: Social links component
export function SocialLinks() {
  return (
    <div className="social-links">
      {socials.map((social: Social, index) => (
        <a 
          key={index} 
          href={social.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
          aria-label={social.label}
        >
          {social.icon}
          <span className="sr-only">{social.label}</span>
        </a>
      ))}
    </div>
  );
}

// Example: Contact information component
export function ContactInfo() {
  return (
    <div className="contact-info">
      <h3>Contact Information</h3>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Location: {contact.location}</p>
    </div>
  );
}

// Example: Complete portfolio page layout
export function PortfolioLayout() {
  return (
    <main className="portfolio">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <InterestsSection />
      <LanguagesSection />
      <ContactInfo />
      <SocialLinks />
    </main>
  );
}