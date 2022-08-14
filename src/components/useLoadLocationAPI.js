import {useState } from 'react';
import Axios from 'axios';
import USStateCodes from './USStateCodes';

const useLoadLocationAPI = ()=>{
    const API_KEY = 'ecb293383b7ae05cbf77b63954466b3c';
    const [locationData, setLocationData] = useState([]);

    const loadLocationData = (query) =>{
        const url  = locationURLBuilder(parseLocationQuery(query));
        Axios.get(url).then((response)=>{setLocationData(response.data)});
    };

    const parseLocationQuery = (str)=>{
        const states = USStateCodes();
        const splitStr = str.split(/[,]+/); 
        const containsZipcode = splitStr.some((e)=> e.match(/^\d{5}$/));

        if(containsZipcode) 
            return {zipcode: splitStr.filter(e=> e.match(/^\d{5}$/))[0]}
        else if(splitStr.length === 1) return {city: splitStr[0]}
        else if(splitStr.length === 2 && states.includes(splitStr[1])) 
            return {city: splitStr[0], state: splitStr[1]};
        else if(splitStr.length === 2 && !states.includes(splitStr[1]))
            return {city: splitStr[0], country: splitStr[1]}
    }

    const locationURLBuilder = (locationObj)=>{
        const {zipcode } = locationObj;
        const prefix = `http://api.openweathermap.org/geo/1.0/${zipcode ? "/zip?zip=": "direct?q="}`
        const body = createURLBody(locationObj);
        const suffix = `&limit=${5}&appid=${API_KEY}`;
        return prefix + body + suffix ;
    }

    const createURLBody = (locationObj) =>{
        const {city, state, zipcode, country } = locationObj;

        return Object.keys(locationObj).map((key, i)=>{
            let  element = '';
            if(key === "state") element = `US-${locationObj[key]}`
            else  element = locationObj[key];

            return element ? `${i < 1 ? element : ','+element}` : '';
        }).join('');
    }

    return {locationData, loadLocationData, setLocationData}

}

export default useLoadLocationAPI;

