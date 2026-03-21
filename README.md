# Leeds Council Redesign

A design system showcase demonstrating how a council website can be styled across three distinct design themes: **Modern**, **GOV.UK**, and **NHS**. Built with React, TypeScript, and Tailwind CSS.

## Live Demo

[https://asudbury.github.io/leeds-council-redesign/](https://asudbury.github.io/leeds-council-redesign/)

## Features

- Three switchable design themes (Modern, GOV.UK, NHS) with localStorage persistence
- Fully responsive layout with mobile navigation
- Accessible components following WCAG 2.1 AA standards (ARIA labels, semantic HTML, focus states)
- Animated transitions via Framer Motion

## Components

| Component | Description |
|---|---|
| `Header` | Responsive navigation bar with mobile menu and search |
| `PhaseBanner` | Phase/status indicator banner |
| `Breadcrumb` | Navigation breadcrumb trail |
| `Hero` | Landing hero section |
| `ServicesSection` | Council services showcase |
| `InfoBanner` | Informational callout banner |
| `NewsSection` | News and updates display |
| `Footer` | Site footer |
| `ThemeSwitcher` | Floating theme switcher (fixed, bottom-centre) |

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS** — utility-first styling with custom design tokens
- **Radix UI** — accessible primitive components
- **Framer Motion** — animations
- **Lucide React** — icons

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format source files with Prettier |
| `npm run deploy` | Build and deploy to GitHub Pages |

