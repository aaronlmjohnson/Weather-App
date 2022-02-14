import './assets/styles/style.css';

import { dropDownMenu, toggleMenu, getDropdownMenuButton} from './dropDownMenu';

const content = document.getElementById('content');

const mainMenu = dropDownMenu('main', ['Home', 'About', 'Buy', 'Sell', 'Contact Us']);
content.append(mainMenu);

getDropdownMenuButton('main').addEventListener('click', toggleMenu);

