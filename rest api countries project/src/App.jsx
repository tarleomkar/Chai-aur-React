import React, { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import SelectMenu from './components/SelectMenu'
import './App.css'
import CountriesList from './components/CountriesList'

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');

  return (
    <div>
      <Header />
      <main>
      <div className='search-filter-container'>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <SelectMenu selectedRegion={selectedRegion} onRegionChange={setSelectedRegion} />
      </div>
      <CountriesList searchTerm={searchTerm} selectedRegion={selectedRegion} />
      </main>
    </div>
  )
}

export default App