const DropDownLink = (props)=>{
    const { location, loadWeatherData } = props;
    return (
        <li>
            <a href={`/${location.name}`} onClick={(e)=> {
                e.preventDefault();
                loadWeatherData(location.lat, location.lon);
            }}>
                {`${location.name}, ${location.state || ''}, ${location.country}`}
            </a>
        </li>
    )
}

export default DropDownLink;