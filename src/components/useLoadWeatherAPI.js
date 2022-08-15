import {useState } from 'react';
import Axios from 'axios';

const useLoadWeatherAPI = ()=>{
    const API_KEY = 'ecb293383b7ae05cbf77b63954466b3c';
    const [weatherData, setWeatherData] = useState([]);    

    const loadWeatherData = (lat, lon, call) =>{ //call can be current, hourly, daily, 5day, tenday !!daily and tenday require basic subscription to openweathermap.org
        const url = createURL(lat, lon, call)//`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
        Axios.get(url).then((response)=>setWeatherData((prevState)=>{
            return [...prevState, response.data];
        }));
    };

    const currentAndFiveDay = (lat, lon)=>{
        setWeatherData([]);
        loadWeatherData(lat, lon, "current");
        loadWeatherData(lat, lon, "fiveday");
    }

    const createURL = (lat, lon, call)=>{
        const prefix = "https://api.openweathermap.org/data/2.5/";
        let callType = "";

        if(call === "hourly" || call === "daily" || call === "tenday")
            callType = `forecast/${call === "hourly" ? "hourly?" : call === "daily" ? "daily?" : "tenday"}`;
        else if(call === "fiveday")
            callType = 'forecast/?';
        else callType = "weather?";

        const body = `${callType}lat=${lat}&lon=${lon}&units=imperial`;
        const suffix = `&units=imperial&appid=${API_KEY}`;

        return prefix + body + suffix; 
    }

    return {weatherData, currentAndFiveDay}
}

export default useLoadWeatherAPI;