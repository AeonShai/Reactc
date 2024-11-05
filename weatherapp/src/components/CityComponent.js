import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { CountryContext } from "../context/CountryContext";
import "../App.css";
import { CityContext } from "../context/CityContext";

function CityComponent() {
  const { selectedCountry } = useContext(CountryContext);
  const {cities, setCities} = useContext(CityContext);
  const { selectedCity, setSelectedCity } = useContext(CityContext);
  

  
  return (
   <div className="Cities">
        <select
            name="city"
            id="city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="small-select"
        >
            <option value="">Select a city</option>
            {cities.map((city, index) => (
            <option key={index} value={city}>
                {city}
            </option>
            ))}
        </select>
        </div>

  );
}

export default CityComponent;
