# React Context API

## Overview
The React Context API is a way to share data (like state, functions, or configuration) across your component tree without having to pass props manually at every level. It’s especially useful for global data like themes, user authentication, or language preferences.

## How React Context API Works
React Context API consists of two main parts:
1. **Provider**: Supplies the context data to the component tree.
2. **Consumer**: Retrieves and uses the context data. The `useContext` hook is commonly used instead of `Consumer`.

---

## Code Breakdown

### 1️⃣ UserContext (Global State Management)
This file creates and provides a global UserContext, so components can share user data without props drilling.

```jsx
import React from "react";

const UserContext = React.createContext();

export default UserContext;
```

### Explanation
- `React.createContext()` creates a new context object (`UserContext`).
- This context object will be used with a Provider component to manage the state.

---

### 2️⃣ UserContextProvider (State Management)
This component wraps the app and provides the user state.

```jsx
import {useEffect, useState} from "react";
import UserContext from "./UserContext.js";

const UserContextProvider = ({ children }) => {
    // Loading user from localStorage (if available)
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    // saving user to localstorage when it changes
    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user"); // Remove from localstorage on logout 
        }
    }, [user])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
```

### Explanation
- `useState(null)`: Stores the user as `null` initially.
- `UserContext.Provider`: Makes `user` and `setUser` available to all child components.
- `{children}` ensures that everything inside `<UserContextProvider>` (like `<Login />` and `<Profile />`) gets access to the user data.

---

### 3️⃣ Login.jsx (Updating Context)
This component updates the user state when the login form is submitted.

```jsx
import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext) // Access setUser from context

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password }) // Update user context
    }

  return (
    <div>
        <h2>Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login;
```

### Explanation
- `useState` stores the input values (`username` and `password`).
- `useContext(UserContext)`: Gives access to `setUser` from context.
- `handleSubmit()`: Updates the global user state when the form is submitted.

---

### 4️⃣ Profile.jsx (Using Context)
This component displays the logged-in user or asks them to log in.

```jsx
import {useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user, setUser } = useContext(UserContext)
    
    if (!user) return <div>Please Login</div>

    return (
        <div>
            <h3>Welcome {user.username}</h3>
            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    )
    
}

export default Profile
```

### Explanation
- `useContext(UserContext)`: Gets `user` from context.
- If `user` is `null`, it shows "Please Login".
- Otherwise, it displays "Welcome {username}".

---

### 5️⃣ App.jsx (Using the Context)
This is the main entry point that wraps the app with `UserContextProvider`.

```jsx
import UserContextProvider from "./context/UsercontextProvider"
import Login from "./components/Login"
import Profile from "./components/Profile"

const App = () => {

  return (
    <UserContextProvider>
    <h1>React with Chai</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
```

### Explanation
- `UserContextProvider` wraps the entire app, so `Login` and `Profile` can access the user state.
- `<Login />`: Allows the user to enter their name.
- `<Profile />`: Displays the logged-in user.

---

## 🔥 Final Workflow (How It Works)
1️⃣ `UserContextProvider` initializes `user = null`.
2️⃣ User enters a username and submits the form in `Login.jsx`.
3️⃣ `setUser({ username })` updates the context.
4️⃣ `Profile.jsx` detects the change and displays "Welcome {username}" instead of "Please Login".

---

## When to Use Context
✅ **Use it for global data** that many components need access to (e.g., themes, user authentication).
❌ **Avoid it for local state** that only a few components need (props are better in that case).

### Performance Considerations
⚠️ **Context re-renders all consuming components whenever the context value changes.** Be mindful of unnecessary re-renders.

### Alternatives to Context API
- **Redux** (for complex state management)
- **Zustand** (lightweight state management alternative)
- **Recoil** (easy-to-use state management library for React)

---

## 🚀 Features
✅ User authentication using React Context API  
✅ Persistent login with `localStorage`  
✅ Simple login and logout functionality  

## 📂 Folder Structure
```
📦 project-root
├── 📂 src
│   ├── 📂 context
│   │   ├── UserContext.js
│   │   ├── UserContextProvider.js
│   ├── 📂 components
│   │   ├── Login.js
│   │   ├── Profile.js
│   ├── App.js
│   ├── index.js
```

## 🔧 Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/react-context-auth.git
   ```
2. Navigate to the project folder:
   ```sh
   cd react-context-auth
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## 🎯 How It Works
1. **User logs in** → Their data is stored in `localStorage`.
2. **User refreshes page** → Data is loaded from `localStorage`, so they remain logged in.
3. **User clicks logout** → The user state is cleared and removed from `localStorage`.

## 🛠️ Future Improvements
- 🔐 Add authentication with Firebase or JWT
- 🎨 Improve UI with TailwindCSS or Material-UI
- 🌍 Multi-language support

# Work Demo
![Vite + React - Brave 10-02-2025 14_20_04](https://github.com/user-attachments/assets/330f2ffa-7f41-429e-8e36-a3f3755ff134)


## Conclusion
The React Context API is a powerful tool for managing global state in a React application without prop drilling. It works best for scenarios like themes, authentication, and user preferences. However, for more complex state management, external libraries like Redux might be a better choice.

Happy Coding! 🚀

