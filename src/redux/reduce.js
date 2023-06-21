import { ADD_FAV, REMOVE_FAV } from "./actionTypes"
const initialState = {
    myFavorites: []
}
export default function rootReducer(state = initialState, {type, payload}) {
    switch(type) {
        case ADD_FAV:
            return {...state,
                    myFavorites: [...state.myFavorites, payload]}
        case REMOVE_FAV:
            return {...state,
                myFavorites: state.myFavorites?.filter(Element => Element.id !== parseInt(payload))}
        default:
            return state
    }
}