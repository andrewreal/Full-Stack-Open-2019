import React from 'react';

const CountryFoundList = (props) => {
  
  const countries = () => (props.countries.length > 10)
    ? <p>Please refine your search to fewer countries</p>
    : (props.countries.length > 1)
      ? props.countries.map(country => 
          <li key={country.alpha2Code}>
            {country.name}
            <button 
              onClick= {() => props.setFilteredCountry(country.name)}
            >Show</button>
          </li>
        )
      : props.countries.map(country =>
        <div key={country.alpha2Code}>
          <h3>
            {country.name}
          </h3>
          <p>Capital : {country.capital}</p>
          <p>Population : {country.population}</p>
          <h4>Languages</h4>
          <ul>
            {country.languages.map(language => 
              <li key={language.iso639_1}>
                {language.name}
              </li>
            )}
          </ul>
          <img src={country.flag} />
          
        </div>
      )

  return (
    <ul>
      {countries()}
    </ul>
  )
}

export default CountryFoundList;