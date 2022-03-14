import { div, paragraph } from "./dom";

const weatherInfoDiv = (weatherInfoObj)=>{
    const wiDiv = div('weather-info', false);

    const createInfoDivs = (()=>{
        ['location-and-time', 'current-temp', 'condition', 'temp-high', 'temp-low'].forEach((name)=>{
            const infoPara = div(name, false);
            infoPara.append(paragraph(`${name}-text`, false,''));
            wiDiv.append(infoPara);
        });
    })();

    return wiDiv;
    
}

export default weatherInfoDiv;