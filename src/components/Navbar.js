import SearchForm from "./SearchForm";
import "./Navbar.css";

const Navbar = (props)=>{
    const { locations } = props;
    return (
        <nav id="navbar">
            <SearchForm locations={locations}/>
        </nav>
    );
}

export default Navbar;