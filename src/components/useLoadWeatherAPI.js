import {useState, useEffect } from 'react';
import Axios from 'axios';

const useLoadWeatherAPI = ()=>{
    const API_KEY = 'ecb293383b7ae05cbf77b63954466b3c'; // move to environment variable

    const [weatherData, setWeatherData] = useState([]);
    const [location, setLocation] = useState([]);

    const getLocation = (city, country, state) =>{
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city || ''}${state ? ',US-'+state : state},${country || ''}&limit=${1}&appid=${API_KEY}`
        console.log(url)
        Axios.get(url).then((response)=>{
            setLocation(response.data);
        });
    };

    const getWeather = (city, country, state) => {
       const {lat, lon} = getLocation(city, country, state)[0];
       console.log(lat, lon);
    }

    return {weatherData, getWeather}

}

export default useLoadWeatherAPI;