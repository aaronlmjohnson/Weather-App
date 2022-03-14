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

        // wiDiv.append(div('current-temp', false).append(paragraph('current-temp', false, '')));
        // ['current-temp', 'condition', 'temp-high', 'temp-low'].forEach((name)=>{
        //     const infoPara = div(name, false);
        //     infoPara.append(paragraph(`${name}-text`, false,''));
        //     wiDiv.append(infoPara);
        // });
    })();

    return wiDiv;
    
}

export default weatherInfoDiv;