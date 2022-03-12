import './assets/styles/style.css';
import weatherDiv from './weatherDiv';

const content = document.getElementById('content');

const fayettevilleWeather = weatherDiv('Fayetteville', 'USA', 'AR');

content.append(fayettevilleWeather);





















