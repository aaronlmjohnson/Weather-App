import './assets/styles/style.css';
import weatherDiv from './weatherDiv';

const content = document.getElementById('content');

const weatherContainer = weatherDiv('Fayetteville', 'US', 'AR');

content.append(weatherContainer);





















