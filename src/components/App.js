
import React from 'react';
 import NavBar from './Navbar';
import {Routes, Route} from 'react-router-dom'
import Properties from './Properties';
import AddProperty from './AddProperty';
import PropertyCard from './PropertyCard';



const App = () => {
  




  return (
    <div className="App">
      
    
      <NavBar />
        <Routes>
        <Route path="/" element={<Properties />} />
    
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/property-card" element={<PropertyCard />} />
        
        
        </Routes>
          
    </div>
  );
}

export default App;
