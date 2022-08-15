import SearchForm from "./SearchForm";
import "./Navbar.css";

const Navbar = (props)=>{
    const { locations, handleChange, handleLocationClick, hideDropdown} = props;
    return (
        <nav id="navbar">
            <SearchForm locations={locations} handleChange = {handleChange} handleLocationClick = {handleLocationClick} hideDropdown={hideDropdown}/>
        </nav>
    );
}

export default Navbar;