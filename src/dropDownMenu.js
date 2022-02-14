import { div, a, button} from './dom';

export const dropDownMenu = (name, optionsArr)=>{
    
    const menu = div(name, true);
    const menuButton = button('menu-button', false, '☰');
    menu.classList.add('dropdown');
    menu.append(menuButton);
    _createOptions(optionsArr, menu);

    return menu;
};

const _createOptions = (optionsArr, menu)=>{
    optionsArr.forEach((option)=>{
        const optionElement = div(option, true);
        optionElement.classList.add('menu-item', 'hidden-menu-item');
       
        const link = a('dropdown-link', false, option, '#');
        optionElement.append(link);
        menu.append(optionElement);
    });
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

export const getDropdownMenuButton = (menuId)=>
    document.getElementById(menuId).getElementsByClassName('menu-button')[0];
