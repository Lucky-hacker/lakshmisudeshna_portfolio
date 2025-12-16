export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-10 py-16">
      <h1 className="text-3xl font-semibold text-primary">Contact</h1>
      <p className="mt-2 text-foreground/80">Use the form below to get in touch.</p>

      <div className="mt-8 glass rounded-[var(--radius)] overflow-hidden">
        <iframe
          title="Contact Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLScJc3NAwhIbARQtbjFfv5XFke4tXsxTn_HWCTvzcyA9Cr6D0A/viewform?embedded=true"
          className="w-full"
          style={{ minHeight: "85vh", border: 0 }}
        >
          Loading…
        </iframe>
      </div>

      <p className="mt-4 text-sm text-foreground/60">
        If the form doesn&apos;t load, <a className="text-accent underline" href="https://docs.google.com/forms/d/e/1FAIpQLScJc3NAwhIbARQtbjFfv5XFke4tXsxTn_HWCTvzcyA9Cr6D0A/viewform" target="_blank" rel="noreferrer">open it here</a>.
      </p>
    </div>
  );
}
