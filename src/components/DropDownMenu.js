import "./DropDownMenu.css";

const DropDownMenu = (props)=>{
    const { locations } = props;
    return (
        <ul className="drop-down-menu">
            {locations && locations.map((location)=> <li><a href="#">{`${location.name}, ${location.state || ''}, ${location.country}`}</a></li>)}
        </ul>
    );
}

export default DropDownMenu;