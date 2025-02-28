import React from 'react'

const CountryCard = ({name, flag, population, region, capital}) => {

  
  return (
    <a className="country-card" href={`/country.html?name=${name.common}`}>
      <img src={flag} alt={name + `Flag`} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>{population}
        </p>
        <p>
          <b>Region: </b>{region}
        </p>
        <p>
          <b>Capital: </b>{capital}
        </p>
      </div>
    </a>
  )
}

export default CountryCard