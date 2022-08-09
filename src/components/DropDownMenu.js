import "./DropDownMenu.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DropDownLink from "./DropDownLink";


const DropDownMenu = (props)=>{
    const { locations } = props;
    return (
        //<BrowserRouter>
            <ul className="drop-down-menu">
                {/* <Routes> */}
                    {locations && locations.map((location)=> {
                        return <DropDownLink location={location}/>
                    })}
                {/* </Routes> */}
            </ul>
        // </BrowserRouter>
    );
}

export default DropDownMenu;