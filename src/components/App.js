
import React,{useState} from 'react';

import {Routes, Route} from 'react-router-dom'
import Properties from './Properties';
import AddProperty from './AddProperty';
import Home from './Home';





const App = () => {
  
  const [properties, setProperties] = useState([]);
  const [filtered, setFiltered] = useState([]);



  return (
    <div className="App">
      
    
      
        <Routes>
        <Route path="/" element={<Home />} />
    
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/properties" element={<Properties properties={properties} setProperties={setProperties}
            filtere={filtered}  setFiltered={setFiltered}
        />} />
        
        
        
        
        </Routes>
          
    </div>
  );
}

export default App;
