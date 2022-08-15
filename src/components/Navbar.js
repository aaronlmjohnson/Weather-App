import SearchForm from "./SearchForm";
import "./Navbar.css";

const Navbar = (props)=>{
    const { locations, handleChange, currentAndFiveDay, hideDropdown} = props;
    return (
        <nav id="navbar">
            <SearchForm locations={locations} handleChange = {handleChange} currentAndFiveDay={currentAndFiveDay} hideDropdown={hideDropdown}/>
        </nav>
    );
}

export default Navbar;