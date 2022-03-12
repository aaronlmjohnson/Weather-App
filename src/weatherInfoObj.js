import weather from "./weather";

const weatherInfoObj = async (city, country, state)=> {
    const weatherJson = await weather.dataForCity(city, country, state);

    return {
        'time': weather.getTimeOfRequest(weatherJson),
        'current_temp': weather.getCurrentTemp(weatherJson),
        'temp_high': weather.getHighTemp(weatherJson),
        'temp_low': weather.getLowTemp(weatherJson),
        'condition': weather.getConditions(weatherJson)
    }
}


export default weatherInfoObj;