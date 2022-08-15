import "./DropDownMenu.css";
import DropDownLink from "./DropDownLink";

const DropDownMenu = (props)=>{
    const { locations, handleLocationClick, hideDropdown } = props;
    return (
        <ul className={`drop-down-menu ${hideDropdown ? "hidden" : ''}`} >
            {locations && locations.map((location, i)=> {
                return <DropDownLink location={location} handleLocationClick = {handleLocationClick} key={i}/> 
            })}
        </ul>
    );
}

export default DropDownMenu;