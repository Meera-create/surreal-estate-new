import React,{useState} from "react";

const SearchBar = ({properties, setFiltered}) => {

    const [search, setSearch] = useState('');

    const searchHandler = (event) => {
        event.preventDefault();
        setSearch(event.target.value)

    }


     
    const searchItems = (event) => {
        setFiltered(properties.filter((property) => 
            properties.city.includes(search)
        ))
    }
 
 
    return (
        <div className="search-bar">
            <h1>Refine your search</h1>
            
        <div className="search-by-city">
       <label htmlFor="city">Search City </label>
                        <select
                            id="city"
                            name="city"
                            value={search}
                            onChange={searchHandler}
                            
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
                    onSubmit={(e) => { searchItems(e) }}
                >
                    SEARCH
                </button>
            </div>







        </div>
    )
};


export default SearchBar;