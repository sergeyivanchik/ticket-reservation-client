import { GET_ALL_MOVIES } from '../constants/movies.js';


const initialState = {
    allMovies: []
}

export default function getAllMovies(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_MOVIES:
        {
            return Object.assign({}, state, {
                allMovies: action.payload
            })
        }
        default:
            return state;
    }} 