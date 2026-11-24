# WEB 301 — Assignment 7 (Homework)
## Problem Statement: P3 — Recipe Book

A multi-page React application for browsing recipes, filtering by dietary preference, sorting by cooking time, viewing recipe ingredients, and managing favourite recipes.

---

### 👤 Student Details

- **Name:** Anjali Mishra
- **UID / Roll Number:** 180
- **Assigned Problem Statement:** P3 — Recipe Book
- **Live Vercel Deployment Link:** [Enter Your Vercel Live Link Here]
- **GitHub Repository:** https://github.com/anjalimishra-0007/Web-ASS-7_HW

---

### 🛠️ Features Implemented

1. **Four Key Routes:**
   - `/` — **Home Page:** Displays application overview and 3 summary statistics (Total Recipes, Veg Recipes, and Favourite Recipes).
   - `/recipes` — **Recipes List Page:** Shows all recipe cards with Type filter dropdown (`All`, `Veg`, `Non-Veg`) and Cooking Time sort dropdown (`Low to High`, `High to Low`).
   - `/recipes/:id` — **Recipe Details Page:** Displays selected recipe details, ingredients list rendered using `.map()`, and `N ingredients` count.
   - `/favourites` — **Favourites Page:** Displays all favourite recipes, total cooking time of saved recipes, or *"No favourites yet"* when empty.

2. **Recipe Cards & Badges:**
   - Displays emoji, recipe name, cuisine, cooking time (in minutes), and difficulty.
   - Dietary badges: **Veg** (green) and **Non-Veg** (red).
   - Extra badge: **Quick** if cooking time is $\le$ 20 minutes.
   - Toggle button: `"♡ Add to Favourites"` ↔ `"❤ Remove from Favourites"`.

3. **State Management & Navigation:**
   - Main state managed in `App.jsx` using `useState`.
   - Immutable array sorting using `[...list].sort()`.
   - Client-side routing with `react-router` using `BrowserRouter`, `Routes`, `Route`, `Link`, and `useParams()`.
   - State persists seamlessly during client-side navigation.

---

### 🚀 Instructions to Install and Run Locally

1. **Clone the repository:**
   ```bash
   git clone <your-repo-link>
   cd <repo-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```
