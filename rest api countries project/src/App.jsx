import React, { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import SelectMenu from './components/SelectMenu'
import './App.css'
import CountriesList from './components/CountriesList'

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Header />
      <main>
      <div className='search-filter-container'>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <SelectMenu/>
      </div>
      <CountriesList searchTerm={searchTerm}/>
      </main>
    </div>
  )
}

export default App