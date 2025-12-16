"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { socials, hero, featured, tech, links, experience, certifications } from "@/data/site-data";
import { HoverScramble } from "@/components/ui/text-scramble";

// Debug logging
console.log('Data check:', { socials: socials.length, tech: tech.length, featured: featured.length, experience: experience.length, certifications: certifications.length });

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <section className="relative overflow-hidden px-6 sm:px-10 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(168,85,247,0.15),transparent_70%)]" />
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass lux-shadow rounded-[var(--radius)] p-8 sm:p-12"
          >
            <HoverScramble 
              text={hero.tag}
              className="text-sm uppercase tracking-[0.3em] text-secondary/80 transition-colors hover:text-accent"
            />
            <h1 className="mt-3 text-4xl sm:text-6xl font-semibold leading-tight text-primary">
              <HoverScramble 
                text={hero.title}
                className="block transition-colors hover:text-accent"
              />
            </h1>
            <p className="mt-5 max-w-2xl text-balance text-foreground/85">
              {hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-3 rounded-lg bg-secondary text-white hover:opacity-90 transition-colors neon lux-shadow">
                View Projects
              </a>
              <Link href="/contact" className="px-5 py-3 rounded-lg bg-card text-primary border border-white/10 hover:border-white/25 transition-colors">
                Contact Me
              </Link>
              <a href="/resume.pdf" className="px-5 py-3 rounded-lg bg-card text-primary border border-white/10 hover:border-white/25 transition-colors" target="_blank" rel="noreferrer">
                View Resume (PDF)
              </a>
            </div>
            <div className="mt-8 flex gap-4">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" className="text-foreground/70 hover:text-accent transition-colors">
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section with Photo */}
      <section className="px-6 sm:px-10 py-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto relative">
                <img
                  src="/photo.jpg"
                  alt={hero.title}
                  className="w-full h-full object-cover rounded-2xl glass lux-shadow"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-secondary/20 via-transparent to-accent/10" />
              </div>
            </motion.div>
            
            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold text-primary">
                <HoverScramble 
                  text="About Me"
                  className="transition-colors hover:text-secondary"
                />
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  I&apos;m {hero.title.split(' ').slice(-1)[0]}, a passionate full-stack developer currently pursuing Computer Science 
                  at IIIT&apos;s Autonomous College with an impressive previous year 8.64 CGPA.
                </p>
                <p>
                  My journey in technology spans from cybersecurity to modern web development, 
                  where I specialize in creating secure, scalable applications using cutting-edge technologies 
                  like React, Next.js, Python, and TypeScript.
                </p>
                <p>
                  Currently working as a Full Stack Developer Intern at ClientUra, I&apos;ve successfully 
                  delivered multiple projects including AI-powered resume builders, real-time chat applications, 
                  and comprehensive Android app collections.
                </p>
                <p>
                  When I&apos;m not coding, I&apos;m exploring the latest in cybersecurity, contributing to open-source 
                  projects, or sharing knowledge through tech blogging and mentorship.
                </p>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="glass rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-secondary">{certifications.length}+</div>
                  <div className="text-sm text-foreground/60">Certifications</div>
                </div>
                <div className="glass rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-secondary">{featured.length}+</div>
                  <div className="text-sm text-foreground/60">Major Projects</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="px-6 sm:px-10 py-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-8">
            <HoverScramble 
              text="Technical Skills"
              className="transition-colors hover:text-secondary"
            />
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tech.map((t) => (
              <div key={t.title} className="glass rounded-[var(--radius)] p-6 lux-shadow">
                <h3 className="text-xl font-semibold text-primary">
                  <HoverScramble 
                    text={t.title}
                    className="transition-colors hover:text-accent"
                  />
                </h3>
                <p className="mt-2 text-sm text-foreground/75">{t.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.items.map((i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-muted/50 border border-white/5 text-foreground/80">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 sm:px-10 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
            <HoverScramble 
              text="Featured Projects"
              className="transition-colors hover:text-secondary"
            />
          </h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {featured.map((p) => (
              <a key={p.title} href={p.href} target="_blank" className="group block glass rounded-[var(--radius)] p-6 lux-shadow hover:translate-y-[-2px] transition-transform">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  <HoverScramble 
                    text={p.title}
                    className="transition-colors group-hover:text-accent"
                  />
                </h3>
                <p className="mt-2 text-sm text-foreground/75">{p.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 sm:px-10 py-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-8">
            <HoverScramble 
              text="Work Experience"
              className="transition-colors hover:text-secondary"
            />
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-[var(--radius)] p-6 lux-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{exp.position}</h3>
                    <p className="text-secondary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-foreground/60 mt-2 sm:mt-0">{exp.date}</span>
                </div>
                <p className="text-foreground/80">{exp.summary}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="px-6 sm:px-10 py-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-8">
            <HoverScramble 
              text="Certifications & Achievements"
              className="transition-colors hover:text-secondary"
            />
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.slice(0, 6).map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-[var(--radius)] p-6 lux-shadow hover:translate-y-[-2px] transition-transform"
              >
                <h3 className="text-lg font-semibold text-primary mb-2">{cert.name}</h3>
                <p className="text-secondary font-medium mb-1">{cert.issuer}</p>
                <p className="text-sm text-foreground/60 mb-3">{cert.date}</p>
                <p className="text-sm text-foreground/80">{cert.summary}</p>
              </motion.div>
            ))}
          </div>
          {certifications.length > 6 && (
            <div className="text-center mt-8">
              <p className="text-foreground/60">And {certifications.length - 6} more certifications...</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 sm:px-10 py-16 bg-background">
        <div className="max-w-6xl mx-auto glass rounded-[var(--radius)] p-8 lux-shadow">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
            <HoverScramble 
              text="Get In Touch"
              className="transition-colors hover:text-secondary"
            />
          </h2>
          <p className="mt-2 text-foreground/80">Have an idea, role, or collaboration? Let&apos;s talk.</p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <Link href="/contact" className="px-5 py-3 rounded-lg bg-secondary text-white neon">Contact Form</Link>
            <a href={links.portfolio} target="_blank" className="px-5 py-3 rounded-lg bg-card text-primary border border-white/10">Old Portfolio</a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative px-6 sm:px-10 py-12 bg-gradient-to-t from-card to-background border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.03),transparent_70%)]" />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <HoverScramble 
                text="Sudeshna"
                className="text-2xl font-bold text-primary transition-colors hover:text-accent"
              />
              <p className="text-foreground/70 leading-relaxed">
                Crafting secure, scalable, and elegant digital experiences with modern technologies.
              </p>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-accent transition-colors p-2 rounded-lg hover:bg-white/5"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <HoverScramble 
                text="Navigation"
                className="text-lg font-semibold text-primary transition-colors hover:text-secondary"
              />
              <nav className="space-y-2">
                <a href="#projects" className="block text-foreground/70 hover:text-accent transition-colors">
                  Projects
                </a>
                <Link href="/contact" className="block text-foreground/70 hover:text-accent transition-colors">
                  Contact
                </Link>
                <Link href="/resume" className="block text-foreground/70 hover:text-accent transition-colors">
                  Resume
                </Link>
                <a href={links.github} target="_blank" className="block text-foreground/70 hover:text-accent transition-colors">
                  GitHub
                </a>
              </nav>
            </div>
            
            {/* Tech Stats */}
            <div className="space-y-4">
              <HoverScramble 
                text="Tech Stack"
                className="text-lg font-semibold text-primary transition-colors hover:text-secondary"
              />
              <div className="space-y-2 text-sm text-foreground/70">
                <div className="flex justify-between">
                  <span>Languages</span>
                  <span className="text-accent">{tech.reduce((acc, t) => acc + t.items.length, 0)}+</span>
                </div>
                <div className="flex justify-between">
                  <span>Projects</span>
                  <span className="text-accent">20+</span>
                </div>
                <div className="flex justify-between">
                  <span>Certifications</span>
                  <span className="text-accent">{certifications.length}+</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience</span>
                  <span className="text-accent">{experience.length} roles</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-foreground/50">
              <HoverScramble 
                text={`© ${new Date().getFullYear()} Kuncham Venkata Satya Manikanta. Built with Next.js & TypeScript.`}
                className="transition-colors hover:text-foreground/70"
              />
            </div>
            <div className="flex items-center gap-2 text-xs text-foreground/40">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
