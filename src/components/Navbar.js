import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../src/styles/navbar.scss';



const NavBar = () => {
    return (
        <div className="navbar_box">
         
            <nav className="navbar">
               
                    
                    
                        <NavLink to="/properties">VIEW PROPERTIES</NavLink>
                <NavLink to="/add-property">ADD A PROPERTY</NavLink>
               
                 
                    
              
            </nav>
        </div>
    )
};

export default NavBar;