import DropDownMenu from "./DropDownMenu";

const SearchForm = (props)=>{
    const { locations, handleChange, loadWeatherData,  hideDropdown } = props;
    return (
        <form id="location-search-form">
            <input id="location-search-bar" type="text" placeholder="Search for a city."  onInput = {(e)=> handleChange(e)}/>
            {/* <input type="submit" value="submit" /> */}
            <DropDownMenu locations = {locations} loadWeatherData={loadWeatherData} hideDropdown={hideDropdown} />
        </form>   
    );
}

export default SearchForm;