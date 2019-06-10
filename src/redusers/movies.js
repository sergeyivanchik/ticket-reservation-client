import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE, 
  GET_MOVIE_BY_ID_SUCCESS,
  GET_MOVIE_BY_ID_FAILURE
} from '../constants/movies.js';


const initialState = {
  allMovies: [],
  movieById: [],
  error: ''
}

export default function movies(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return Object.assign({}, state, {
        allMovies: action.payload
      })

    case GET_MOVIES_FAILURE:
      return Object.assign({}, state, {
        error: action.payload
      })

    case GET_MOVIE_BY_ID_SUCCESS: 
      return Object.assign({}, state, {
        movieById: action.payload
      })

    case GET_MOVIE_BY_ID_FAILURE:
      return Object.assign({}, state, {
        error: action.payload
      })

    default:
      return state;
  }
}
