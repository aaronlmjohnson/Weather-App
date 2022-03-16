import './assets/styles/style.css';
import weatherDiv from './weatherDiv';
import navBar from './navBar';
import { div } from './dom';

const content = document.getElementById('content');
const mainContent = div('main-content', true);

const weatherContainer = weatherDiv('Mission Viejo', 'US', 'CA');

mainContent.append(weatherContainer);

content.append(navBar);
content.append(mainContent);






















