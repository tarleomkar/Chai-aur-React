# Todo App with React & Context API 🚀

## 📌 Project Overview
A simple **Todo App** built with **React, Context API, and LocalStorage**, allowing users to **add, update, delete, and mark todos as completed**. The state is **persisted in LocalStorage**, ensuring todos are saved even after a page refresh.

## 🛠️ Tech Stack
- **React** (Component-based UI)
- **Context API** (State Management)
- **Tailwind CSS** (Styling)
- **LocalStorage** (Persistent Data Storage)

## ✨ Features
✔ **Add Todos** – Enter tasks and store them in the app  
✔ **Update Todos** – Edit existing tasks  
✔ **Delete Todos** – Remove tasks when completed  
✔ **Toggle Completion** – Mark tasks as done or undone  
✔ **LocalStorage Integration** – Keeps todos saved on refresh  

## 📂 Project Structure
```
📦 todo-app
├── 📂 src
│   ├── 📂 components
│   │   ├── TodoForm.jsx
│   │   ├── TodoItem.jsx
│   │   ├── index.js
│   ├── 📂 contexts
│   │   ├── TodoContext.js
│   │   ├── index.js
│   ├── App.jsx
│   ├── main.jsx
├── index.html
├── package.json
├── README.md
```

## 🚀 Setup Instructions
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/tarleomkar/Chai-aur-React.git
```
### 2️⃣ Navigate to Project Directory
```sh
cd 10todocontextlocalstorage
```
### 3️⃣ Install Dependencies
```sh
npm install
```
### 4️⃣ Start the Development Server
```sh
npm run dev
```

## 🛠️ Implementation Details
### **1️⃣ Context API for Global State Management**
- `TodoContext.js` manages the todo state globally.
- Provides methods like `addTodo`, `updateTodo`, `deleteTodo`, and `toggleComplete`.

### **2️⃣ LocalStorage for Persistent Data**
- **Todos are saved in LocalStorage** and retrieved on page load.
- `useEffect` is used to sync **todos with LocalStorage**.

### **3️⃣ TodoForm Component (Adding Todos)**
- Handles **new todo input** and triggers `addTodo()`.
- Prevents empty todo submission.

### **4️⃣ TodoItem Component (Updating & Deleting)**
- Displays each todo with:
  - **Edit** button ✏️
  - **Delete** button ❌
  - **Checkbox for completion** ✅
- Uses `updateTodo()` and `deleteTodo()` for functionality.

## ⚠️ Issues Faced & Fixes
### 🛑 Issue: `e.prevetDefault()` Typo in `TodoForm.jsx`
✅ **Fix:** Changed to `e.preventDefault()`.

### 🛑 Issue: `updateTodo` Overwriting ID
✅ **Fix:** Ensured `updateTodo` retains the `id` using `...prevTodo`.

### 🛑 Issue: UI Not Updating on Toggle
✅ **Fix:** Used `{ ...prevTodo, completed: !prevTodo.completed }`.

## 🎯 Future Enhancements
- 📅 **Due Date for Todos**
- 🔔 **Notifications & Reminders**
- 📊 **Stats Dashboard (Completed vs Pending Tasks)**

## 📜 License
This project is **open-source** and available under the **MIT License**.

Happy Coding! 🚀🔥

