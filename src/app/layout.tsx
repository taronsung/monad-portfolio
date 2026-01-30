import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://taronsung.vercel.app"),
  title: "Seokrin Taron Sung | Technical Writer & Blockchain Engineer",
  description:
    "Portfolio of Seokrin Taron Sung - Technical Writer, Blockchain Engineer, and Korea Market Specialist. Author of KIP-87 and EIP-5865.",
  keywords: ["technical writer", "blockchain", "Monad", "Korea", "Web3", "smart contracts"],
  authors: [{ name: "Seokrin Taron Sung" }],
  openGraph: {
    title: "Seokrin Taron Sung | Technical Writer & Blockchain Engineer",
    description: "Technical writer who codes. Korea regulatory bridge.",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seokrin Taron Sung",
    description: "Technical writer who codes. Korea regulatory bridge.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
