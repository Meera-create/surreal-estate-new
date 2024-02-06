import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import React,{useState} from "react";

const AddProperty = () => {



    const [city, setCity] = useState('');
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0);
    const [bathrooms, setBathrooms] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [type, setType] = useState('');
    const[email,setEmail] = useState('')

    const titleChange = (event) => {
        event.preventDefault()
        setTitle(event.target.value);
        console.log('title')
        
    }

    const cityChange = (event) => {
        event.preventDefault()
        setCity(event.target.value);
        console.log('city')

    }

    const priceChange = (event) => {
        setPrice(event.target.value)
        console.log('price')
    }

    const bathroomChange = (event) => {
        setBathrooms(event.target.value)
        console.log('bathrooms')
    }

     const bedroomChange = (event) => {
         setBedrooms(event.target.value)
         console.log('bedrooms')
    }
    

    const typeChange = (event) => {
        setType(event.target.value)
        console.log('type')
    }

    const emailChange = (event) => {
        setEmail(event.target.value);
        console.log('email')
    }

    const submitForm =  async (event) => {
        event.preventDefault();
        console.log('form submit')

     
                    try {
            const docRef = await addDoc(collection(db, "properties"), {
                type:type,
                city: city,
                title: title,
                bathrooms: bathrooms,
                bedrooms: bedrooms,
                email: email,
                price:price
                
            })
        
            console.log("doc with ID", docRef.id)
                        console.log('success')
                
       

        } catch (error) {
            console.log(error)
        };
     
        
    }

 
        return (
            <div>
                <h1>add property</h1>

          
                <form className="adding-properties-form" onSubmit={submitForm} >
                    
     
                    <div className="title">ADD A PROPERTY</div>

                    <div id="boxes">
                        <label htmlFor="title">Title of Property</label>
                        <input
                            placeholder="2 bedroom house"
                            id="title"
                            name="title"
                            value={title}
                            onChange={titleChange}
                        />
                    </div>

                    <div id="boxes">
                        <label htmlFor="city">City </label>
                        <select
                            id="city"
                            name="city"
                            value={city}
                            onChange={cityChange}
                        >
                            <option value="Manchester">Manchester</option>
                            <option value="Leeds">Leeds</option>
                            <option value="Sheffield">Sheffield</option>
                            <option value="Liverpool">Liverpool</option>
                            <option value="London">London</option>
                        </select>
                    </div>

                    <div id="boxes">
                        <label htmlFor="type">Type of Property</label>
                        <select
                            id="type"
                            name="type"
                            value={type}
                            onChange={typeChange}
                        >
                            <option value="flat">Flat</option>
                            <option value="detached">Detached</option>
                            <option value="semi-detached">Semi-Detached</option>
                            <option value="terraced">Terraced</option>
                            <option value="end of terrace">End of Terrace</option>
                            <option value="cottage">Cottage</option>
                            <option value="bungalow">Bungalow</option>
                        </select>
                    </div>

                    <div id="boxes">
                        <label htmlFor="bedrooms"></label>
                        Number of Bedrooms
                        <input
                            id="bedrooms"
                            placeholder="2"
                            name="bedrooms"
                            value={bedrooms}
                            onChange={bedroomChange}
                        />
                    </div>

                    <div id="boxes">
                        <label htmlFor="bathrooms">Number of bathrooms</label>
                        <input
                            id="bathrooms"
                            placeholder="1"
                            name="bathrooms"
                            value={bathrooms}
                            onChange={bathroomChange}
                        />
                    </div>

                    <div id="boxes">
                        <label htmlFor="price">Price</label>
                        <input
                            id="price"
                            placeholder="10000"
                            name="price"
                            value={price}
                            onChange={priceChange}
                        />
                    </div>

                    <div id="boxes">
                        <label htmlFor="email">Email address</label>
                        <input
                            id="email"
                            placeholder="email@gmail.com"
                            name="email"
                            value={email}
                            onChange={emailChange}
                        />
                    </div> 

                    <button type="submit" >Add</button>
                </form>
            </div>
        );
        
    }



export default AddProperty;
