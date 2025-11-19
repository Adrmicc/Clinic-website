# 🏥 Clinic Website

A modern, responsive clinic website built with Next.js 15, React 19, and TypeScript. Features a clean design with smooth animations, dark mode support, and a comprehensive UI component library.

## 🚀 Demo

**[View Live Demo](https://aa-website-amber-sigma.vercel.app/)**

## ✨ Features

- 🎨 **Modern UI/UX** - Clean and professional design with smooth animations
- 🌓 **Dark Mode** - Full dark mode support with theme persistence
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **High Performance** - Built with Next.js 15 and React 19
- 🎯 **SEO Optimized** - Server-side rendering for better search engine visibility
- 🧩 **Component Library** - Extensive collection of reusable UI components built with Radix UI
- 🎭 **Smooth Animations** - Enhanced user experience with tailwindcss-animate
- 📊 **Analytics Ready** - Integrated with Vercel Analytics

## 🏗️ Built With

- **[Next.js 15](https://nextjs.org/)** - React framework for production
- **[React 19](https://react.dev/)** - Latest React version
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better developer experience
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
- **[Lucide Icons](https://lucide.dev/)** - Beautiful and consistent icon set
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[React Hook Form](https://react-hook-form.com/)** - Form validation and management
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

## 📋 Sections

The website includes the following sections:

- **Hero** - Eye-catching landing section with call-to-action
- **About** - Information about the clinic
- **Services** - Medical services offered
- **Pricing** - Transparent pricing plans
- **Testimonials** - Patient reviews and feedback
- **Contact** - Contact form and information
- **Footer** - Additional links and information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- pnpm (recommended), npm, or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Adrmicc/Clinic-website.git
cd Clinic-website
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🛠️ Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
clinic-website/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   ├── services.tsx      # Services section
│   ├── pricing.tsx       # Pricing section
│   ├── testimonials.tsx  # Testimonials section
│   ├── contact.tsx       # Contact section
│   └── footer.tsx        # Footer component
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in:
- `tailwind.config.js` - Tailwind configuration
- `app/globals.css` - Global styles and CSS variables

### Components

All components are located in the `components/` directory. The UI components in `components/ui/` are built with Radix UI and can be easily customized.

### Theme

Dark mode is implemented using `next-themes`. The theme provider is configured in `components/theme-provider.tsx`.

## 📦 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com):

1. Push your code to a GitHub repository
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy" and your site will be live!

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Adrmicc**

- GitHub: [@Adrmicc](https://github.com/Adrmicc)

---

Built with ❤️ using Next.js and React
