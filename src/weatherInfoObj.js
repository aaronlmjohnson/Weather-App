import weather from "./weather";

const weatherInfoObj = async (city, country, state)=> {
    const weatherJson = await weather.dataForCity(city, country, state);
    weather.getIcon(weatherJson);
    return {
        'time': weather.getTimeOfRequest(weatherJson),
        'currentTemp': weather.getCurrentTemp(weatherJson),
        'tempHigh': weather.getHighTemp(weatherJson),
        'tempLow': weather.getLowTemp(weatherJson),
        'condition': weather.getConditions(weatherJson),
        'iconUrl': `http://openweathermap.org/img/wn/${weather.getIcon(weatherJson)}@2x.png`
    }
}


export default weatherInfoObj;