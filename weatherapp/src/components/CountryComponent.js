import { useContext, useState } from 'react';
import { CountryContext } from '../context/CountryContext';
import '../App.css';

function CountryComponent() {
    const { countries, setCountries, selectedCountry, setSelectedCountry } = useContext(CountryContext);

    const handleChange = (e) => {
        setSelectedCountry(e.target.value);
        console.log(e.target.value);
    };

    return (
        <div className="Countries">
            <select name="country" 
            id="country" 
            value={selectedCountry} 
            onChange={handleChange}
            className='small-select'
            >
                <option value="">Select a country</option>
                {
                    countries.map((country, index) => (
                        <option key={index} value={country}>
                            {country}
                        </option>
                    ))
                }
            </select>
        </div>
    );
}

export default CountryComponent;
