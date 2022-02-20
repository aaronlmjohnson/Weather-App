import { a, div } from "./dom"


export const navBar = (()=>{
    const element = div('navbar', true);

    const addLinks = (linkNames)=>
        linkNames.forEach((linkName)=> addLink(linkName));

    const _addDefaultStyling = ()=>{
        element.style.display = 'flex';
        element.style.gap = '5px';
        element.style.justifyContent = 'space-around';
        element.style.background = 'black';
        element.style.fontSize = '24px';
        element.style.alignItems = 'center';

    }

    _addDefaultStyling();
    
    const get = ()=> element;

    const addLink = (name)=>{
        const link = a('link', false, name, '#');
        const navLink = div('nav-link', false);
        navLink.append(link);

        element.append(navLink);
    }

    const addElement = (newElement)=> element.append(newElement)

    return {
        get,
        addLink,
        addLinks,
        addElement
    }

})();