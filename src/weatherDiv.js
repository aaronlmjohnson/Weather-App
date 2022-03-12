import { div } from "./dom";
import weather from "./weather";

const weatherDiv = (city, country, state='')=>{
    const wDiv = div('weather', false);
    const weatherData = weather.dataForCity(city, country, state);

    const weatherInfoDiv = div('weather-info', false);
    const weatherIcon = div('weather-icon', false);

    [weatherInfoDiv, weatherIcon].forEach(div => wDiv.append(div));
    

    const _setWeatherInfo = async () =>{
        const json = await weatherData;

        console.log(weather.getConditions(json));
        console.log(weather.getTemp(json));
        console.log(weather.getTimeOfRequest(json));
    };

    _setWeatherInfo();

    return wDiv;
}

export default weatherDiv;