import { a, div } from "./dom"
import { dropDownMenu } from "./dropDownMenu";


export const navBar = (()=>{
    const nav = div('navbar', true);
    const navLinks = div('nav-links', false);
    nav.append(navLinks);
    const addLinks = (linkNames)=>
        linkNames.forEach((linkName)=> addLink(linkName));
    
    const get = ()=> nav;

    const addLink = (name)=>{
        const link = a('link', false, name, '#');
        const navLink = div('nav-link', false);
        navLink.append(link);

        navLinks.append(navLink);
    }

    const addElement = (newElement)=> nav.append(newElement);
    const addDropDownLink = (className, menuItems, icon) =>{
        const menu = dropDownMenu(className, menuItems, icon);
        navLinks.append(menu);
    }

    return {
        get,
        addLink,
        addLinks,
        addElement,
        addDropDownLink
    }

})();