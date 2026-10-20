import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import CustomCursor from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zulyanify.web.id"),
  title: {
    default: "Muhammad Zulyan Fakih — Creative Designer & Art Director",
    template: "%s | Muhammad Zulyan Fakih"
  },
  description: "Portfolio of Muhammad Zulyan Fakih. Creative Designer, Visual Communicator & Art Director specializing in Brand Identity, Dynamic Editorial, and Digital Content.",
  keywords: [
    "Muhammad Zulyan Fakih",
    "Zulyan Fakih",
    "Zulyanify",
    "Creative Designer",
    "Visual Communication Design",
    "DKV UPJ",
    "Brand Identity",
    "Art Direction",
    "Graphic Designer Indonesia"
  ],
  authors: [{ name: "Muhammad Zulyan Fakih", url: "https://zulyanify.web.id" }],
  creator: "Muhammad Zulyan Fakih",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://zulyanify.web.id",
    title: "Muhammad Zulyan Fakih — Creative Designer & Art Director",
    description: "Visual Communication & Creative Design Portfolio. Explore case studies, commercial posters, and visual narratives.",
    siteName: "Muhammad Zulyan Fakih Portfolio",
    images: [
      {
        url: "/assets/images/about-me-hero.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Zulyan Fakih — Creative Designer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Zulyan Fakih — Creative Designer & Art Director",
    description: "Visual Communication & Creative Design Portfolio. Explore case studies, commercial posters, and visual narratives.",
    images: ["/assets/images/about-me-hero.png"],
    creator: "@zulyanify"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] selection:bg-[#FF3366] selection:text-white">
        {/* Desktop Interactive Custom Cursor */}
        <CustomCursor />

        <Header />
        {children}
      </body>
    </html>
  );
}
