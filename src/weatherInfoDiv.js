import { div, paragraph } from "./dom";

const weatherInfoDiv = (weatherInfoObj)=>{
    const wiDiv = div('weather-info', false);

    const createInfoDivs = (()=>{
        const currentTemp = div('current-temp', false);
        currentTemp.append(paragraph('current-temp-text', false, ''));

        const condition = div('condition', false);
        condition.append(paragraph('condition-text', false, ''));

        const highLow = div('high-low', false);

        highLow.append(paragraph('temp-high-text', false, ''));
        highLow.append(paragraph('temp-low-text', false, ''));
        [currentTemp, condition, highLow].forEach((_div)=> wiDiv.append(_div));
    })();

    return wiDiv;
    
}

export default weatherInfoDiv;