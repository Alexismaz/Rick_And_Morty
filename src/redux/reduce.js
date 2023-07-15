import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./actionTypes"
const initialState = {
    myFavorites: [],
    allCharacters: []
}
export default function rootReducer(state = initialState, {type, payload}) {
    switch(type) {
        case ADD_FAV:
            return {...state,
                allCharacters: payload,
                myFavorites: payload}
        case REMOVE_FAV:
            return {...state,
                myFavorites: payload,
                allCharacters: payload}
        case FILTER:
            if(payload === "All") {
                return {...state,
                    myFavorites: [...state.allCharacters]}
            }
            return {...state,
                myFavorites: [...state.allCharacters]?.filter(character => character.gender === payload)}
        case ORDER:
            return {...state,
                myFavorites: [...state.allCharacters].sort((a, b) => {
                    if (payload === 'A') {
                        return a.id - b.id;
                    } else {
                        return b.id - a.id;
                    }
                }),
            };
        default:
            return state
    }
}