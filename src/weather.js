const weather = (()=>{
    let weatherObj;
    const dataForCity = async (city, country, state='')=>{ // put this in a module
        const units = 'imperial';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}${state ? ',US-'+state : state},${country}&units=${units}&APPID=ecb293383b7ae05cbf77b63954466b3c`;
        const response = await fetch(url, {mode: 'cors'});
        const weatherData = await response.json();
        return weatherData;
    }

    const getConditions =  (weatherData) => weatherData.weather[0];
    const getTemp = (weatherData) => weatherData.main;
    const getTimeOfRequest =  (weatherData) =>{
        const date = new Date(weatherData.dt * 1000);

        return date.toLocaleString("en-US", {timeZoneName: "short"});
    }

    return {
        dataForCity,
        getConditions,
        getTemp,
        getTimeOfRequest
    }
})();

export default weather;