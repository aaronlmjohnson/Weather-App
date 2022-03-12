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
            textElement.append(weatherData[data]);
        }
    }

    _addContentToWeatherInfo();
    return wDiv;
}

export default weatherDiv;