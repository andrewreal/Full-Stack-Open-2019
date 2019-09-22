import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountrySearch from './components/CountrySearch';
import CountryFoundList from './components/CountryFoundList';
import weatherstackApiKey from './weatherstack-api-key';

const App = () => {
  const [ countries, setCountries] = useState([]);
  const [ filter, setFilter ] = useState('');
  const [ weather, setWeather ] = useState([]);
  const [ countryChanged, setCountryChanged ] = useState([]);

  useEffect(()=> {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [] );

  const countriesToShow = countries.filter(country => 
    country.name.toLowerCase().includes(filter.toLowerCase())
  )

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setCountryChanged(true);
    setWeather([]);
  }

  const setFilteredCountry = (country) => {
    setFilter(country)
  }

  useEffect( () => {
    if (countryChanged && countriesToShow.length === 1){
      const apiRequest = 'http://api.weatherstack.com/current?access_key='+weatherstackApiKey+'&query='+countriesToShow[0].capital;
      console.log(apiRequest);
      axios
        .get(apiRequest)
        .then(response => {
          console.log('Response', response.data.current);
          setWeather(response.data.current);
        });
      setCountryChanged(false);
    } 
  }, [countriesToShow, weather, countryChanged] )


  return (
    <div className="App">
      <CountrySearch
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      <CountryFoundList
        countries={countriesToShow}
        setFilteredCountry={setFilteredCountry}
        weather={weather}
      />
    </div>
  );
}

export default App;
