// CountriesList.js
import React from 'react';
import Countriesdata from '../../Countriesdata.js';
import CountryCard from './CountryCard';

const CountriesList = ({ searchTerm, selectedRegion }) => {
  const filteredCountries = Countriesdata.filter((country) => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === '' || country.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });


  return (
    <div className="countries-container">
      {filteredCountries.map((country) => (
        <CountryCard
          key={country.name.common}
          name={country.name.common}
          flag={country.flags.svg}
          population={country.population.toLocaleString('en-IN')}
          region={country.region}
          capital={country.capital?.[0]}
        />
      ))}
    </div>
  );
};

export default CountriesList;
