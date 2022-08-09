import "./DropDownMenu.css";
import DropDownLink from "./DropDownLink";

const DropDownMenu = (props)=>{
    const { locations } = props;
    return (
        <ul className="drop-down-menu">
            {locations && locations.map((location)=> {
                return <DropDownLink location={location}/> 
            })}
        </ul>
    );
}

export default DropDownMenu;