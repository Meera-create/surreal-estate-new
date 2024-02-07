import React, { useCallback, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import terraced from '../../src/images/house1.jpeg';
import semiDetached from '../../src/images/house2.jpg';
import detached from '../../src/images/house3.jpg';
import flat from '../../src/images/house4.jpg';
import cottage from '../../src/images/cottage.jpg';
import '../../src/styles/properties.scss';
import NavBar from './Navbar';
import endterrace from '../../src/images/endterrace.jpg';
import bungalow from '../../src/images/bungalow.jpg';

const Properties = () => {

    const [properties, setProperties] = useState([])

    

    const fetchData = useCallback(async () => {
            

       
        await getDocs(collection(db, "properties"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }))
                setProperties(newData);
                console.log(newData, properties, "properties")
            })
            .catch((error) => {
                console.log(error)
            })
        
    }, [properties]);
    
    // const catchedFn = useCallback(fetchData,properties)
        
    useEffect(() => {
        fetchData();
},[fetchData])
    
    




    return (
        <div className="properties-page">
            <NavBar/>
            
            
            <h1 className="title-page">List of Properties</h1>
           
            <div className='properties-data'>
                

                {
                    properties.map((property, i) => (
                        
                        <ul key={i}>
                            <li>
                                <h3>Property</h3>
                            </li>
                            <li>Property: {property.title}</li>
                            <li>Type: {property.type}</li>
                            <li>City: {property.city}</li>
                            <li>Listed price: {property.price}</li>
                            <li>Bedrooms: {property.bedrooms}</li>
                            <li>Bathrooms: {property.bathrooms}</li>
                            <li>Contact for more info: {property.email}</li>
                      
                            {property.type === 'detached' && <img src={detached} alt="detached house icon" />}
                            {property.type === 'semi-detached' && <img src={semiDetached} alt="semi detached house icon" />}
                            {property.type === 'end of terrace' && <img src={endterrace} alt="terraced house icon" />}
                            {property.type === 'flat' && <img src={flat} alt="flat icon" />}
                            {property.type === 'cottage' && <img src={cottage} alt="cottage icon" />}
                            {property.type === 'bungalow' && <img src={bungalow} alt="bungalow icon" />}
                            {property.type === 'terraced' && <img src={ terraced} alt="end terraced house icon" />}
                            
                        </ul>
                    ))
                }
            </div>


            <div className='property-content'>
            
           
      
            
            </div>
            </div>
    )
}


export default Properties;

