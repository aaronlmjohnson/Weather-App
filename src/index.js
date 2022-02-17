import './assets/styles/style.css';

import { dropDownMenu} from './dropDownMenu';

const content = document.getElementById('content');

const mainMenu = dropDownMenu('main', ['Home', 'About', 'Buy', 'Sell', 'Contact Us'], '☰');
const accountMenu = dropDownMenu('account', ['Login', 'Sign-Up', 'Manage', 'Delete'], 'Account');
content.append(mainMenu);
content.append(accountMenu);



