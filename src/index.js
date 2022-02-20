import './assets/styles/style.css';

import { dropDownMenu} from './dropDownMenu';
import { navBar } from './navBar';

const content = document.getElementById('content');
navBar.addLinks(['Home', 'Account', 'Contact Us', 'Game Guide Menu']);
const mainMenu = dropDownMenu('game-guide-menu', ['Wiki', 'Beginners\' Guide', 'Skills', 'Combat'], 'Game Guide');
mainMenu.classList.add('rs3-dropdown-theme');
navBar.addElement(mainMenu);

// const accountMenu = dropDownMenu('account', ['Login', 'Sign-Up', 'Manage', 'Delete'], 'Account');



// accountMenu.classList.add('rs3-dropdown-theme');


// content.append(mainMenu);
// content.append(accountMenu);
content.append(navBar.get());



