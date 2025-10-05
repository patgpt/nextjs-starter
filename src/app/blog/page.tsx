import { posts } from ".velite";
import { ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import { MotionBox } from "../components/motion-box";

export const metadata = {
  title: "Insights",
  description:
    "Latest articles, deep dives, and platform updates from Lumosphere.",
};

export default function BlogPage() {
  const sortedPosts = [...posts]
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const featuredPost =
    sortedPosts.find((post) => post.featured) ?? sortedPosts[0] ?? null;

  const secondaryPosts = featuredPost
    ? sortedPosts.filter((post) => post.slug !== featuredPost.slug)
    : sortedPosts;

  const categories = Array.from(new Set(posts.map((post) => post.category)));

  return (
    <div className="space-y-16 pb-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-base-100 to-secondary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.secondary)/0.12,transparent_60%)]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-20 sm:px-6">
          <MotionBox className="space-y-4">
            <span className="badge badge-outline border-primary/40 text-primary">
              Lumosphere Insights
            </span>
            <h1 className="text-4xl font-bold text-base-content sm:text-5xl">
              Stories, playbooks, and research for resilient engineering teams
            </h1>
            <p className="max-w-3xl text-lg text-base-content/70">
              Learn how leading platform and SRE teams use AI-driven
              observability, workflow automation, and actionable analytics to
              deliver reliable customer experiences.
            </p>
          </MotionBox>
          <MotionBox
            delay={0.1}
            className="flex flex-wrap gap-2 text-xs text-base-content/60"
          >
            {categories.map((category) => (
              <span
                key={category}
                className="badge badge-outline border-base-300"
              >
                <Tag className="mr-1 h-3 w-3" />
                {category}
              </span>
            ))}
          </MotionBox>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {featuredPost && (
          <MotionBox className="grid gap-8 rounded-3xl border border-base-200 bg-base-100/80 p-8 shadow-lg md:grid-cols-5">
            <div className="md:col-span-3">
              <span className="badge badge-primary badge-outline border-primary/30 text-primary">
                Featured
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-base-content">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="link-hover link"
                >
                  {featuredPost.title}
                </Link>
              </h2>
              {featuredPost.description && (
                <p className="mt-4 text-base text-base-content/70">
                  {featuredPost.description}
                </p>
              )}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-base-content/60">
                <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                <span>{featuredPost.metadata.readingTime} min read</span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="badge badge-outline border-base-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="btn btn-primary mt-6 w-fit"
              >
                Read article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-6 text-sm text-base-content/70">
                <p>
                  Dive deep into how Lumosphere's AI-first observability stack
                  helped cut incident response time by 63% for a
                  mission-critical payments platform.
                </p>
                <p className="mt-4 text-xs uppercase tracking-wide text-primary">
                  Case study • Platform resiliency
                </p>
              </div>
            </div>
          </MotionBox>
        )}

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {secondaryPosts.map((post, index) => (
            <MotionBox
              key={post.slug}
              delay={0.04 * index}
              className="flex h-full flex-col rounded-3xl border border-base-200 bg-base-100/80 p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">
                {post.category}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-base-content">
                <Link href={`/blog/${post.slug}`} className="link-hover link">
                  {post.title}
                </Link>
              </h3>
              {post.description && (
                <p className="mt-3 flex-1 text-sm text-base-content/70">
                  {post.description}
                </p>
              )}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-base-content/60">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>{post.metadata.readingTime} min read</span>
              </div>
              {post.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-base-content/60">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="badge badge-sm badge-outline border-base-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </MotionBox>
          ))}
        </div>
      </section>
    </div>
  );
}
