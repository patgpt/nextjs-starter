# 🚀 Next.js Starter

A modern, feature-rich Next.js starter template with markdown-driven content management, beautiful UI components, and developer experience optimizations.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5.1.27-FF6B6B)](https://daisyui.com/)
[![Velite](https://img.shields.io/badge/Velite-0.3.0-10B981)](https://velite.js.org/)

## ✨ Features

### 🎨 Modern UI & Styling
- **DaisyUI**: Beautiful, accessible component library built on Tailwind CSS
- **Dark/Light Mode**: Automatic theme switching with next-themes
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Motion Animations**: Smooth animations with Framer Motion
- **Typography**: Optimized reading experience with @tailwindcss/typography

### 📝 Content Management
- **Markdown-Driven**: Write content in Markdown with frontmatter support
- **Velite**: Fast, type-safe content processing and schema validation
- **Blog System**: Ready-to-use blog with categories, tags, and featured posts
- **Authors Support**: Author profiles with social links
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support

### 🚀 Developer Experience
- **TypeScript**: Full type safety throughout the application
- **Biome**: Fast linting and formatting
- **Turbopack**: Lightning-fast builds and hot reloads
- **Component Library**: Reusable components with Ark UI
- **Icon System**: Lucide React icons

### 🔧 Production Ready
- **Optimized Images**: Next.js Image optimization
- **Performance**: Lighthouse-optimized performance
- **Accessibility**: WCAG compliant components
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/patgot/nextjs-starter.git
cd nextjs-starter
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── content/                 # Markdown content
│   ├── authors/            # Author profiles
│   ├── pages/              # Static pages
│   └── posts/              # Blog posts
├── public/                 # Static assets
├── src/
│   └── app/                # Next.js App Router
│       ├── components/     # Reusable components
│       ├── blog/           # Blog pages
│       ├── authors/        # Author pages
│       └── about/          # About page
├── velite.config.ts        # Content processing config
└── tailwind.config.ts      # Tailwind configuration
```

## 🛠️ Development Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run velite       # Generate content types and data

# Building
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Check code with Biome
npm run format       # Format code with Biome
```

## 🎨 Customization

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update `src/app/globals.css` for global styles
- Use DaisyUI themes in `src/app/components/theme-context.tsx`

### Content
- Add blog posts in `content/posts/`
- Create author profiles in `content/authors/`
- Add static pages in `content/pages/`
- Update `velite.config.ts` for schema changes

### Components
- Extend components in `src/app/components/`
- Add new pages in `src/app/`
- Customize layouts in `src/app/layout.tsx`

## 📦 Key Dependencies

- **Next.js 15.5.4**: React framework with App Router
- **React 19.1.0**: UI library
- **TypeScript 5**: Type-safe JavaScript
- **Tailwind CSS 4**: Utility-first CSS framework
- **DaisyUI 5.1.27**: Component library
- **Velite 0.3.0**: Markdown content processor
- **Motion 12.23.22**: Animation library
- **Ark UI**: Accessible component primitives

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to [Vercel](https://vercel.com)
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Drop the `out/` folder after `npm run build`
- **Docker**: Use `npm run build && npm run start`
- **Node.js Hosting**: Deploy the `.next/` folder

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Patrick Kelly**
- GitHub: [@patgot](https://github.com/patgot)
- LinkedIn: [Patrick Kelly](https://linkedin.com/in/patgot)

---

Made with ❤️ using Next.js, TypeScript, and modern web technologies.
