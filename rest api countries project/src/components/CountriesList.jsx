import React from "react";
import Countriesdata from "../../Countriesdata";
import CountryCard from "./CountryCard";

const CountriesList = () => {
  return (
    <div className="countries-container">
      {Countriesdata.map((country) => {
        return (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population.toLocaleString("en-IN")}
            region={country.region}
            capital={country.capital?.[0]}
          />
        );
      })}
    </div>
  );
};

export default CountriesList;
