import {useState } from 'react';
import Axios from 'axios';

const useLoadLocationAPI = ()=>{
    const API_KEY = 'ecb293383b7ae05cbf77b63954466b3c'; // move to environment variable

    const [location, setLocation] = useState([]);

    const getLocationData = (city, country, state) =>{
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city || ''}${state ? ',US-'+state : state},${country || ''}&limit=${1}&appid=${API_KEY}`

        Axios.get(url).then((response)=>{
            setLocation(response.data);
        });

        console.log(location);
    };

    return {location, getLocationData}

}

export default useLoadLocationAPI;