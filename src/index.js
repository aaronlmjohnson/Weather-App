import './assets/styles/style.css';

import { dropDownMenu} from './dropDownMenu';

const content = document.getElementById('content');

const mainMenu = dropDownMenu('game-guide-menu', ['Wiki', 'Beginners\' Guide', 'Skills', 'Combat'], 'Game Guide');
const accountMenu = dropDownMenu('account', ['Login', 'Sign-Up', 'Manage', 'Delete'], 'Account');
mainMenu.classList.add('rs3-dropdown-theme');
accountMenu.classList.add('rs3-dropdown-theme');
content.append(mainMenu);
content.append(accountMenu);



