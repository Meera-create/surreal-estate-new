import React from "react";

const SearchBar = ({query,setQuery}) => {


    const queryHandler = (event) => {
        event.preventDefault();
        setQuery(event.target.value)
    };
    
 
 
 
    return (
        <div className="search-bar">
            <h1>Refine your search</h1>
            
        <div className="search-by-city">
       <label htmlFor="city">Search City </label>
                        <select
                            id="city"
                            name="city"
                            value={query}
                            onChange={queryHandler}
                            
                        >
                            <option value="Manchester">Manchester</option>
                            <option value="Leeds">Leeds</option>
                            <option value="Sheffield">Sheffield</option>
                            <option value="Liverpool">Liverpool</option>
                            <option value="London">London</option>
                        </select>
            </div>
            
            
            <div className="search button">
                <button
                    type="button"
                
                >
                    SEARCH
                </button>
            </div>







        </div>
    )
};


export default SearchBar;