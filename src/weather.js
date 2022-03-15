const weather = (()=>{
    

    const dataForCity = async (city, country, state='')=>{
        const units = 'imperial';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}${state ? ',US-'+state : state},${country}&units=${units}&APPID=ecb293383b7ae05cbf77b63954466b3c`;
        const response = await fetch(url, {mode: 'cors'});
        const weatherData = await response.json();
        return weatherData;
    }

    const getConditions =  (weatherData) => weatherData.weather[0].main;
    const getTemp = (weatherData) => weatherData.main;
    
    const getTimeOfRequest =   (weatherData, timeZoneName) =>{
        const date = new Date(weatherData.dt * 1000);
        return date.toLocaleString("en-US", {timeZoneName:'short', timeZone: timeZoneName}).split(',')[1];
    }

    const getHighTemp = (weatherData)=> Math.floor(weatherData.main.temp_max);
    const getLowTemp = (weatherData)=> Math.floor(weatherData.main.temp_min);
    const getCurrentTemp = (weatherData)=> Math.floor(weatherData.main.temp);
    const getIcon = (weatherData) => weatherData.weather[0].icon;
    
    return {
        dataForCity,
        getConditions,
        getTemp,
        getTimeOfRequest,
        getHighTemp,
        getLowTemp,
        getCurrentTemp,
        getIcon
    }
})();

export default weather;