
import React from 'react';

import {Routes, Route} from 'react-router-dom'
import Properties from './Properties';
import AddProperty from './AddProperty';
import Home from './Home';




const App = () => {
  




  return (
    <div className="App">
      
    
      
        <Routes>
        <Route path="/" element={<Home />} />
    
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/properties" element={<Properties />} />
        
        
        </Routes>
          
    </div>
  );
}

export default App;
