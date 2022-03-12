import './assets/styles/style.css';
import weather from './weather';
import weatherDiv from './weatherDiv';

const content = document.getElementById('content');

//const fayettevilleData = weather.dataForCity('Fayetteville', 'USA', 'AR');

const fayettevilleWeather = weatherDiv('Fayetteville', 'USA', 'AR');

//content.append(fayettevilleWeather);

// fayetteville.then((json) => { 
//     console.log(weather.getConditions(json));
// });

// fayetteville.then((json) =>{
//     console.log(weather.getTemp(json));
// });

// fayetteville.then((json) =>{
//     console.log(weather.getTimeOfRequest(json));
// });





















