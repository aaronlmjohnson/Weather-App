import {useState } from 'react';
import Axios from 'axios';

const useLoadWeatherAPI = ()=>{
    const API_KEY = 'ecb293383b7ae05cbf77b63954466b3c';
    const [weatherData, setWeatherData] = useState([]);    

    const loadWeatherData = (lat, lon) =>{
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
        Axios.get(url).then((response)=>setWeatherData(response.data));    
    };

    return {weatherData, loadWeatherData}

}

export default useLoadWeatherAPI;