import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import "./nav.css"
import { Link } from "react-router-dom"

export default function Nav(props) {

    return (
        <>
        <div style={{backgroundColor: "RGB(39 129 125)"}}>
        <div className="Nav">
            <div className="imgNavContainer">
            </div>
            <div className="buttonContainer">
            <Link className="linkNav" to="/">
            <button className="buttonNav">LogOut</button>
            </Link>
            <Link className="linkNav" to="/home">
            <button className="buttonNav">Home</button>
            </Link>
            <Link className="linkNav" to="/About">
            <button className="buttonNav">About</button>
            </Link>
            </div>
        <SearchBar props={props}/>
        </div>
        </div>
        </>
    )
}