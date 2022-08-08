import "./DropDownMenu.css";

const DropDownMenu = (props)=>{
    const { locations } = props;
    console.log(locations);
    return (
        <ul className="drop-down-menu">
            {locations && locations.map((location)=> <li>{`${location.name}, ${location.state || ''}, ${location.country}`}</li>)}
        </ul>
    );
}

export default DropDownMenu;