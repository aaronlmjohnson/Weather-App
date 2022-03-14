import { div, img } from "./dom";

const weatherIconDiv = (src)=>{
    const wiDiv = div('weather-icon-container', false);
    const icon = img('weather-icon', false, src);
    wiDiv.append(icon);

    return wiDiv;
}

export default weatherIconDiv;