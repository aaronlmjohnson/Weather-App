import "./DropDownMenu.css";
import DropDownLink from "./DropDownLink";

const DropDownMenu = (props)=>{
    const { locations, loadWeatherData } = props;
    return (
        <ul className="drop-down-menu">
            {locations && locations.map((location, i)=> {
                return <DropDownLink location={location} loadWeatherData={loadWeatherData} key={i}/> 
            })}
        </ul>
    );
}

export default DropDownMenu;