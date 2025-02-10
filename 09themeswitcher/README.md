# 09ThemeSwitcher

## 📌 Project Overview
09ThemeSwitcher is a React application that implements a **dark mode theme switcher** using **Context API** and **Tailwind CSS**. The selected theme persists across page refreshes using **localStorage**.

## 🛠️ Tech Stack
- **React** (for UI components)
- **Context API** (for global state management)
- **Tailwind CSS** (for styling)
- **localStorage** (for persisting theme selection)

## ✨ Features
- 🌑 **Dark Mode Toggle** - Switch between light and dark themes
- 🔄 **State Management with Context API** - Centralized theme handling
- 💾 **Persistent Theme** - Saves the user’s preference in `localStorage`

## 📂 Project Structure
```
09ThemeSwitcher/
├── src/
│   ├── components/
        ├── Card.jsx
│   │   ├── ThemeBtn.jsx
│   ├── context/
│   │   ├── theme.js
│   ├── App.js
│   ├── main.js
├── index.html
├── vite.config.js
├── package.json
├── README.md
```

## ⚙️ Installation & Setup
1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/09ThemeSwitcher.git
   ```

2. **Navigate to the project directory**  
   ```bash
   cd 09ThemeSwitcher
   ```

3. **Install dependencies**  
   ```bash
   npm install
   ```

4. **Start the development server**  
   ```bash
   npm run dev
   ```

## 🚀 Usage
- Click the **toggle button** to switch themes.
- The selected theme persists even after refreshing the page.

## 🛠️ Implementation Details
### 1️⃣ ThemeContext.js (Context API)
- Created a `ThemeContext` to manage theme state globally.
- Used `useEffect` to sync the theme state with `localStorage`.

### 2️⃣ ThemeToggle.js (Theme Switch Button)
- Fetches and updates the theme from `ThemeContext`.
- Toggles **light** and **dark** themes using Tailwind's `dark` class.

### 3️⃣ Tailwind CSS Configuration
- Enabled `darkMode: "class"` in `tailwind.config.js`.

## ⚠️ Issues Faced & Fixes
### 🛑 Issue: Theme not updating in UI
- The state was updating in **React DevTools**, but the UI wasn’t reflecting changes.
- **Fix:** Used `document.documentElement.classList` inside `useEffect` to apply the correct theme.

## 🎯 Conclusion
✅ Successfully implemented a **theme switcher** using **Context API** and **Tailwind CSS**. The project demonstrates efficient **state management** and **persistent user preferences**.

## UI
![Vite + React - Brave 10-02-2025 15_47_31](https://github.com/user-attachments/assets/f01c7a1f-d2be-4bb7-9804-cdc655ad4e89)


🔥 Keep Building! 🚀

