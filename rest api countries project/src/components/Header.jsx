import React from 'react';

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={toggleDarkMode}
          style={{ cursor: 'pointer' }}
        >
          {darkMode ? (
            <>
              <i className="fa-solid fa-sun" />&nbsp;&nbsp;Light Mode
            </>
          ) : (
            <>
              <i className="fa-regular fa-moon" />&nbsp;&nbsp;Dark Mode
            </>
          )}
        </p>
      </div>
    </header>
  );
};

export default Header;
