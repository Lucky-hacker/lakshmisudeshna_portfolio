import type { Metadata } from "next";
import { Inter, Cutive_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { SimpleStars } from "@/components/ui/simple-stars";
import { SplashCursor } from "@/components/ui/splash-cursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cutiveMono = Cutive_Mono({
  variable: "--font-cutive-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "D.lakshmi Sudeshna— Developer Portfolio",
    template: "%s — Sudeshna",
  },
  description:
    "Web Developer & Cybersecurity Enthusiast crafting secure, performant, and elegant digital experiences.",
  keywords: [
    "Web Developer",
    "Full Stack",
    "Cybersecurity",
    "React",
    "Next.js",
    "TypeScript",
  ],
  openGraph: {
    title: "D.Lakshmi Sudeshna — Developer Portfolio",
    description:
      "Projects, skills, and contact information for Darshaboina Lakshmi Sudeshna.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "Lakshmi sudeshna",
    images: [
      { url: "/og.svg", width: 1200, height: 630, alt: "Lakshmi Sudeshna Portfolio" },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cutiveMono.variable} antialiased bg-background text-foreground`}>
        {/* Animated stars background */}
        <SimpleStars className="-z-10 opacity-40" />
        
        {/* Interactive fluid cursor effect */}
        <SplashCursor 
          SIM_RESOLUTION={64}
          DYE_RESOLUTION={256}
          DENSITY_DISSIPATION={4}
          VELOCITY_DISSIPATION={3}
          PRESSURE={0.05}
          CURL={2}
          SPLAT_RADIUS={0.15}
          SPLAT_FORCE={3000}
          SHADING={false}
          COLOR_UPDATE_SPEED={5}
          TRANSPARENT={true}
        />
        
        <div className="relative z-10">
          {children}
        </div>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
