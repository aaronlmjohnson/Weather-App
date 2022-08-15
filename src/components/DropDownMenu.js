import "./DropDownMenu.css";
import DropDownLink from "./DropDownLink";

const DropDownMenu = (props)=>{
    const { locations, currentAndFiveDay, hideDropdown } = props;
    return (
        <ul className={`drop-down-menu ${hideDropdown ? "hidden" : ''}`} >
            {locations && locations.map((location, i)=> {
                return <DropDownLink location={location} currentAndFiveDay={currentAndFiveDay} key={i}/> 
            })}
        </ul>
    );
}

export default DropDownMenu;