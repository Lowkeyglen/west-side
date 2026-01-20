import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "West Side Eco Warriors | Youth Environmental Action Kenya",
  description: "Youth-led environmental initiative in West Side, Kenya. Transforming communities through clean-up projects in Kangemi, Watiti, and Keroka.",
  keywords: ["environment", "clean-up", "youth", "Kenya", "Nairobi", "Kangemi", "Watiti", "Keroka", "climate action"],
  authors: [{ name: "West Side Eco Warriors" }],
  openGraph: {
    title: "West Side Eco Warriors",
    description: "Youth-led environmental action in West Side, Kenya",
    url: "https://westsideecowarriors.org",
    siteName: "West Side Eco Warriors",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "West Side Eco Warriors",
    description: "Youth-led environmental action in West Side, Kenya",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-800`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
