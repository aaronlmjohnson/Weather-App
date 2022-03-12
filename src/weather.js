const weather = (()=>{
    const dataForCity = async (city, country, state='')=>{
        const units = 'imperial';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}${state ? ',US-'+state : state},${country}&units=${units}&APPID=ecb293383b7ae05cbf77b63954466b3c`;
        console.log(url);
        const response = await fetch(url, {mode: 'cors'});
        const weatherData = await response.json();
        return weatherData;
    }

    const getConditions =  (weatherData) => weatherData.weather[0].main;
    const getTemp = (weatherData) => weatherData.main;
    const getTimeOfRequest =  (weatherData) =>{
        const date = new Date(weatherData.dt * 1000);
        return date.toLocaleTimeString("en-US", {timeZoneName: "short"});
    }
    const getHighTemp = (weatherData)=> weatherData.main.temp_max;
    const getLowTemp = (weatherData)=> weatherData.main.temp_min;
    const getCurrentTemp = (weatherData)=> weatherData.main.temp;

    return {
        dataForCity,
        getConditions,
        getTemp,
        getTimeOfRequest,
        getHighTemp,
        getLowTemp,
        getCurrentTemp
    }
})();

export default weather;