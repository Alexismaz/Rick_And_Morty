import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./Detail.css"
import atrasDetail from "../../Images/atrasDetail.png"

export default function Detail() {
    const { id }= useParams()
    const [character, setCharacter] = useState({})
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
            setCharacter(data);
            } else {
            window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);
    return (
        <>
            <div className="container" >
                <div className="text">
                <Link to={"/home"}>
                <img className="buttonDetail" src={atrasDetail} alt="" />
                </Link>
                    <h1>{character.name}</h1>
                    <h2>status: {character.status}</h2>
                    <h2>species: {character.species}</h2>
                    <h2>gender: {character.gender}</h2>
                    <h2>origin: {character.origin?.name}</h2>
                    </div>  
                <div className="divImg">
                    <img className="img" src={character.image} alt={character.name}/>
                </div>  
            </div>
        </>
    )
}