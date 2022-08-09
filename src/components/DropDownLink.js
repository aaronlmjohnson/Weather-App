
const DropDownLink = (props)=>{
    const { location } = props;
    return (
        <li>
            <a href="#">
                {`${location.name}, ${location.state || ''}, ${location.country}`}
            </a>
        </li>
    )
}

export default DropDownLink;