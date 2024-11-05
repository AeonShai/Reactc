import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { CountryContext } from '../context/CountryContext'; // CountryContext'i içe aktarın
import '../App.css';

function WeatherComponent() {
  const { weather } = useContext(WeatherContext);
  const { selectedCountry } = useContext(CountryContext); // CountryContext'ten selectedCountry'yi al

  return (
    <div>
      {
        weather && (
          <div>
            <h2 className='RegionName'>{selectedCountry}/{weather.location.name}</h2>
            <div className='Weather'>
              {
                weather.forecast.forecastday.map((day) => (
                  <div key={day.date} className='weather-box'>
                    <h3>{day.date}</h3>
                    <p>{day.day.condition.text}</p>
                    <img src={day.day.condition.icon} alt={day.day.condition.text} />
                    <p>Max: {day.day.maxtemp_c}°C</p>
                    <p>Min: {day.day.mintemp_c}°C</p>
                  </div>
                ))
              }  
            </div>
          </div>
        )
      }
    </div>
  );
}

export default WeatherComponent;
