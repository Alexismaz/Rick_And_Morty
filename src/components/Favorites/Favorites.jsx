import React from "react";
import { connect } from "react-redux";
import Cards from "../Cards/Cards"

function Favorites({myFavorites, onClose}) {
    return (
        <>
        <Cards characters={myFavorites} onClose={onClose}></Cards>
        </>
    )
}
function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProps, null)(Favorites)
