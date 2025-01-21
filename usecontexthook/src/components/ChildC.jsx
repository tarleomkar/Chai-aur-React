import  { useContext } from 'react';
import { ThemeContext, UserContext } from '../App';

const ChildC = () => {
  // Access theme and setTheme from context
  const { theme, setTheme } = useContext(ThemeContext);
  const user = useContext(UserContext); // Accessing UserContext

  // Handle theme toggle
  function handleClick() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
}

  return (
    <div>
      <button onClick={handleClick}>Change Theme</button>
      <p>Current theme: {theme}</p>
      <p>User: {user.name}</p> {/* Display the user's name */}
    </div>
  );
};

export default ChildC;
