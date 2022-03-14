import './assets/styles/style.css';
import weatherDiv from './weatherDiv';

const content = document.getElementById('content');
const timeZoneDBKey = 'VCKXXXM1Y2IH'

const weatherContainer = weatherDiv('Mission Viejo', 'US', 'CA');

content.append(weatherContainer);





















