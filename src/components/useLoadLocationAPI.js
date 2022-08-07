import {useState } from 'react';
import Axios from 'axios';

const useLoadLocationAPI = ()=>{
    const API_KEY = 'ecb293383b7ae05cbf77b63954466b3c';
    const [locationData, setLocation] = useState([]);

    const loadLocationData = (city, country, state) =>{
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city || ''}${state ? ',US-'+state : ''},${country || ''}&limit=${5}&appid=${API_KEY}`
        Axios.get(url).then((response)=>setLocation(response.data));
    };

    return {locationData, loadLocationData}

}

export default useLoadLocationAPI;