import React from 'react';
import { NavLink } from 'react-router-dom';



const NavBar = () => {
    return (
        <div className="navbar_box">
         
            <nav className="navbar">
               
                    
                    
                        <NavLink to="/property-card">View Properties</NavLink>
                <NavLink to="/add-property">Add a property</NavLink>
               
                 
                    
              
            </nav>
        </div>
    )
};

export default NavBar;