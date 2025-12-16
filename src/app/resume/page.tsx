export const dynamic = "force-static";

export default function ResumePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-10 py-10">
      <h1 className="text-3xl font-semibold text-primary">Resume</h1>
      <p className="mt-2 text-sm text-foreground/70">PDF viewer with graceful fallback.</p>
      <div className="mt-6 glass rounded-[var(--radius)] p-3">
        <object data="/resume.pdf" type="application/pdf" className="w-full h-[80vh] rounded-[var(--radius)]">
          <p className="p-6">Unable to display PDF. <a className="text-accent underline" href="/resume.pdf" target="_blank">Download</a> instead.</p>
        </object>
      </div>
    </div>
  );
}