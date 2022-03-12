import weather from "./weather";

const weatherInfoObj = async (city, country, state)=> {
    const weatherJson = await weather.dataForCity(city, country, state);

    console.log(weatherJson);
    console.log(weatherJson.dt);//time
    console.log(weatherJson.main.temp);
    console.log(weatherJson.main.temp_max);
    console.log(weatherJson.main.temp_min);
    console.log(weatherJson.weather[0].main);

}

//'location-and-time', 'temperature', 'condition', 'high', 'low'

export default weatherInfoObj;