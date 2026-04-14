import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { AudioToggle } from "@/components/layout/AudioToggle";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

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
      <body className={`${inter.variable} ${playfair.variable} antialiased selection:bg-accent selection:text-black font-sans bg-black`}>
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
