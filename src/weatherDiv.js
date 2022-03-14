import { div, header } from "./dom";
import weatherIconDiv from "./weatherIconDiv";
import weatherInfoDiv from "./weatherInfoDiv";
import weatherInfoObj from "./weatherInfoObj";


const weatherDiv = (city, country, state='')=>{
    const wDiv = div('weather', false);
    const locationAndTime = div('location-and-time', false);
    locationAndTime.append(header(1, '', 'location-and-time-header', false));
    wDiv.append(locationAndTime);
    wDiv.append(weatherInfoDiv());
    
    
    const _addContentToWeatherInfo = async ()=>{
        const weatherData = await weatherInfoObj(city, country, state);

        document.querySelector('.current-temp-text').append(weatherData.currentTemp);
        document.querySelector('.condition-text').append(weatherData.condition);
        document.querySelector('.temp-high-text').append(`High ${weatherData.tempHigh}`);
        document.querySelector('.temp-low-text').append(`Low ${weatherData.tempLow}`);

        _addLocationAndTimeToWeatherInfo(weatherData.time);
        _addIconToWeatherInfo(weatherData.iconUrl);
    }

    const _addLocationAndTimeToWeatherInfo = (time)=>{
        const locationAndTime = `${city}, ${state === '' ? country : state} As of ${time}`;
        document.querySelector('.location-and-time-header').append(locationAndTime);
    }

    const _addIconToWeatherInfo = (url)=>{
        wDiv.append(weatherIconDiv(url));
    }

    _addContentToWeatherInfo();
    
    return wDiv;
}

export default weatherDiv;