import { div, paragraph } from "./dom";

const weatherInfoDiv = ()=>{
    const wiDiv = div('weather-info', false);

    const createInfoDivs = (()=>{
        ['location-and-time', 'temperature', 'condition', 'high', 'low'].forEach((name)=>{
            const infoPara = paragraph(name, false,'');
            wiDiv.append(infoPara);
        });
    })();

    return wiDiv;
    
}

export default weatherInfoDiv;