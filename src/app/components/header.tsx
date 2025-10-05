import { pages } from ".velite";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { MobileNav, type NavItem } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

function buildNavItems(): NavItem[] {
  const marketingPages = pages
    .filter((page) => page.navigation?.hidden !== true)
    .sort((a, b) => (a.navigation?.order ?? 0) - (b.navigation?.order ?? 0))
    .map<NavItem>((page) => ({
      href: `/${page.slug}`,
      label: page.navigation?.title ?? page.title,
    }));

  return [
    { href: "/#platform", label: "Platform" },
    { href: "/#solutions", label: "Solutions" },
    ...marketingPages,
    { href: "/blog", label: "Blog" },
    { href: "/#insights", label: "Insights" },
    { href: "/#contact", label: "Contact" },
  ];
}

export function Header() {
  const navItems = buildNavItems();

  return (
    <header className="sticky top-0 z-40 border-b border-base-200/80 bg-base-100/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-semibold"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-content shadow-inner transition group-hover:scale-105">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight text-base-content">
            <span>Lumosphere</span>
            <span className="text-xs font-normal text-base-content/70">
              Intelligent Cloud Platform
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-base-200 bg-base-100/80 px-2 py-1 shadow-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-base-content/80 transition hover:text-base-content focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="btn btn-primary hidden text-sm font-semibold normal-case md:inline-flex"
          >
            Book a demo
          </Link>
          <MobileNav navItems={navItems} />
        </div>
      </div>
    </header>
  );
}
