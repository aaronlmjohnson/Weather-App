export const div = (name, unique)=> {
    const _element = document.createElement("div");
    _classOrId(_element, name, unique);

    return _element;
};

export const img = (name, unique, src)=> {
    const _element = document.createElement("img");
    _classOrId(_element, name, unique);
    _element.src = src;
    
    return _element;
};

export const paragraph = (name, unique, text)=>{
    const _element = document.createElement("p");

    _classOrId(_element, name, unique);
    _element.textContent = text;   
    return _element;
};

export const a = (name, unique, text, hypref) =>{
    const _element = document.createElement('a');
    _classOrId(_element, name, unique);
    _element.innerText = text;
    _element.href = hypref;
    
    return _element;
}

export const header = (level, value, ...[name, unique])=>{
    if(level < 1 || level > 6) throw 'invalid header level.';
    
    const _element = document.createElement(`h${level}`);
    _element.textContent = value;

    _classOrId(_element, name, unique);
    
    return _element;
}

export const form = ((action = "#", method = "#", name = "form")=>{ 
    const _element = document.createElement("form");
    _element.action = action;
    _element.method = method;
    _element.id = name;

    const addInput = (name, type, value="")=> {
        _element.append(formItem(name, type, value));
    }
    
    const get = ()=> _element;

    return {
        addInput,
        get
    };
});

export const button = (name, unique, value)=> {
    const _element = document.createElement("button");
    _element.type = 'button';
    _element.textContent = value;
    _classOrId(_element, name, unique);

    return _element;
};

const _classOrId = (element, name, unique)=>{
    if(unique) element.id = name;
    else element.classList.add(name);
}


const inputWithLabel = (input, label)=>{
    const _div = div("form-item", false);

    _div.append(label);
    _div.append(input);
    

    return _div;
};

 const formItem = (name, type, value = "")=>{
    //ternary expressions to add text inside buttons
    const _input = input(name, type, type == "button" ? value : "");
    const _label = label(_input, type != "button" ? value : "");

    return inputWithLabel(_input, _label);
}

const label = (inputElement, value ="")=>{
    const _element = document.createElement("label");
    _element.htmlFor = inputElement.name;
    _element.textContent = value;
    return _element
}

const isValidFormInput = (type)=>{
    const _validInputs = ["button","checkbox","color","date","datetime-local",
                            "email","file","hidden","image","month","number",
                            "password","radio","range","reset","search","submit",
                            "tel","text","time","url","week"];
    if(_validInputs.includes(type)) return true;
    else return false;
}

const input = (name, type, value="")=>{
    if(!isValidFormInput(type))
        throw 'invalid form input';
        
    const element = document.createElement("input");
    element.type = type;
    element.name = name;
    element.id = name;
    if(value) element.value = value;

    return element;
};
