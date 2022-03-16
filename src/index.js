import './assets/styles/style.css';
import weatherDiv from './weatherDiv';
import navBar from './navBar';

const content = document.getElementById('content');

//const weatherContainer = weatherDiv('Mission Viejo', 'US', 'CA');
const weatherContainer2 = weatherDiv('London', 'UK', '');

content.append(navBar);
content.append(weatherContainer2);





















