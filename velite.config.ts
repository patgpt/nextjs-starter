import { defineConfig, s } from "velite";

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
  },
  collections: {
    posts: {
      name: "Post",
      pattern: "posts/**/*.md",
      schema: s.object({
        title: s.string().max(99),
        slug: s.slug("global", ["title"]),
        description: s.string().max(199).optional(),
        date: s.isodate(),
        updated: s.isodate().optional(),
        cover: s.image().optional(),
        video: s.file().optional(),
        draft: s.boolean().default(false),
        featured: s.boolean().default(false),
        category: s.string(),
        tags: s.array(s.string()).default([]),
        metadata: s.metadata(),
        excerpt: s.excerpt(),
        content: s.markdown(),
      }),
    },
    pages: {
      name: "Page",
      pattern: "pages/**/*.md",
      schema: s.object({
        title: s.string().max(99),
        slug: s.slug("global", ["title"]),
        description: s.string().max(199).optional(),
        date: s.isodate().optional(),
        updated: s.isodate().optional(),
        navigation: s
          .object({
            title: s.string().optional(),
            order: s.number().default(0),
            hidden: s.boolean().default(false),
          })
          .optional(),
        metadata: s.metadata(),
        excerpt: s.excerpt(),
        content: s.markdown(),
      }),
    },
    authors: {
      name: "Author",
      pattern: "authors/**/*.md",
      schema: s.object({
        title: s.string().max(99),
        slug: s.slug("global", ["title"]),
        avatar: s.image().optional(),
        bio: s.string().max(500).optional(),
        social: s
          .object({
            twitter: s.string().optional(),
            github: s.string().optional(),
            linkedin: s.string().optional(),
            website: s.string().url().optional(),
          })
          .optional(),
        metadata: s.metadata(),
        excerpt: s.excerpt(),
        content: s.markdown(),
      }),
    },
  },
  markdown: {
    // rehypePlugins: [
    //   ['rehype-slug', {}],
    //   ['rehype-autolink-headings', { behavior: 'wrap' }],
    // ],
  },
});
