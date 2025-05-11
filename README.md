# Full Stack Assignment - Next.js & Strapi

This repository contains the source code for a full-stack web application built using **Next.js** for the frontend and **Strapi** for the backend. The project was completed as part of an assignment.

---

## 🔗 Live Demo

[Live Site URL](https://railscarma-assignment.vercel.app/)

## 📂 Repository

[GitHub Repository](https://github.com/Gagan20-vis/RailscarmaAssignment.git)

---

## 🛠️ Getting Started

Follow the steps below to run the project locally.

### Prerequisites

* Node.js (v16 or above)
* npm

---

### 1. Clone the repository

```bash
git clone https://github.com/Gagan20-vis/RailscarmaAssignment
cd RailscarmaAssignment
```

---

### 2. Set up the Backend (Strapi)

```bash
cd server
npm install
```

Create an `.env` file in the `server` folder (if required) with database or environment-specific variables.

Run Strapi:

```bash
npm run develop
```

Strapi should now be running at `http://localhost:1337`.

---

### 3. Set up the Frontend (Next.js)

In a new terminal window:

```bash
cd frontend
npm install
```

Start the Next.js development server:

```bash
npm run dev
```

Frontend should be running at `http://localhost:3000`.

---

## 🚧 Challenges Faced

* **Populating Queries**: When integrating the Next.js frontend with the Strapi backend, I ran into issues populating nested fields using `populate/*`. I ultimately resolved it by leveraging the [Interactive Query Builder](https://docs.strapi.io/cms/api/rest/interactive-query-builder) and a bit of trial and error.



---

## 📌 Notes

* Admin panel for Strapi is available at `http://localhost:1337/admin`.
* Make sure the backend URL is correctly set in the frontend `.env.local`.

---
