# 💸 ExpenseFlow — Modern One-Page Expense Tracker (MERN Stack)

A colorful, modern, responsive full-stack **Expense Tracker** built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js), styled with **Tailwind CSS**, and packed with smooth animations, real-time statistics, and instant search & category filtering.

---

## 🌟 1. Project Overview

ExpenseFlow empowers users to record daily expenses, track net balance against monthly income benchmarks, filter transactions across 8 spending categories, and gain visual clarity over their budget with animated progress metrics.

Designed to be **portfolio-ready** for recruiters and clients, while keeping the codebase **clean, modular, and beginner-friendly**.

---

## ✨ 2. Key Features

- **Dynamic Financial Dashboard**:
  - Live calculations of **Total Balance**, **Total Income**, and **Total Expenses**.
  - Inline editable monthly income benchmark with instant balance recalculation.
- **Add Expense Form**:
  - Simple fields: Title, Amount ($), Category, Date, and optional Description.
  - Client-side & server-side validation with friendly error hints.
  - Smooth loading spinners ("Adding...") and immediate dashboard updates.
- **Search & Filter in Real-Time**:
  - Instant text search across titles and descriptions.
  - Quick category pills: Food 🍔, Transport 🚗, Shopping 🛍️, Bills ⚡, Entertainment 🎬, Health 💊, Education 📚, Other 📦.
  - Sorting by Date (Newest/Oldest) and Amount (Highest/Lowest).
- **Edit & Delete Modals**:
  - Modal with backdrop blur for modifying existing expenses.
  - Confirmation safety modal preventing accidental deletions.
- **Category Spending Statistics**:
  - Visual breakdown displaying exact amount, percentage share, and animated progress bars.
  - Highlights top spending category automatically.
- **Polished UX & Micro-Animations**:
  - Floating card illustrations in Hero section.
  - Responsive glassmorphic sticky header.
  - Toast notification alerts on every action.
  - Skeleton loading placeholders.
  - Empty state with direct call-to-action.

---

## 🛠️ 3. Technologies Used

### Frontend
- **React.js** (Functional components, Hooks: `useState`, `useEffect`, `useMemo`)
- **JavaScript (ES6+)**
- **HTML5**
- **Tailwind CSS** (Modern utility styling and gradients)
- **Lucide React** (Crisp vector icons)
- **Axios** (REST API client)

### Backend
- **Node.js** (JavaScript runtime)
- **Express.js** (REST API server)
- **MongoDB** & **Mongoose** (Document database & schema modeling)
- **CORS** & **dotenv** (Cross-origin security & environment config)

---

## 📁 4. Folder Structure

```
├── backend/
│   ├── controllers/
│   │   └── expenseController.js   # CRUD logic and MongoDB queries
│   ├── models/
│   │   └── Expense.js             # Mongoose Expense schema
│   ├── routes/
│   │   └── expenses.js            # Express REST route endpoints
│   ├── .env.example               # Backend environment variables
│   ├── package.json               # Backend dependencies
│   └── server.js                  # Standalone Express server
├── src/
│   ├── api/
│   │   └── axios.js               # Configured Axios instance
│   ├── components/
│   │   ├── Header.jsx             # Sticky glassmorphic navbar
│   │   ├── Hero.jsx               # Hero section with floating cards
│   │   ├── SummaryCards.jsx       # Balance, Income, Expenses overview
│   │   ├── ExpenseForm.jsx        # Add Expense form with validation
│   │   ├── ExpenseList.jsx        # Filterable & searchable expense list
│   │   ├── ExpenseCard.jsx        # Individual styled expense card
│   │   ├── Statistics.jsx         # Category breakdown & progress bars
│   │   ├── EditExpenseModal.jsx   # Edit modal popup
│   │   ├── DeleteConfirmModal.jsx # Delete confirmation prompt
│   │   ├── Notification.jsx       # Toast alert notifications
│   │   └── Footer.jsx             # Informative footer
│   ├── utils/
│   │   └── categories.js          # Category presets, colors & icons
│   ├── App.jsx                    # Core application logic & state
│   ├── index.css                  # Global Tailwind & animation styles
│   └── main.jsx                   # React DOM entry point
├── api/
│   └── index.js                   # Vercel Serverless Function adapter
├── index.html                     # HTML root template with SEO tags
├── vercel.json                    # Vercel deployment rewrite rules
├── server.ts                      # Full-stack dev runner (port 3000)
└── package.json                   # Root package configuration
```

---

## 💻 5. Local Installation & Running

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Quick Start (Full-Stack Dev Server)
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/expenseflow.git
   cd expenseflow
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser. The app runs both the backend Express API and the Vite React frontend!

---

## 🍃 6. MongoDB Atlas Setup

1. Sign up or log into [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a free shared cluster (M0 sandbox).
3. Under **Security > Database Access**, add a new database user (keep note of the username and password).
4. Under **Security > Network Access**, click **Add IP Address** and choose `0.0.0.0/0` (Allow Access from Anywhere) to permit cloud and local access.
5. In **Databases**, click **Connect > Drivers > Node.js**, and copy your connection string:
   ```
   mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/expenseflow?retryWrites=true&w=majority
   ```
6. Replace `<username>` and `<password>` with your credentials.

> 💡 **Demo Fallback**: If `MONGO_URI` is not configured, the app runs smoothly using an active in-memory store pre-populated with realistic transactions so you can test all features immediately without any setup roadblocks!

---

## 🔐 7. Environment Variables

### Backend `.env`
Create `.env` in the root (or `backend/.env` for standalone backend):
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/expenseflow?retryWrites=true&w=majority
PORT=5000
CLIENT_URL=http://localhost:5173
```

### Frontend `.env`
For standalone frontend:
```env
VITE_API_URL=http://localhost:5000
```
*(When running on the unified server at port 3000, leave `VITE_API_URL` empty to automatically proxy relative `/api/*` endpoints).*

---

## 🚀 8. Deployment to Vercel

### Option A: Monorepo Deployment (Recommended)
This repository includes a pre-configured `vercel.json` and `api/index.js`.
1. Push your repository to GitHub.
2. In [Vercel Dashboard](https://vercel.com), click **Add New > Project** and import your repository.
3. In **Environment Variables**, add:
   - `MONGO_URI`: Your MongoDB Atlas connection string.
4. Click **Deploy**. Vercel will build the React frontend and deploy the Express API as a serverless function!

### Option B: Separate Frontend & Backend
- **Deploy Backend**: Import the `backend/` folder on Render, Railway, or Vercel Serverless. Add `MONGO_URI` and `CLIENT_URL`.
- **Deploy Frontend**: Import the root or `src/` to Vercel. In Environment Variables, set `VITE_API_URL=https://your-backend.vercel.app`.

---

## 📡 9. REST API Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/expenses` | Retrieve all expenses (sorted newest first) |
| `POST` | `/api/expenses` | Create a new expense |
| `PUT` | `/api/expenses/:id` | Update an existing expense by ID |
| `DELETE` | `/api/expenses/:id` | Delete an expense by ID |
| `GET` | `/api/health` | Health check & MongoDB connection status |

---

## ⚠️ 10. Common Troubleshooting

1. **MongoDB Connection Timeout**:
   - Check Network Access in MongoDB Atlas. Ensure `0.0.0.0/0` is allowed.
   - Verify special characters in your password are URL-encoded.
2. **CORS Error**:
   - Verify `CLIENT_URL` matches your frontend domain in production.
3. **Blank Page on Refresh**:
   - Handled automatically via `vercel.json` rewrites to `/index.html`.
