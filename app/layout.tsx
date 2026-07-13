import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "SYNTHETIC VISION by Aleem | Vision, powered by AI",
  description:
    "AI UGC ads, real estate DVCs, corporate DVCs, and AI generated trailers by Aleem with consistent characters, logos, branding, and polished edits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
