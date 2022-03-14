import { div } from "./dom";
import weatherIconDiv from "./weatherIconDiv";
import weatherInfoDiv from "./weatherInfoDiv";
import weatherInfoObj from "./weatherInfoObj";


const weatherDiv = (city, country, state='')=>{
    const wDiv = div('weather', false);
    const locationAndTime = div('location-and-time', false);
    wDiv.append(weatherInfoDiv());
    
    const _addContentToWeatherInfo = async ()=>{
        const weatherData = await weatherInfoObj(city, country, state);
        console.log(weatherData.time)
        
        document.querySelector('.current-temp-text').append(weatherData.currentTemp);
        document.querySelector('.condition-text').append(weatherData.condition);
        document.querySelector('.temp-high-text').append(`High ${weatherData.tempHigh}`);
        document.querySelector('.temp-low-text').append(`Low ${weatherData.tempLow}`);

        _addLocationToWeatherInfo();
    }

    const _addLocationToWeatherInfo = ()=>{
        const location = `${city}, ${state === '' ? country : state}`
        document.querySelector('.location-text').append(location);
    }

    const _addIconToWeatherInfo = (url)=>{
        wDiv.append(weatherIconDiv(url));
    }

    _addContentToWeatherInfo();
    
    return wDiv;
}

export default weatherDiv;