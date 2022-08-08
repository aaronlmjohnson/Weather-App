import DropDownMenu from "./DropDownMenu";
import "./Navbar.css";

const SearchForm = (props)=>{
    const { locations } = props;
    return (
        <form id="location-search-form">
            <input type="text" placeholder="Search for a city." />
            <input type="submit" value="submit" />
            <DropDownMenu locations = {locations} />
        </form>   
    );
}

export default SearchForm;