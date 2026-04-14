import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { AudioToggle } from "@/components/layout/AudioToggle";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
  title: "Proto-Genetics | A Journey Through Heredity",
  description: "An immersive interactive experience exploring the origins of genetics before Gregor Mendel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-accent selection:text-black font-sans bg-black">
        <div className="bg-grain" />
        <SmoothScroll>
          <Navbar />
          {children}
          <AudioToggle />
        </SmoothScroll>
      </body>
    </html>
  );
}
