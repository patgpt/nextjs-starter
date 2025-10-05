---
title: Welcome to Velite
slug: welcome-to-velite
description: An introduction to using Velite for content management in Next.js
date: 2024-01-15
category: tutorial
tags: [velite, nextjs, content, markdown]
featured: true
---

# Welcome to Velite

Velite is a powerful static site generator that works seamlessly with Next.js. It provides a schema-driven approach to content management with built-in TypeScript support.

## Features

- **Schema-driven content validation** with Zod
- **Markdown processing** with remark and rehype plugins
- **TypeScript integration** for type-safe content access
- **Image optimization** and asset management
- **Flexible content organization** with collections

## Getting Started

Here's a simple example of how to use Velite in your Next.js application:

```typescript
import { posts } from '.velite'

// Access all posts
const allPosts = posts

// Find a specific post
const post = posts.find(p => p.slug === 'welcome-to-velite')
```

## Content Structure

Velite organizes content into collections defined in your `velite.config.ts` file. Each collection has its own schema and processing rules.

The content structure looks like this:

```
content/
├── posts/          # Blog posts
├── pages/          # Static pages
└── authors/        # Author information
```

## Next Steps

1. Create more content in your collections
2. Customize your Velite configuration
3. Build pages using the generated data
4. Deploy your static site

Happy coding! 🚀
