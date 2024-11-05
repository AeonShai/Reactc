// src/App.js
import React from 'react';
import { useContext } from 'react';
import WeatherComponent from './components/WeatherComponent';
import { WeatherProvider } from './context/WeatherContext';
import { CountryProvider } from './context/CountryContext';
import CountryComponent from './components/CountryComponent';
import Container from './components/Container';
import { CityProvider } from './context/CityContext';

function App() {
  return (
    <>
    <CountryProvider>
      <CityProvider>
      <WeatherProvider>
        <Container />
      </WeatherProvider>
      </CityProvider>
    </CountryProvider>
    </>
  );
}

export default App;
