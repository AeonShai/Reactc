import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { CountryContext } from "./CountryContext";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const { selectedCountry } = useContext(CountryContext);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  useEffect(() => {
    const fetchCities = async () => {
      // selectedCountry kontrolü
      console.log("Selected Country:", selectedCountry);

      if (selectedCountry) {
        try {
          const response = await axios.post("https://countriesnow.space/api/v0.1/countries/cities", {
            country: selectedCountry, // Doğru yapı
          }, {
            headers: {
              "Content-Type": "application/json",
            },
          });

          console.log("API Response:", response.data); // API yanıtını konsola yazdır

          // API yanıtından şehirleri ayıklayın
          setCities(response.data.data); // response.data.data'dan şehirleri alın
        } catch (error) {
          console.error("Şehir verileri alınamadı:", error);
        }
      } else {
        console.log("No country selected.");
      }
    };

    fetchCities();
  }, [selectedCountry]); // selectedCountry değiştiğinde bu useEffect tetiklenir
   return (
    <CityContext.Provider value={{ cities, selectedCity, setSelectedCity }}>
      {children}
    </CityContext.Provider>
  );
}
  
export { CityContext };
