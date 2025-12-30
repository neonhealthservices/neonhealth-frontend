import type { Metadata } from "next";
import { Geom } from "next/font/google";
import "./globals.css";

const geom = Geom({
  variable: "--font-geom",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Neon Health Services | Advanced Healthcare Solutions",
    template: "%s | Neon Health Services",
  },
  description: "Neon Health Services provides cutting-edge healthcare management and patient care solutions. Trusted by top professionals.",
  keywords: ["healthcare", "hospital", "patient care", "medical services", "neon health"],
  authors: [{ name: "Neon Health Team" }],
  creator: "Neon Health Services",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neonhealth.com",
    siteName: "Neon Health Services",
    title: "Neon Health Services | Advanced Healthcare Solutions",
    description: "Leading the way in modern healthcare with comprehensive services and compassionate care.",
    images: [
      {
        url: "/og-image.png", // Ensure this image exists in public folder or update path
        width: 1200,
        height: 630,
        alt: "Neon Health Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neon Health Services | Advanced Healthcare Solutions",
    description: "Leading the way in modern healthcare with comprehensive services and compassionate care.",
    creator: "@neonhealth",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/neon-logo.png",
    apple: "/neon-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geom.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
