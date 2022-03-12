import { div } from "./dom";

const weatherDiv = ()=>{
    const wDiv = div('weather', false);

    const weatherInfoDiv = div('weather-info', false);
    const weatherIcon = div('weather-icon', false);

    [weatherInfoDiv, weatherIcon].forEach(div => wDiv.append(div));

    return wDiv;
}

export default weatherDiv;