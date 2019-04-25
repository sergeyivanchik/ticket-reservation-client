import { GET_MOVIES, GET_MOVIE_BY_ID } from '../constants/movies.js';


const initialState = {
    allMovies: []
}

export default function getMovies(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
        {
            return Object.assign({}, state, {
                allMovies: action.payload
            })
        }
        default:
            return state;
    }
}

export function getMovieById( state = { movieById: [] }, action) {
    switch (action.type) {
        case GET_MOVIE_BY_ID:
        {
            return Object.assign({}, state, {
                movieById: action.payload
            })
        }
        default:
            return state;
    }  
}