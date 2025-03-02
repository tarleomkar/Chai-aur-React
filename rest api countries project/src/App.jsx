import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SelectMenu from './components/SelectMenu';
import CountriesList from './components/CountriesList';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main>
        <div className="search-filter-container">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <SelectMenu selectedRegion={selectedRegion} onRegionChange={setSelectedRegion} />
        </div>
        <CountriesList searchTerm={searchTerm} selectedRegion={selectedRegion} />
      </main>
    </div>
  );
};

export default App;
