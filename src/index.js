import './assets/styles/style.css';
import weatherDiv from './weatherDiv';

const content = document.getElementById('content');

const fayettevilleWeather = weatherDiv('Fayetteville', 'US', 'AR');

content.append(fayettevilleWeather);





















