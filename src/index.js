import './assets/styles/style.css';
import weather from './weather';
import weatherDiv from './weatherDiv';

const content = document.getElementById('content');

const fayettevilleWeather = weatherDiv('Fayetteville', 'USA', 'AR');

content.append(fayettevilleWeather);





















