import "./Navbar.css";

const SearchForm = ()=>{

    return (
        <form id="location-search-form">
            <input type="text" placeholder="Search for a city." />
            <input type="submit" value="submit" />
        </form>
    );
}

export default SearchForm;