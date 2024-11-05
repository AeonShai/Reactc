import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { CountryContext } from "./CountryContext";
import { CityContext } from "./CityContext"; // CityContext'i içe aktarın

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState(null);
    const { selectedCountry } = useContext(CountryContext);
    const { selectedCity } = useContext(CityContext); // CityContext'ten şehir bilgisini alın

    useEffect(() => {
        const apiKey = '8301a1d724014fac903131548240411';
        const day = 7;
        const cities = selectedCity || 'İstanbul'; // Varsayılan şehir
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cities}&days=${day}&aqi=no&alerts=no&lang=tr`;

        const fetchWeather = async () => {
            try {
                const response = await axios.get(url);
                setWeather(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        if (selectedCity) { // Eğer selectedCity doluysa verileri getir
            fetchWeather();
        }
    }, [selectedCity, selectedCountry]); // selectedCountry ve selectedCity'yi dinleyin

    return (
        <WeatherContext.Provider value={{ weather }}>
            {children}
        </WeatherContext.Provider>
    );
};

export { WeatherContext };
