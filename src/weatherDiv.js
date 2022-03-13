import { div } from "./dom";
import weatherInfoDiv from "./weatherInfoDiv";
import weatherInfoObj from "./weatherInfoObj";


const weatherDiv = (city, country, state='')=>{
    const wDiv = div('weather', false);

    const weatherInfo = weatherInfoDiv();
    const weatherIcon = div('weather-icon', false);

    [weatherInfo, weatherIcon].forEach(div => wDiv.append(div));
    
    const _addContentToWeatherInfo = async ()=>{
        const weatherData = await weatherInfoObj(city, country, state);

        for(let data in weatherData) {
            const textElement = document.querySelector(`.${data}-text`);
            let tempTypePrefix = '';

            if(data === 'temp-high' || data === 'temp-low') 
                tempTypePrefix = data === 'temp-high' ? 'High ' : 'Low ';
            textElement.append(tempTypePrefix + weatherData[data]);
        } 

        _addLocationToWeatherInfo();
    }

    const _addLocationToWeatherInfo = ()=>{
        const cityText= document.querySelector('.city-text').append(city);
        const stateText = document.querySelector('.state-text').append(state);
        const countryText = document.querySelector('.country-text').append(country);
    }

   

    _addContentToWeatherInfo();
    
    return wDiv;
}

export default weatherDiv;