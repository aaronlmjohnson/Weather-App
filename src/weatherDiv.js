import { div } from "./dom";
//import weather from "./weather";
import weatherInfoDiv from "./weatherInfoDiv";
import weatherInfoObj from "./weatherInfoObj";


const weatherDiv = (city, country, state='')=>{
    const wDiv = div('weather', false);

    weatherInfoObj(city, country, state).then((data=>{
        console.log(data);
    }));

    const weatherInfo = weatherInfoDiv();
    const weatherIcon = div('weather-icon', false);

    [weatherInfo, weatherIcon].forEach(div => wDiv.append(div));
    


    return wDiv;
}

export default weatherDiv;