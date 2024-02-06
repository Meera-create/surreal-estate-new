import React from "react";
import { Link } from 'react-router-dom';
import '../../src/styles/home.scss';
import lakehouse from '../../src/images/lakehouse.jpg';

const Home = () => {
    return (
        <div className="home-page">
            <img src={lakehouse} alt="background" />

            <div className="home">

            
            <h1>SURREAL ESTATE</h1>
            <h2>Estate agents</h2>
            <Link to="/properties">
                 <h3>ENTER</h3>
            </Link>
           
</div>
        </div>
    )
}

export default Home;