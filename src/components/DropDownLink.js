const DropDownLink = (props)=>{
    const { location } = props;
    return (
        <li>
            <a href={`/place`}>
                {`${location.name}, ${location.state || ''}, ${location.country}`}
            </a>
        </li>
    )
}

export default DropDownLink;