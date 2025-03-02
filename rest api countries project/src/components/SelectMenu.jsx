// SelectMenu.js
import React from 'react';

const SelectMenu = ({ selectedRegion, onRegionChange }) => {
  return (
    <select
      className="filter-by-region"
      value={selectedRegion}
      onChange={(e) => onRegionChange(e.target.value)}
    >
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default SelectMenu;
