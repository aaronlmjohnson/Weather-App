import { div, a, button} from './dom';

export const dropDownMenu = (name, optionsArr, icon)=>{
    
    const menu = div(name, true);
    const menuButton = button('menu-button', false, icon);
    menu.classList.add('dropdown');
    menu.append(menuButton);
    _createMenuItems(optionsArr, menu);

    menu.addEventListener('click', toggleMenu);

    return menu;
};

const _createMenuItems = (optionsArr, menu)=>{
    const menuItems = div('menu-items', false);
    optionsArr.forEach((option)=>{
        const optionElement = div(option, true);
        optionElement.classList.add('menu-item', 'hidden-menu-item');
       
        const link = a('dropdown-link', false, option, '#');
        optionElement.append(link);
        menuItems.append(optionElement);
    });
    menu.append(menuItems);
}

export const toggleMenu = (e)=>{
    
    const menu = e.target.parentElement;
    const menuItems = [...menu.getElementsByClassName('menu-item')];

    menuItems.forEach((menuItem)=>{
        if(menuItem.classList.contains('hidden-menu-item')){
            menuItem.classList.remove('hidden-menu-item');
            menuItem.classList.add('visible-menu-item');
        } else {
            menuItem.classList.remove('visible-menu-item');
            menuItem.classList.add('hidden-menu-item');  
        }
    });
}


