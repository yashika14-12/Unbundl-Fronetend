# Whistle Store

Landing page for Whistle Aligners built with React + Vite.

---

## How to run

Make sure you have Node.js installed.

```bash
git clone <your-repo-url>
cd whistle-store
npm install
npm run dev
```

Then open `http://localhost:5173`.

```bash
npm run build    # production build
npm run preview  # preview build locally
```

---

## API

Testimonials are loaded from [JSONPlaceholder](https://jsonplaceholder.typicode.com) — a free public API, no key needed.

Endpoint: `https://jsonplaceholder.typicode.com/comments?_limit=5`

---

## My approach

I kept things simple — each component only handles its own UI, all data is in separate JSON files, and styles are in their own CSS files. For the testimonials fetch I made a small reusable hook (`useFetch`) so the loading, error, and retry logic doesn't clutter the component. All images are saved locally so the page doesn't depend on any external image service.

---

## Folder structure

```
src/
├── assets/       images used in components
├── components/   one file per section
├── data/         JSON files (faqs, steps, results, etc.)
├── hooks/        useFetch hook
├── icons/        SVG icons
└── styles/       CSS files

public/
└── images/       images used in JSON data
```
