"use client";

export default function ErrorBoundary({ error }: { error: Error & { digest?: string } }) {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-10 py-16">
      <h1 className="text-2xl font-semibold text-primary">Something went wrong</h1>
      <p className="mt-2 text-foreground/80">{error.message || "Failed to load resume."}</p>
    </div>
  );
}