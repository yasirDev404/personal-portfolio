# 🚀 Yasir Sahto - Portfolio Website

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.5-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.16.4-FF0055?style=for-the-badge&logo=framer&logoColor=white)

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![cPanel](https://img.shields.io/badge/cPanel-FF6C2C?style=for-the-badge&logo=cpanel&logoColor=white)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![React Native](https://img.shields.io/badge/React%20Native-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)

**A modern, minimal, and production-ready portfolio website for a 15-year-old backend engineer & mobile app developer.**

[Live Demo](#) • [Report Bug](https://github.com/yasirsahto/portfolio/issues) • [Request Feature](https://github.com/yasirsahto/portfolio/issues)

</div>

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Deployment](#-deployment)
  - [Deploy to Vercel](#deploy-to-vercel)
  - [Deploy to Heroku](#deploy-to-heroku)
  - [Deploy to cPanel](#deploy-to-cpanel)
- [Customization](#-customization)
- [License](#-license)

---

## 🎯 Project Overview

This is a personal portfolio website built for **Yasir Sahto**, a 15-year-old backend engineer from Pakistan who has built 8+ production backends used by real businesses. The portfolio showcases:

- **Backend Engineering Skills**: Node.js, Express, MongoDB, PostgreSQL, Stripe, JWT, Docker, AWS
- **Mobile Development**: React Native with Redux, Redux Toolkit, Axios, React Navigation
- **Real Projects**: Multi-vendor marketplaces, restaurant backends, authentication systems, and more
- **Deployment Experience**: Active deployments on Vercel, Heroku, and cPanel

The design follows a **modern, minimal, founder-energy vibe** with a **dark theme** as default.

---

## ✨ Features

### 🎨 Design & UX
- **Dark Theme** - Easy on the eyes with a professional look
- **Fully Responsive** - Perfect on mobile, tablet, and desktop
- **Smooth Animations** - Powered by Framer Motion
- **Modern UI Components** - Glass morphism, gradient effects, glow effects
- **Custom Scrollbar** - Themed to match the design

### 📱 Sections
- **Hero Section** - Impactful introduction with animated elements
- **About Me** - Story, experience, and technology highlights
- **Projects** - 6 project cards with tech badges and links
- **Skills** - Backend and Mobile development skills with progress bars
- **Contact** - Functional contact form with social links

### ⚡ Performance
- **Vite Build** - Lightning-fast development and optimized production builds
- **Code Splitting** - Separate chunks for vendor and animation libraries
- **Lazy Loading** - Animations trigger on scroll into view
- **SEO Optimized** - Meta tags for search engines and social sharing

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Library |
| **Vite 5** | Build Tool & Dev Server |
| **TailwindCSS 3** | Utility-First CSS Framework |
| **Framer Motion** | Animations & Transitions |
| **React Icons** | Icon Library |
| **PostCSS** | CSS Processing |
| **Autoprefixer** | CSS Vendor Prefixes |

---

## 📁 Folder Structure

```
personal-portfolio/
├── public/
│   └── favicon.svg           # Site favicon
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx    # Navigation bar
│   │   │   ├── Footer.jsx    # Footer component
│   │   │   └── index.js      # Layout exports
│   │   └── ui/
│   │       ├── Button.jsx    # Reusable button component
│   │       ├── Card.jsx      # Card component with hover effects
│   │       ├── Container.jsx # Max-width container
│   │       ├── SectionTitle.jsx # Section headings
│   │       ├── TechBadge.jsx # Technology badge pills
│   │       └── index.js      # UI exports
│   ├── sections/
│   │   ├── Hero.jsx          # Hero section
│   │   ├── About.jsx         # About me section
│   │   ├── Projects.jsx      # Projects showcase
│   │   ├── Skills.jsx        # Skills section
│   │   ├── Contact.jsx       # Contact form
│   │   └── index.js          # Section exports
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles & Tailwind
├── .gitignore                # Git ignore rules
├── .htaccess                 # Apache rewrite rules (cPanel)
├── index.html                # HTML template with SEO
├── package.json              # Dependencies & scripts
├── postcss.config.js         # PostCSS configuration
├── Procfile                  # Heroku deployment
├── tailwind.config.js        # Tailwind configuration
├── vercel.json               # Vercel configuration
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yasirsahto/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Building for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment

### Deploy to Vercel

Vercel is the easiest way to deploy React applications.

#### Option 1: Via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **For production deployment**
   ```bash
   vercel --prod
   ```

#### Option 2: Via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Connect your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click "Deploy"

#### Vercel Configuration

The project includes a `vercel.json` file that handles:
- SPA routing (all routes redirect to index.html)
- Security headers

---

### Deploy to Heroku

Heroku is great for hosting static sites with the `serve` package.

#### Step 1: Create a Heroku Account

Sign up at [heroku.com](https://heroku.com) if you haven't already.

#### Step 2: Install Heroku CLI

```bash
# Windows (via npm)
npm install -g heroku

# macOS
brew tap heroku/brew && brew install heroku
```

#### Step 3: Login to Heroku

```bash
heroku login
```

#### Step 4: Create a Heroku App

```bash
heroku create your-app-name
```

#### Step 5: Build the Project

```bash
npm run build
```

#### Step 6: Add the Procfile

The project already includes a `Procfile` with:

```
web: npx serve -s dist
```

#### Step 7: Deploy to Heroku

```bash
# Initialize git if not already
git init
git add .
git commit -m "Initial commit"

# Add Heroku remote
heroku git:remote -a your-app-name

# Push to Heroku
git push heroku main
```

#### Step 8: Open Your App

```bash
heroku open
```

---

### Deploy to cPanel

cPanel is common on shared hosting. Here's how to deploy:

#### Step 1: Build the Project

```bash
npm run build
```

This creates a `dist/` folder with all static files.

#### Step 2: Access cPanel File Manager

1. Login to your cPanel account
2. Open **File Manager**
3. Navigate to `public_html` (or your subdomain folder)

#### Step 3: Upload Files

1. Delete any existing files in `public_html`
2. Upload all contents from the `dist/` folder
3. Make sure `index.html` is in the root of `public_html`

#### Step 4: Configure SPA Routing

Create or upload the `.htaccess` file in `public_html` with:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

This ensures all routes redirect to `index.html` for client-side routing.

#### Step 5: Verify Deployment

Visit your domain to see the portfolio live!

#### Troubleshooting cPanel

- **404 Errors on Routes**: Make sure `.htaccess` is properly uploaded
- **Blank Page**: Check browser console for errors, ensure all files uploaded
- **MIME Type Errors**: Contact hosting support to enable proper MIME types

---

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/sections/Hero.jsx`)
   - Update name, role, and bio
   - Modify social links

2. **About Section** (`src/sections/About.jsx`)
   - Edit your story and highlights
   - Update technology icons

3. **Projects** (`src/sections/Projects.jsx`)
   - Modify the `projects` array with your actual projects
   - Update GitHub and demo links

4. **Skills** (`src/sections/Skills.jsx`)
   - Adjust skill levels in `backendSkills` and `mobileSkills` arrays

5. **Contact** (`src/sections/Contact.jsx`)
   - Update social links
   - Replace placeholder API endpoint with your actual backend

### Update Theme Colors

Edit `tailwind.config.js` to customize:
- Primary accent colors
- Neon colors for highlights
- Dark mode background colors

### Update Fonts

The project uses **Poppins** as the primary font. To change:

1. Update Google Fonts link in `index.html`
2. Modify font family in `tailwind.config.js`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Yasir Sahto**

- 🌍 Location: Pakistan
- 💼 Role: Backend Engineer & Mobile App Developer
- 🎂 Age: 15 years old
- 📧 Email: contact@yasirsahto.dev
- 🔗 GitHub: [@yasirsahto](https://github.com/yasirsahto)
- 🔗 LinkedIn: [Yasir Sahto](https://linkedin.com/in/yasirsahto)

---

<div align="center">

**Built with ❤️ by Yasir Sahto**

*Shipping production systems since 12 years old* 🚀

</div>

