import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { CountryContext } from "../context/CountryContext";
import "../App.css";
import WeatherComponent from "./WeatherComponent";
import CountryComponent from "./CountryComponent";
import CityComponent from "./CityComponent";

function Container() {
    const { weather } = useContext(WeatherContext);
    const { countries } = useContext(CountryContext);
    
    return (
        <div>
        <CountryComponent />
        <CityComponent />
        <WeatherComponent />
        </div>
    );
    }

    export default Container;