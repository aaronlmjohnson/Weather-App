import weather from "./weather";
import timeZoneAPI from "./timezoneAPI";

const weatherInfoObj = async (city, country, state)=> {
    const weatherJson = await weather.dataForCity(city, country, state);
    const date = new Date((weatherJson.dt * 1000) + (weatherJson.timezone * 1000));

    const timeZoneData = await timeZoneAPI.getTimeZoneData(weatherJson.coord.lat, weatherJson.coord.lon);

    weather.getIcon(weatherJson);
    return {
        'time': weather.getTimeOfRequest(weatherJson, timeZoneData.zoneName),
        'currentTemp': weather.getCurrentTemp(weatherJson, 'F'),
        'tempHigh': weather.getHighTemp(weatherJson, 'F'),
        'tempLow': weather.getLowTemp(weatherJson, 'F'),
        'condition': weather.getConditions(weatherJson),
        'iconUrl': `http://openweathermap.org/img/wn/${weather.getIcon(weatherJson)}@2x.png`,
    }
}


export default weatherInfoObj;