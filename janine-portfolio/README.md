# Chrystl. - Personal Developer Portfolio
Portfolio Link: [devchrystl.vercel.app](https://devchrystl.vercel.app)

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
* **Next.js 16 (App Router):** React framework handling routing, SSR, and layout structure.
* **React 19:** Component-based UI library.
* **TypeScript 5:** Superset of JavaScript for strict type safety across props, server actions, and components.

**State, Data & Forms**
* **Jotai:** Atomic state management used for global theme toggling and panel states.
* **React Hook Form & Zod:** Schema validation and performant form state management.

**Styling & UI Components**
* **Tailwind CSS v4:** Utility-first CSS framework for rapid, responsive UI development.
* **shadcn/ui & Radix UI:** Accessible, customizable UI component primitives.
* **Lucide React:** Clean, consistent iconography.
* **Embla Carousel:** Lightweight and fluid carousel slider components.
* **Sonner:** Toast notification system for user feedback.

**Animation System**
* **GSAP (GreenSock):** Powers complex scroll-triggered layout animations and pinned contexts.
* **CSS `@starting-style` & `tw-animate-css`:** Handles lightweight, native browser page transition entries.

**Backend & Integrations**
* **Resend:** Email API for handling contact form submissions.

**Tooling**
* **pnpm:** Fast, disk-space efficient package manager.
* **Biome:** High-performance Rust-based toolchain for fast formatting and linting.

---

## 📂 Project Structure

This project follows a modular, feature-based architecture utilizing colocation best practices:

```text
janine-portfolio/
├── public/                # Static assets (images, icons, photos)
├── src/
│   ├── app/               # Next.js App Router (Pages, Layouts, Templates)
│   │   ├── about/         # About page, local components, and transitions
│   │   ├── contact/       # Contact page, server actions, and schemas
│   │   ├── (home)/        # Home page (served at /) and GSAP scroll contexts
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

⚙️ Prerequisites
Before running this project, ensure you have the following installed on your local machine:

Node.js (v18.0.0 or higher recommended)
pnpm (v8 or higher)
Git

🔐 Environment Setup
Create a .env.local file in the root directory of the project. Add the necessary environment variables required for the application to function locally.

You can setup your own env file or request an access to my env file here: https://drive.google.com/file/d/1QuydcCFYCv_gRi3WA5DfbqxhBMQIO9oV/view?usp=sharing 

Sample:
# .env.local example
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Add any required API keys or external service endpoints here

🚀 Installation & Local Setup
Clone the repository:

Bash
git clone [https://github.com/JanineChrystal/SE-Internship-Projects-2026.git](https://github.com/JanineChrystal/SE-Internship-Projects-2026.git)
Navigate to the portfolio directory:

Bash
cd SE-Internship-Projects-2026/janine-portfolio
Install dependencies using pnpm:

Bash
pnpm install
Start the development server:

Bash
pnpm dev
View the application:
Open http://localhost:3000 in your browser.

🏗️ Technical Architecture
Component Isolation & Routing
Colocation: Page-specific components (like the TechStack or WorkExperience sections of the About page) are stored locally within their respective route folders (src/app/[route]/components) to keep the global components directory clean and modular.

Dynamic Routing: The projects section uses dynamic slug routing (/projects/[slug]) mapping to a static constants file to render individual project details dynamically.

Animation Systems
Route-Specific Templates: Global page entry transitions (Scale & Pop) are handled natively via CSS @starting-style wrapped in Next.js template.tsx files.

Isolated Contexts: Heavy JavaScript animations (GSAP) are strictly isolated to specific pages (like the home route) to prevent conflicting with native DOM unmounting during route changes.

🌐 Deployment
This project is optimized for deployment on Vercel.

To deploy:
- Push your code to a GitHub repository.
- Import the project into Vercel.
- Ensure the framework preset is set to Next.js and the install command is configured for pnpm.
- Add your production environment variables in the Vercel dashboard and deploy.

Designed and developed by Janine Chrystal B. Ampusta.