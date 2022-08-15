const DropDownLink = (props)=>{
    const { location, handleLocationClick } = props;
    return (
        <li>
            <a href={`/`} onClick={(e)=> {
                e.preventDefault();
                handleLocationClick(location);
            }}>
                {`${location.name}, ${location.state || ''}, ${location.country}`}
            </a>
        </li>
    )
}

export default DropDownLink;