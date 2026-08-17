import {
  Geist,
  Geist_Mono,
  Outfit,
  Space_Grotesk,
  Syne,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const siteUrl = "https://asif.to";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Asif Imam | Frontend Developer & Full-Stack MERN Developer",
  description:
    "Asif Imam is a Frontend & Full-Stack Developer with 3+ years experience building scalable, high-performance web applications with React.js, Next.js, Node.js, Express.js, and MongoDB.",
  keywords: [
    "Asif Imam",
    "Frontend Developer",
    "Full-Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "React Native Developer",
    "Software Engineer Portfolio",
    "asif.to",
  ],
  authors: [{ name: "Asif Imam", url: siteUrl }],
  creator: "Asif Imam",
  publisher: "Asif Imam",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Asif Imam | Frontend & Full-Stack Developer",
    description:
      "Results-driven MERN Stack Developer with 3+ years of experience building scalable and high-performance web applications.",
    url: siteUrl,
    siteName: "Asif Imam - Developer Portfolio",
    images: [
      {
        url: "/assets/asif.to.png",
        width: 1200,
        height: 630,
        alt: "Asif Imam developer portfolio and project showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asif Imam | Frontend & Full-Stack Developer",
    description:
      "Results-driven MERN Stack Developer with 3+ years experience in React.js, Next.js, Node.js, and MongoDB.",
    images: ["/assets/asif.to.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Asif Imam",
      url: siteUrl,
      image: `${siteUrl}/asifimam.jpg`,
      jobTitle: "Frontend Developer / Full-Stack Developer",
      email: "mailto:asif@asif.to",
      telephone: "+919911471995",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Delhi",
        addressCountry: "India",
      },
      sameAs: [
        "https://github.com/theasifimam",
        "https://linkedin.com/in/theasifimam",
      ],
      knowsAbout: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux Toolkit",
        "Zustand",
        "React Native",
        "TypeScript",
        "JavaScript (ES6+)",
        "REST APIs",
        "Tailwind CSS",
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${spaceGrotesk.variable} ${syne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
