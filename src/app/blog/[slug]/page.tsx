import { authors, posts } from ".velite";
import { ArrowLeft, Bookmark, CalendarDays, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MotionBox } from "../../components/motion-box";
import { RichText } from "../../components/rich-text";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const author = authors[0];

  return (
    <div className="pb-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.primary)/0.12,transparent_60%)]" />
        <div className="relative mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
          <Link
            href="/blog"
            className="btn btn-ghost btn-sm mb-8 w-fit gap-2 text-sm"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all insights
          </Link>
          <MotionBox className="space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-primary">
              <span className="badge badge-primary badge-outline border-primary/30">
                {post.category}
              </span>
              {post.featured && (
                <span className="badge badge-secondary">Featured</span>
              )}
            </div>
            <h1 className="text-4xl font-bold leading-tight text-base-content sm:text-5xl">
              {post.title}
            </h1>
            {post.description && (
              <p className="max-w-3xl text-lg text-base-content/70">
                {post.description}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-4 text-sm text-base-content/60">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString()}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.metadata.readingTime} min read
              </span>
              {post.tags.length > 0 && (
                <span className="inline-flex items-center gap-2">
                  <Bookmark className="h-4 w-4" />
                  {post.tags.slice(0, 3).join(", ")}
                </span>
              )}
            </div>
          </MotionBox>
        </div>
      </section>

      <article className="mx-auto mt-12 w-full max-w-3xl px-4 sm:px-6">
        <RichText
          className="prose prose-lg max-w-none text-base-content/80 dark:prose-invert"
          html={post.content}
        />

        <div className="mt-12 flex flex-col gap-6 rounded-3xl border border-base-200 bg-base-100/80 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
              {author?.title?.at(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-base-content">
                {author?.title ?? "Lumosphere Team"}
              </p>
              {author?.bio && (
                <p className="text-xs text-base-content/60">{author.bio}</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-base-content/60">
            <Share2 className="h-4 w-4" />
            <span>Share this article with your platform team</span>
          </div>
        </div>
      </article>
    </div>
  );
}
