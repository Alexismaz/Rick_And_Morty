import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actionTypes";

export function addFav(personaje) {
    return {
        type: ADD_FAV,
        payload: personaje
    }
}
export function removeFav(id) {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}
export function filterCards(gender) {
    return {
        type: FILTER,
        payload: gender
    }
}
export function orderCards(a) { 
    return {
        type: ORDER,
        payload: a
    }
}