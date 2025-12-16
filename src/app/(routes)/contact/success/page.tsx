import Link from "next/link";

export default function ContactSuccessPage() {
  return (
    <div className="max-w-xl mx-auto px-6 sm:px-10 py-16 text-center">
      <div className="glass rounded-[var(--radius)] p-8">
        <div className="mb-6">
          <svg 
            className="w-16 h-16 mx-auto text-accent" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>
        
        <h1 className="text-3xl font-semibold text-primary mb-4">
          Message Sent Successfully!
        </h1>
        
        <p className="text-foreground/80 mb-6">
          Thank you for reaching out! I&apos;ve received your message and will get back to you as soon as possible.
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white rounded-lg hover:opacity-90 transition-colors neon"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}