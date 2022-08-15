const DropDownLink = (props)=>{
    const { location, currentAndFiveDay } = props;
    return (
        <li>
            <a href={`/`} onClick={(e)=> {
                e.preventDefault();
                currentAndFiveDay(location.lat, location.lon);
            }}>
                {`${location.name}, ${location.state || ''}, ${location.country}`}
            </a>
        </li>
    )
}

export default DropDownLink;