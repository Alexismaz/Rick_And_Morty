import { ADD_FAV, REMOVE_FAV } from "./actionTypes";

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