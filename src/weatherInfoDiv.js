import { div, paragraph } from "./dom";

const weatherInfoDiv = (weatherInfoObj)=>{
    const wiDiv = div('weather-info', false);

    const createInfoDivs = (()=>{
        ['location-and-time', 'temperature', 'condition', 'high', 'low'].forEach((name)=>{
            const infoPara = div(name, false);
            infoPara.append(paragraph('', false,''));
            wiDiv.append(infoPara);
        });
    })();

    return wiDiv;
    
}

export default weatherInfoDiv;