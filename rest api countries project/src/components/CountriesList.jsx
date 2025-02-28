// CountriesList.js
import React from 'react';
import Countriesdata from '../../Countriesdata';
import CountryCard from './CountryCard';

const CountriesList = ({ searchTerm }) => {
  const filteredCountries = Countriesdata.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
