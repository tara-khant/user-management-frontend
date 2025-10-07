# 🧑‍💼 User Management System (Frontend)

This is the **Frontend** of a **User Management System** built with **React.js** and **Tailwind CSS**, integrated with the [Platzi API](https://api.escuelajs.co/api/v1).  

The system allows you to manage users with features like login, fetching users, creating, updating, and deleting users.

---

## 🧰 Tech Stack

- **React.js** (Functional Components + Hooks)  
- **Tailwind CSS** (Styling)  
- **React Router DOM** (Routing & Protected Routes)  
- **Axios** (API requests)  
- **React Query / Context API** (State management)  
- **Platzi API** (Authentication & Users)  

---

## 📂 Folder Structure

```
src/
├─ components/   # Reusable UI components
├─ context/      # Theme/Auth context
├─ hooks/        # Custom React hooks
├─ Modules/      # Modules: auth, user
├─ routes/       # ProtectedRoute & routing setup
├─ services/     # API calls
├─ styles/       # Tailwind or custom CSS
├─ App.js        # Main app component
└─ index.js      # Entry point
```

---

## 🔗 API Reference

**Base URL:** `https://api.escuelajs.co/api/v1`

| Method | Endpoint       | Description                  |
|--------|----------------|------------------------------|
| POST   | `/auth/login`  | Login & get JWT              |
| GET    | `/users`       | Fetch all users              |
| GET    | `/users/:id`   | Fetch single user            |
| POST   | `/users`       | Create new user              |
| PUT    | `/users/:id`   | Update existing user         |
| DELETE | `/users/:id`   | Delete user                  |

**User Schema Example**

```json
{
  "id": 1,
  "name": "John Doe",
  "role": "admin",
  "email": "john@example.com",
  "password": "secret123",
  "avatar": "https://example.com/avatar.png",
  "addresses": [
    {
      "street": "123 Main St",
      "city": "Ahmedabad",
      "state": "Gujarat",
      "zip": "380001"
    }
  ]
}
```

---

## 🚀 Getting Started

Run these commands in your project directory:

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.  
The page will reload automatically on code changes.

---

## 📝 Features

- User authentication (Login & Logout)  
- View all users in a table or list  
- Create, update, and delete users  
- Protected routes based on authentication  
- Responsive UI using Tailwind CSS  

---

## ⚡ Notes

- React Query or Context API is used for global state management.  
- Axios is configured to handle API requests to the Platzi API.  
- The app is fully responsive and mobile-friendly.

# Environment Variables

Create a `.env` file in the root of the project and add the following:
  REACT_APP_API_URL=https://api.escuelajs.co/api/v1
