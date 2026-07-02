# Chrystl. - Personal Developer Portfolio

An interactive, responsive developer portfolio built to showcase my software engineering projects, professional experience, and technical skills. It features custom GSAP scroll animations, native CSS page transitions, and a modern, modular architecture.

## 📑 Table of Contents
1. [Tech Stack](#-tech-stack)
2. [Project Structure](#-project-structure)
3. [Prerequisites](#-prerequisites)
4. [Environment Setup](#-environment-setup)
5. [Installation & Local Setup](#-installation--local-setup)
6. [Technical Architecture](#-technical-architecture)
7. [Deployment](#-deployment)

---

## 💻 Tech Stack

**Core Frameworks & Languages**
* **Next.js (App Router):** React framework handling routing, server-side rendering, and layout structure.
* **React 19:** Component-based UI library.
* **TypeScript:** Superset of JavaScript for strict type safety across props, server actions, and components.

**State & Data Management**
* **Jotai:** Atomic state management used for global theme toggling and panel states.
* **TanStack Query:** Handles asynchronous server-side data fetching and caching.

**Styling & Animation**
* **Tailwind CSS:** Utility-first CSS framework for rapid, responsive UI development.
* **GSAP (GreenSock):** Powers complex scroll-triggered layout animations and pinned contexts (e.g., the Home page stage).
* **CSS `@starting-style`:** Handles lightweight, native browser page transition entries.
* **Lucide React:** Clean, consistent iconography across the application.

**Tooling**
* **pnpm:** Fast, disk-space efficient package manager.
* **Biome:** High-performance toolchain for fast formatting and linting.

---

## 📂 Project Structure

This project follows a modular, feature-based architecture utilizing colocation best practices:

janine-portfolio/
├── public/                # Static assets (images, icons, photos)
├── src/
│   ├── app/               # Next.js App Router (Pages, Layouts, Templates)
│   │   ├── about/         # About page, local components, and transitions
│   │   ├── contact/       # Contact page, server actions, and schemas
│   │   ├── home/          # Home page and GSAP scroll contexts
│   │   ├── projects/      # Dynamic project routing and details
│   │   ├── error.tsx      # Global error boundary
│   │   ├── globals.css    # Global styles and Tailwind imports
│   │   ├── icon.png       # Website icon
│   │   └── layout.tsx     # Root layout (Navbar, Footer injection)
│   ├── components/        # Shared global React components
│   │   ├── layout/        # Navbar, Footer, Panel Assistant
│   │   └── ui/            # Reusable UI elements (cards, transitions, buttons)
│   ├── constants/         # Static data arrays (tech stack, project details)
│   └── store/             # Global state management (Jotai atoms)
├── .env.local             # Local environment variables
├── biome.json             # Biome linter and formatter configuration
├── components.json        # shadcn/ui configuration
└── package.json           # Project dependencies and scripts