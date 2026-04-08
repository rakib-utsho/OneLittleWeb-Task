# OneLittleWeb Web Developer Hiring Task

A modern, section-based landing page built with Next.js, TypeScript, Tailwind CSS, and Redux Toolkit.

This project is designed as a frontend hiring task implementation and includes reusable components, responsive layouts, interactive sections, and clean project structure.

## Live Project Goal

Build a polished multi-section marketing page with:

- Clear visual hierarchy
- Reusable UI components
- Mobile-first responsiveness
- Interactive components (carousel, accordion)
- Maintainable code structure for future scaling

## Implemented Home Sections

The home page is composed in this order:

1. Hero section
2. Trusted brands section
3. Services section
4. Pricing section
5. Tools section
6. Getting started section
7. CTA (Call-to-Contact) section
8. Testimonial carousel section (Swiper.js)
9. FAQ accordion section
10. Post-FAQ support CTA card

Main composition file:

- `src/components/home/Home.tsx`

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Redux Toolkit + React Redux + redux-persist
- Swiper.js (testimonials carousel)
- Lucide React (icons)

## Key Features

- Component-driven architecture under `src/components`
- Reusable UI primitives in `src/components/ui`
- Interactive testimonial slider with hover effects and responsive breakpoints
- FAQ accordion with expandable/collapsible items
- Consistent spacing, alignment, and section-level styling
- Basic Redux wiring ready for app-level state

## Folder Highlights

- `src/app/` - App Router layout and route groups
- `src/components/common/` - Shared components (Navbar, Footer, etc.)
- `src/components/home/` - All home page sections
- `src/components/ui/` - Reusable UI primitives
- `src/redux/` - Store, provider, API base setup, slices
- `public/images/` - Static image assets used in sections

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Start production server

```bash
npm run start
```

### 5. Run lint

```bash
npm run lint
```

## Scripts

- `dev`: Run Next.js dev server
- `build`: Build production bundle
- `start`: Start production server
- `lint`: Run ESLint checks

## Environment Variables

Create a `.env` file in the project root (if needed by API integration):

```env
NEXT_PUBLIC_ENV=development
NEXT_PUBLIC_PORT=5000
NEXT_PUBLIC_BASE_URL=https://api.yourproductiondomain.com/api
NEXT_PUBLIC_DEV_BASE_URL=http://localhost:5000/api
```

## Notes

- The project currently focuses on frontend implementation and UI behavior.
- Redux structure is included for scalability even where state usage is minimal.
- Sections are easy to reorder or extend through `src/components/home/Home.tsx`.

## Author

Md. Rakibul Islam

## License

MIT — see `LICENSE` for details.
