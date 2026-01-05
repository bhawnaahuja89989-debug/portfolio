import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-bhawna.vercel.app/"),
  title: "Bhawna | Software Developer Portfolio",
  description:
    "Portfolio of Bhawna – Software Developer specializing in Next.js, React, and modern web technologies.",
  keywords: [
    "Bhawna",
    "Software Developer",
    "Next.js Portfolio",
    "Angular Developer",
    "Frontend Engineer",
  ],
  authors: [{ name: "Bhawna" }],
  creator: "Bhawna",
  openGraph: {
    title: "Bhawna | Software Developer Portfolio",
    description:
      "Modern portfolio built with Next.js, React, and Tailwind CSS.",
    url: "/",
    siteName: "Bhawna Ahuja",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bhawna Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhawna | Software Developer Portfolio",
    description:
      "Software Developer portfolio showcasing projects and skills.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
