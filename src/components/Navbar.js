import SearchForm from "./SearchForm";
import "./Navbar.css";

const Navbar = (props)=>{
    const { locations, handleChange} = props;
    return (
        <nav id="navbar">
            <SearchForm locations={locations} handleChange = {handleChange}/>
        </nav>
    );
}

export default Navbar;