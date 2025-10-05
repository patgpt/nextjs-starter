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
    default: "Lumosphere Technologies",
    template: "%s | Lumosphere Technologies",
  },
  description:
    "Lumosphere Technologies builds AI-powered platforms that help teams ship reliable software faster through resilient cloud infrastructure and actionable analytics.",
  keywords: [
    "AI platform",
    "cloud infrastructure",
    "observability",
    "developer tooling",
    "Next.js",
  ],
  openGraph: {
    title: "Lumosphere Technologies",
    description:
      "AI-powered infrastructure and developer experience platform for modern product teams.",
    url: "https://lumosphere.example.com",
    siteName: "Lumosphere Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumosphere Technologies",
    description:
      "AI-powered infrastructure and developer experience platform for modern product teams.",
  },
  metadataBase: new URL("https://lumosphere.example.com"),
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
