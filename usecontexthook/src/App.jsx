import { createContext, useState } from 'react';
import './App.css';
import ChildA from './components/ChildA';  // Ensure this component exists

// Step 1: Create Context
const ThemeContext = createContext();
const UserContext = createContext();

// Step 2: Wrap all the children inside a provider
function App() {
  // State to manage theme and user
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState({ name: 'Omkar' });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UserContext.Provider value={user}>
        <div id="container" style={{ backgroundColor: theme === 'light' ? 'beige' : 'black' }}>
          <ChildA />
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext, UserContext };
