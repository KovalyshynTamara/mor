import { useEffect, useState } from "react"
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Character() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [status, setStatus] = useState("");
    const [image, setImage] = useState("");
    const [type, setType] = useState("Unknown");
    const [origin, setOrigin] = useState("");
    const [gender, setGender] = useState("");

    const searchCharacter = async (id) => {
    try {
        const resp = await axios.get(`https://rickandmortyapi.com/api/character/${id}`) 
        const character = resp.data;
        setName(character.name);
        setSpecies(character.species);
        setStatus(character.status);
        setImage(character.image);
        setType(character.type);
        setOrigin(character.origin.name);
        setGender(character.gender);
    } catch (error) {
        console.error(error);
        alert("Failed to fetch character data. Please try again later.");
    }
}

    useEffect(() => {
        searchCharacter(id)
    }, [id])
    
    return (
        <section>
            <Link to={'/'} className="back">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="black"/>
                </svg>


                Go Back</Link>
            <div className="container1">
                <div className="character">
                    <img src={image} alt={name} />
                    <h1>{name}</h1>
                    <h2>Information</h2>
                    <div className="info">
                        <h3>Gender</h3>
                        <p>{gender}</p>
                        <h3>Status</h3>
                        <p>{status}</p>
                        <h3>Species</h3>
                        <p>{species}</p>
                        <h3>Origin</h3>
                        <p>{origin}</p>
                        <h3>Type</h3>
                        <p>{type}</p>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Character
