import { div } from "./dom";
import citySearchForm from "./citySearchForm";

const navBar = (()=>{
    const navDiv = div('navbar', true);
    const searchForm = citySearchForm();

    navDiv.append(searchForm.get());

    return navDiv;
})();

export default navBar;