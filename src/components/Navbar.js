import SearchForm from "./SearchForm";
import "./Navbar.css";

const Navbar = (props)=>{
    const { locations, handleChange, loadWeatherData, hideDropdown} = props;
    return (
        <nav id="navbar">
            <SearchForm locations={locations} handleChange = {handleChange} loadWeatherData={loadWeatherData} hideDropdown={hideDropdown}/>
        </nav>
    );
}

export default Navbar;