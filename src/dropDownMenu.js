import { div, a, button} from './dom';

export const dropDownMenu = (name, optionsArr, icon)=>{
    
    const menu = div(name, true);
    const menuButton = button('menu-button', false, icon);
    menu.classList.add('dropdown');
    menu.append(menuButton);
    _createMenuItems(optionsArr, menu);

    menuButton.addEventListener('mouseenter', openMenu); //instead of toggleMenu make open menu and close menu
    menu.addEventListener('mouseleave', closeMenu);

    return menu;
};

const _createMenuItems = (optionsArr, menu)=>{
    const menuItems = div('menu-items', false);
    menuItems.classList.add('hidden-menu-items');
    
    optionsArr.forEach((option)=>{
        const optionElement = div('menu-item', false);

        const link = a('dropdown-link', false, option, '#');
        optionElement.append(link);
        menuItems.append(optionElement);
    });
    menu.append(menuItems);
}

export const openMenu = (e)=>{
    
    const menu = e.target.parentElement;
    const menuItems = menu.getElementsByClassName('hidden-menu-items')[0];

    menuItems.classList.remove('hidden-menu-items');
    menuItems.classList.add('visible-menu-items');
    
}

export const closeMenu = (e)=>{
    const menu = e.target.parentElement;
    const menuItems = menu.getElementsByClassName('visible-menu-items')[0];

    menuItems.classList.remove('visible-menu-items');
    menuItems.classList.add('hidden-menu-items');
}


