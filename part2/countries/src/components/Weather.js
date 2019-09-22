import React from 'react';

const Weather = (props) => {

  const weather = () => {
    console.log('Weather', props.weather);
  }

  return (
    <div className='weather'>
      <h3>Weather for {props.country.capital}</h3>
      <div> 
        {weather()}
        Temperature : {props.weather.temperature} deg Celsius<br/>
        <img  
          src={props.weather.weather_icons} 
          alt={props.weather.weather_descriptions}
        /><br/>
        Wind : {props.weather.wind_speed} kph, direction {props.weather.wind_dir} 
      </div>
    </div>
  )
}

export default Weather;