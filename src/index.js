import './assets/styles/style.css';
import weather from './weather';

// const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Fayetteville,US-AR&APPID=ecb293383b7ae05cbf77b63954466b3c';



// const getWeatherDataByCity = async (city, country, state='')=>{ // put this in a module
//     const units = 'imperial';
//     const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}${state ? ',US-'+state : state},${country}&units=${units}&APPID=ecb293383b7ae05cbf77b63954466b3c`;
//     const response = await fetch(url, {mode: 'cors'});
//     const weatherData = await response.json();
//     console.log(weatherData);

// }
const content = document.getElementById('content');

const fayetteville = weather.dataForCity('Fayetteville', 'USA', 'AR');

fayetteville.then((json) => { 
    console.log(weather.getConditions(json));
});

fayetteville.then((json) =>{
    console.log(weather.getTemp(json));
});

fayetteville.then((json) =>{
    console.log(weather.getTimeOfRequest(json));
});





















