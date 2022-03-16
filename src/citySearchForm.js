import { form } from "./dom";

const citySearchForm = ()=>{
    const searchForm = form('#', 'get', 'city-search');
    searchForm.addInput('search', 'search');

    const get = ()=> searchForm.get();

    return {
        get
    }
};

export default citySearchForm;