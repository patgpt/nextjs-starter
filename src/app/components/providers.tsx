"use client";

import { ThemeProvider } from "./theme-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      {children}
    </ThemeProvider>
  );
}
