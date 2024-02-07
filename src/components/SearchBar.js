// import React, { useState } from "react";
// import { db } from "../firebase/firebase";
// import { collection, query,  where, getDocs } from 'firebase/firestore';

// const SearchBar = () => {

//     const [query, setQuery] = useState('');

//     const search = (event) => {
//         event.preventDefault();
//         setQuery(event.target.value);
//     }

//     const q = db.collection("properties").where("city", "=", "London");
//     const doc_refs = await getDocs(q)


//     return (
//         <div className="search-bar">
//             <h1>search bar</h1>
//             <label htmlFor="city">
//                 City search
//             </label>
//            <select
//                             id="city"
//                             name="city"
//                             value={query}
//                             onChange={search}
                            
//                         >
//                             <option value="Manchester">Manchester</option>
//                             <option value="Leeds">Leeds</option>
//                             <option value="Sheffield">Sheffield</option>
//                             <option value="Liverpool">Liverpool</option>
//                             <option value="London">London</option>
//                         </select>
//             </div>
//         )
// }

// export default SearchBar;