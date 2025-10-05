import { authors, pages, posts } from ".velite";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const marketingPages = pages
    .filter((page) => page.navigation?.hidden !== true)
    .sort((a, b) => (a.navigation?.order ?? 0) - (b.navigation?.order ?? 0));

  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const categories = Array.from(
    new Set(posts.map((post) => post.category)),
  ).slice(0, 4);

  const primaryAuthor = authors[0];

  return (
    <footer className="border-t border-base-200 bg-base-100/95">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="space-y-4 md:col-span-2">
          <div>
            <p className="text-lg font-semibold text-base-content">
              Lumosphere Technologies
            </p>
            <p className="mt-2 max-w-prose text-sm text-base-content/70">
              We build integrated cloud observability, predictive automation,
              and intelligent tooling so product teams can ship with confidence.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-base-content/70">
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" /> hello@lumosphere.dev
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> +1 (404) 555-0164
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> 210 Market Street, Suite 420, San
              Francisco, CA
            </span>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-base-content/60">
            Company
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="link-hover link">
                Home
              </Link>
            </li>
            {marketingPages.map((page) => (
              <li key={page.slug}>
                <Link href={`/${page.slug}`} className="link-hover link">
                  {page.navigation?.title ?? page.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/blog" className="link-hover link">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="link-hover link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-base-content/60">
            Latest Insights
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="link-hover link flex flex-col"
                >
                  <span>{post.title}</span>
                  <span className="text-xs text-base-content/60">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-base-content/60">
            Focus Areas
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="badge badge-outline border-base-300 text-xs font-medium"
              >
                {category}
              </span>
            ))}
          </div>
          {primaryAuthor && (
            <div className="mt-6 rounded-xl border border-base-200 bg-base-200/60 p-4">
              <p className="text-sm font-semibold text-base-content">
                Meet {primaryAuthor.title}
              </p>
              {primaryAuthor.bio && (
                <p className="mt-2 text-xs text-base-content/70">
                  {primaryAuthor.bio}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="border-t border-base-200/70 bg-base-100/90">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-base-content/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} Lumosphere Technologies. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="link-hover link">
              Privacy
            </Link>
            <Link href="/terms" className="link-hover link">
              Terms
            </Link>
            <Link href="/legal/security" className="link-hover link">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
