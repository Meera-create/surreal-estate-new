import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const Properties = () => {

    const [properties, setProperties] = useState([])

    

        const fetchData = async () => {
            

        
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
        
        }
        
    useEffect(() => {
        fetchData();
})
    
    




    return (
        <div className="properties_page">
            
            
            <h1 className="title_page">List of Properties</h1>
            <h2>main page</h2>
            <div className='properties data'>
                

                {
                    properties.map((property,i) => (
                        <ul key={i}>
                            <li>Property:{property.title}</li>
                            <li>Type:{property.type}</li>
                            <li>City:{property.city}</li>
                            <li>Listed price:{property.price}</li>
                            <li>Bedrooms{property.bedrooms}</li>
                            <li>Bathrooms:{property.bathrooms}</li>
                            <li>Contact for more info:{property.email}</li>
                            
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

