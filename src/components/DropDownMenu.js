import "./DropDownMenu.css";

const DropDownMenu = (props)=>{
    const { locations } = props;
    return (
        <ul className="drop-down-menu">
            {locations.map((location)=> <li>{location}</li>)}
        </ul>
    );
}

export default DropDownMenu;