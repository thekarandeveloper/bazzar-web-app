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

export const metadata = {
  title: {
    default: "Bazzar — Shop Smarter",
    template: "%s | Bazzar"
  },
  description:
    "Bazzar is a modern e-commerce app that helps you discover, shop, and pay securely. Built with SwiftUI & Next.js for smooth experiences.",
  keywords: [
    "Bazzar",
    "e-commerce",
    "shopping app",
    "iOS shopping",
    "SwiftUI ecommerce"
  ],
  authors: [{ name: "Karan Kumar" }],
  creator: "Karan Kumar",
  publisher: "Bazzar",
  applicationName: "Bazzar",
  metadataBase: new URL("https://bazzar.app"), // your live domain

  openGraph: {
    title: "Bazzar — Shop Smarter",
    description:
      "Discover products, shop easily, and pay securely with Bazzar. A next-gen e-commerce experience.",
    url: "https://bazzar.app",
    siteName: "Bazzar",
    images: [
      {
        url: "/og-image.png", // place in public folder
        width: 1200,
        height: 630,
        alt: "Bazzar Preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Bazzar — Shop Smarter",
    description:
      "Discover products, shop easily, and pay securely with Bazzar.",
    images: ["/og-image.png"],
    creator: "@yourtwitterhandle" // update with your handle
  },

  icons: {
    icon: "/bazzarIcon.ico", // 32x32
    shortcut: "/bazzarIcon.png",
    apple: "/bazzarIcon.png"
  },

  manifest: "/site.webmanifest", // PWA manifest if you generate one
  themeColor: "#000000"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}