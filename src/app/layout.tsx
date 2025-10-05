import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import Providers from "./components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Next.js Starter",
    template: "%s | Next.js Starter",
  },
  description:
    "A modern Next.js starter template with markdown-driven content management, DaisyUI styling, and TypeScript support. Perfect for blogs, portfolios, and content-driven websites.",
  keywords: [
    "nextjs",
    "react",
    "typescript",
    "tailwindcss",
    "daisyui",
    "markdown",
    "blog",
    "starter template",
  ],
  openGraph: {
    title: "Next.js Starter",
    description:
      "A modern Next.js starter template with markdown-driven content management, DaisyUI styling, and TypeScript support.",
    url: "https://nextjs-starter.example.com",
    siteName: "Next.js Starter",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Starter",
    description:
      "A modern Next.js starter template with markdown-driven content management, DaisyUI styling, and TypeScript support.",
  },
  metadataBase: new URL("https://nextjs-starter.example.com"),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9fb" },
    { media: "(prefers-color-scheme: dark)", color: "#05060a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-base-100 text-base-content antialiased`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
