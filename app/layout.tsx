import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  title: "Jebin | Full Stack Developer",

  description:
    "Portfolio of Jebin showcasing modern web applications, UI/UX, and full-stack development projects.",

  alternates: {
    canonical: "https://jebin-portfolio-ten.vercel.app",
  },

    openGraph: {
  title: "Jebin | Full Stack Developer",

  description:
    "Portfolio of Jebin showcasing modern web applications.",

   url: "https://jebin-portfolio-ten.vercel.app",

  siteName: "Jebin Portfolio",

  images: [
    {
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "Jebin Portfolio",
    },
  ],

  type: "website",
},

twitter: {
  card: "summary_large_image",
  title: "Jebin | Full Stack Developer",
  description:
    "Portfolio of Jebin showcasing modern web applications.",
  images: ["/opengraph-image.png"],
},

  keywords: [
    "Jebin",
    "Portfolio",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Web Developer",
  ],

  authors: [{ name: "Jebin" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
