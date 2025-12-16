import { featured } from "@/data/site-data";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 grid md:grid-cols-2 gap-6">
      {featured.map((p) => (
        <a key={p.title} href={p.href} target="_blank" className="group block glass rounded-[var(--radius)] p-6 lux-shadow hover:translate-y-[-2px] transition-transform">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">{p.title}</h3>
          <p className="mt-2 text-sm text-foreground/75">{p.desc}</p>
        </a>
      ))}
    </div>
  );
}