# 🍳 Recipe Finder (TheMealDB)

A React + Tailwind app to search recipes by **dish name**, view **ingredients**, **instructions**, a **YouTube video**, and a **source link** — powered by **TheMealDB**.

## ✨ Features
- Search recipes by dish name (e.g., "Arrabiata")
- List view with image, title, category, and cuisine
- Details view with full ingredients, instructions, YouTube, and source
- Responsive UI with Tailwind CSS
- Error & empty-state handling
- URL-sharing (search query synced to `?q=`)
- ⭐ Favorites (localStorage)
- 📝 Shopping list (localStorage)

## 🚀 Quick start
```bash
npm install
npm run dev
```

## 🧩 Tech
- React + Vite
- Tailwind CSS
- React Router
- Zustand (favorites & shopping list)
- TheMealDB API

## 🔗 API
- Search: `https://www.themealdb.com/api/json/v1/1/search.php?s=<term>`
- Lookup by ID: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=<id>`

## 🛠 Build
```bash
npm run build
npm run preview
```

## ☁️ Deploy
- **Netlify**: drag-drop `dist/` or connect your repo (build: `npm run build`, publish: `dist`)
- **Vercel**: import your repo (framework: Vite), it autodetects

## 🧪 Notes
- No API key needed for TheMealDB free endpoints
- Handles network errors and empty results gracefully
- Accessible labels & keyboard-friendly controls

---

MIT © 2025 Recipe Finder
