import "./DropDownMenu.css";
import DropDownLink from "./DropDownLink";

const DropDownMenu = (props)=>{
    const { locations, loadWeatherData, hideDropdown } = props;
    return (
        <ul className={`drop-down-menu ${hideDropdown ? "hidden" : ''}`} >
            {locations && locations.map((location, i)=> {
                return <DropDownLink location={location} loadWeatherData={loadWeatherData} key={i}/> 
            })}
        </ul>
    );
}

export default DropDownMenu;