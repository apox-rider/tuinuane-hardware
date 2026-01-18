import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Use variable font if possible for better performance (Inter supports it)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",           // Prevents invisible text (FOUT → FOIT swap)
  variable: "--font-inter",  // Optional: if you want to use var(--font-inter)
});

export const metadata: Metadata = {
  title: "Tuinuane – Quality Building Materials | Tanzania",
  description: "Cement, Steel, Roofing, Plumbing, Electrical & More – Fast Delivery in Dar es Salaam",

  manifest: "/manifest.json", // Optional: if you add a PWA manifest later
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png", // 180×180 recommended
  },

  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" }, // near bg-gray-950
    { media: "(prefers-color-scheme: light)", color: "#111827" },
  ],

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,          // Prevents double-tap zoom annoyance
    userScalable: true,       // Still allow pinch zoom for accessibility
    viewportFit: "cover",     // Good for notched/curved phones
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>

        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>
      <body
        className={`
          ${inter.className}
          bg-gray-950 
          text-gray-100 
          antialiased
          min-h-screen
          touch-manipulation           // Improves touch scrolling feel
          selection:bg-primary/20      // Nice selection highlight
        `}
      >

        <div className="fixed inset-0 pointer-events-none" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}