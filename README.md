# 🚀 Yasir - Portfolio Website

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.5-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.16.4-FF0055?style=for-the-badge&logo=framer&logoColor=white)

**A modern, minimal portfolio website for a 15-year-old backend engineer & mobile app developer.**

</div>

---

## 👤 About

**Yasir** - 15 y/o Backend Engineer from Karachi, Pakistan

- 🔗 GitHub: [@yasirDev404](https://github.com/yasirDev404)
- 💼 LinkedIn: [Yasir](https://www.linkedin.com/in/yasir-sahto-507008364/)
- 📧 Email: yasirsahto193@gmail.com

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 🔧 Environment Variables

For the Reviews API to work, you need to set up MongoDB and environment variables:

### MongoDB Setup
1. Create a free MongoDB Atlas account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier is fine)
3. Create a database user
4. Whitelist your IP (or use `0.0.0.0/0` for Vercel)
5. Get your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)

### Vercel Environment Variables
Go to your Vercel project settings → Environment Variables and add:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
MONGODB_DB_NAME=portfolio
ADMIN_PASSWORD=mazharchutiya123
```

**Note:** Replace the connection string with your actual MongoDB Atlas connection string.

### Local Development
Create a `.env.local` file in the root directory:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
MONGODB_DB_NAME=portfolio
ADMIN_PASSWORD=mazharchutiya123
```

**Important:** Never commit `.env.local` to Git! It's already in `.gitignore`.

## 🌐 Deployment

### Vercel
1. Set up environment variables in Vercel dashboard (see above)
2. Deploy:
```bash
vercel --prod
```

The serverless functions in `/api` will automatically be deployed as Vercel Functions.

### Heroku
```bash
git push heroku main
```

### cPanel
1. Run `npm run build`
2. Upload `dist/` to `public_html`
3. Add `.htaccess` for SPA routing

**Note:** Serverless functions only work on Vercel. For Heroku/cPanel, you'll need a separate backend server.

---

## 📁 Structure

```
├── api/
│   └── reviews/
│       ├── submit.js    # POST endpoint for submitting reviews
│       ├── approve.js   # PUT endpoint for approving reviews
│       └── index.js     # GET/DELETE endpoints for fetching/deleting reviews
├── src/
│   ├── components/
│   │   ├── layout/    # Navbar, Footer
│   │   └── ui/        # Button, Card, etc.
│   ├── sections/      # Hero, About, Projects, Skills, Contact, Reviews
│   └── App.jsx
└── package.json
```

## 🔌 API Endpoints

The portfolio includes serverless API endpoints for the Reviews section:

- **POST** `/api/reviews/submit` - Submit a new review (public)
- **PUT** `/api/reviews/approve` - Approve a pending review (admin)
- **GET** `/api/reviews` - Fetch all reviews (public sees approved, admin sees all)
- **DELETE** `/api/reviews` - Delete a review (admin)

All endpoints require proper authentication for admin actions.

---

<div align="center">
Made with ❤️ by Yasir
</div>
