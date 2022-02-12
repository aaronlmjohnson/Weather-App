import { div, a} from './dom';

export const dropDownMenu = (name, optionsArr)=>{
    
    const menu = div(name, true);
    menu.classList.add('dropdown');
    _createOptions(optionsArr, menu);

    return menu;
};

const _createOptions = (optionsArr, menu)=>{
    optionsArr.forEach((option)=>{
        const optionElement = div(option, true);
        const link = a('dropdown-link', false, option, '#');
        optionElement.append(link);

        menu.append(optionElement);
    });
}