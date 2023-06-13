import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import "./nav.css"

export default function Nav(props) {

    return (
        <>
        <div className="Nav">
        <SearchBar props={props}/>
        </div>
        </>
    )
}