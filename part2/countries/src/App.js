import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountrySearch from './components/CountrySearch';
import CountryFoundList from './components/CountryFoundList';

const App = () => {
  const [ countries, setCountries] = useState([]);
  const [ filter, setFilter ] = useState('');

  useEffect(()=> {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        console.log(response.data)
      })
  }, [] );

  const countriesToShow = countries.filter(country => 
    country.name.toLowerCase().includes(filter.toLowerCase()))

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  return (
    <div className="App">
      <CountrySearch
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      <CountryFoundList
        countries={countriesToShow}
      />
    </div>
  );
}

export default App;
