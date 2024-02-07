import React,{useState} from "react";

const SearchBar = () => {

    //city filter
    const [searchCity, setSearchCity] = useState('');

    const cities = [
        { name: "London" },
        { name: "Manchester" },
        { name: "Leeds" },
        { name: "Sheffield" },
        {name:"Liverpool"}
    ]

    const cityHandler = (event) => {
        event.preventDefault();
        setSearchCity(event.target.value)
    };
    
    if (searchCity.length > 0) {
        cities.filter((city) => {
            return city.name.match(searchCity)
        })
    };

    //price filter

    // const [price, setPrice] = useState('');


  
    // const priceHandler = (event) => {
    //     event.preventDefault();
    //     setPrice(event.target.value)
    // };

    // if (price > 0 && price < 250000) {
    //     return price.valueOf < 250000;
    // }

    //     if (price > 250000 && price < 500000) {
    //     return price.valueOf < 50000 && price.valueOf > 250000;
    // }
    
 


    return (
        <div className="search-bar">
            <h1>Refine your search</h1>
            
        <div className="search-by-city">
       <label htmlFor="city">Search City </label>
                        <select
                            id="city"
                            name="city"
                            value={searchCity}
                            onChange={cityHandler}
                            
                        >
                            <option value="Manchester">Manchester</option>
                            <option value="Leeds">Leeds</option>
                            <option value="Sheffield">Sheffield</option>
                            <option value="Liverpool">Liverpool</option>
                            <option value="London">London</option>
                        </select>
            </div>
            
               {/* <div className="search-by-price">
       <label htmlFor="city">Search City </label>
                        <select
                            id="price"
                            name="price"
                            value={price}
                            onChange={priceHandler}
                            
                        >
                            <option value="<£250,000">£250,000</option>
                            <option value="£250,000-£500,000">£250,000-£500,000</option>
                            <option value="£510,000-£750,000">£500,000-£750,000</option>
                            <option value="£760,000-£1,000,000">£750,000-£1,000,000</option>
                    <option value="£1,100,000-£1,500,000">£1,100,000-£1,500,000</option>
                     <option value="£1,600,000-£2,000,000">£1,600,000-£2,000,000</option>
                    
                        </select>
            </div>
             */}

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