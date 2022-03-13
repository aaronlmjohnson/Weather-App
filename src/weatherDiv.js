import { div } from "./dom";
import weatherIconDiv from "./weatherIconDiv";
import weatherInfoDiv from "./weatherInfoDiv";
import weatherInfoObj from "./weatherInfoObj";


const weatherDiv = (city, country, state='')=>{
    const wDiv = div('weather', false);
    wDiv.append(weatherInfoDiv());
    
    const _addContentToWeatherInfo = async ()=>{
        const weatherData = await weatherInfoObj(city, country, state);

        for(let data in weatherData) {
            if(data === 'icon-url'){
                _addIconToWeatherInfo(weatherData[data]);
                continue;
            } 

            const textElement = document.querySelector(`.${data}-text`);

            //for dealing with temp highs and lows
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

    const _addIconToWeatherInfo = (url)=>{
        wDiv.append(weatherIconDiv(url));
    }


   

    _addContentToWeatherInfo();
    
    return wDiv;
}

export default weatherDiv;