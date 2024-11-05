import { createContext, useState, useEffect } from "react";
import axios from "axios";
const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");

    useEffect(() => {
        const url = 'https://countriesnow.space/api/v0.1/countries';

        const fetchCountries = async () => {
            try {
                const response = await axios.get(url);

                if (response.data && response.data.data) {
                    const countryNames = response.data.data.map((country) => country.country); 
                    setCountries(countryNames); 
                } else {
                    console.error("Beklenen yapıda veri bulunamadı.");
                }
            } catch (err) {
                console.error("API Hatası:", err);
            }
        };

        fetchCountries();
    }, []);

    return (
        <CountryContext.Provider value={{ countries, selectedCountry, setSelectedCountry }}>
            {children}
        </CountryContext.Provider>
    );
};

export { CountryContext };