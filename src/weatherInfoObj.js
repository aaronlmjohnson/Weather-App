import weather from "./weather";

const weatherInfoObj = async (city, country, state)=> {
    const weatherJson = await weather.dataForCity(city, country, state);
    weather.getIcon(weatherJson);
    return {
        'time': weather.getTimeOfRequest(weatherJson),
        'current-temp': weather.getCurrentTemp(weatherJson),
        'temp-high': weather.getHighTemp(weatherJson),
        'temp-low': weather.getLowTemp(weatherJson),
        'condition': weather.getConditions(weatherJson),
        'icon-url': `http://openweathermap.org/img/wn/${weather.getIcon(weatherJson)}@2x.png`
    }
}


export default weatherInfoObj;