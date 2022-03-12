import { div } from "./dom";
import weather from "./weather";
import weatherInfoDiv from "./weatherInfoDiv";
import weatherInfoObj from "./weatherInfoObj";


const weatherDiv = (city, country, state='')=>{
    const wDiv = div('weather', false);
    const weatherData = weather.dataForCity(city, country, state);
    const weatherObj = weatherInfoObj(weatherData);

    const weatherInfo = weatherInfoDiv();
    const weatherIcon = div('weather-icon', false);

    [weatherInfo, weatherIcon].forEach(div => wDiv.append(div));
    

    const _setWeatherInfo = async () =>{
        const json = await weatherData;

        // console.log(weather.getConditions(json));
        // console.log(weather.getTemp(json));
        // console.log(weather.getTimeOfRequest(json));
    };

    _setWeatherInfo();

    return wDiv;
}

export default weatherDiv;