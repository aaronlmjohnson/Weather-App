import SearchForm from "./SearchForm";
import "./Navbar.css";

const Navbar = (props)=>{
    const { locations, handleChange, loadWeatherData} = props;
    return (
        <nav id="navbar">
            <SearchForm locations={locations} handleChange = {handleChange} loadWeatherData={loadWeatherData}/>
        </nav>
    );
}

export default Navbar;