const weatherInfoObj = async (response)=> {
    const weatherJson = await response;

    console.log(weatherJson);
    console.log(weatherJson.dt);//time
    console.log(weatherJson.main.temp);
    console.log(weatherJson.main.temp_max);
    console.log(weatherJson.main.temp_min);
    console.log(weatherJson.weather[0].main);

}

//'location-and-time', 'temperature', 'condition', 'high', 'low'

export default weatherInfoObj;