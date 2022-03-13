import { div, img } from "./dom";

const weatherIconDiv = (src)=>{
    const wiDiv = div('weather-icon', false);
    const icon = img('weather-icon', false, src);
    wiDiv.append(icon);

    return wiDiv;
}

export default weatherIconDiv;