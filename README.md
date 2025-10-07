# 🧑‍💼 User Management System

This is a **Frontend- User Management System** built with **React.js** and **Tailwind CSS**, integrated with the [Platzi API](https://api.escuelajs.co/api/v1).  
It supports **JWT-based authentication**, **protected routes**, **user CRUD operations**, **multiple addresses per user (frontend-only)**, and **Light/Dark theme toggle**.

---

## 🚀 Features

### 🔐 Authentication
- Login / Logout using JWT via Platzi API  
- Token stored in `localStorage` or `sessionStorage`  
- Protected routes for user-related pages  
- Logout clears token and redirects to login  

### 👥 User Management (CRUD)
- Fetch all users  
- View single user details  
- Add new user (with multiple addresses)  
- Edit user information  
- Delete user  

> 🏠 **Addresses** are handled **locally in the frontend** since the Platzi API doesn’t support them.

### 🎨 UI & Theming
- Built with **Tailwind CSS**  
- Light / Dark mode toggle  
- Theme preference persists across reloads  
- Fully responsive for desktop & mobile  
- Clean, accessible, and modern design  

### 🧰 Tech Stack
- **React.js (Functional Components + Hooks)**  
- **React Router** – Routing & Protected Routes  
- **React Query / Context API** – State & API data management  
- **Axios** – API communication  
- **Tailwind CSS** – Styling  
- **Platzi API** – Authentication & User data  

---

## 📦 API Reference

### 🔑 Authentication
**POST** `https://api.escuelajs.co/api/v1/auth/login`

**Body:**
```json
{
  "email": "john@mail.com",
  "password": "changeme"
}
