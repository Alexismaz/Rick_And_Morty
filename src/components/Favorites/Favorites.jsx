import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Cards from "../Cards/Cards"
import { filterCards, orderCards } from "../../redux/actions";
import "./Favorites.css"

function Favorites({myFavorites, onClose}) {
    const [aux, setAux] = useState(false)
    const dispatch = useDispatch()
    const handleOrder = (e) => {
        if(aux === true) {
            setAux(false)
        } else {
            setAux(true)
        }
        dispatch(orderCards(e.target.value))
    }
    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }
    return (
        <><div className="fondoFavorites">
            <select onChange={handleOrder} name="favFilter" id="favFilter">
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
           
            </select>
            <select onChange={handleFilter} name="orderFilter" id="orderFilter">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
            <option value="All">All</option>
            </select>
        </div>
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
