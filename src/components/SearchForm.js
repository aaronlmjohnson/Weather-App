import DropDownMenu from "./DropDownMenu";
import "./Navbar.css";

const SearchForm = (props)=>{
    const { locations, handleChange } = props;
    return (
        <form id="location-search-form">
            <input type="text" placeholder="Search for a city."  onInput = {(e)=> handleChange(e)}/>
            <input type="submit" value="submit" />
            <DropDownMenu locations = {locations} />
        </form>   
    );
}

export default SearchForm;