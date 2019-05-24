import { 
  GET_HALLS_BY_CINEMA_SUCCESS,
  GET_HALLS_BY_CINEMA_FAILURE 
} from '../constants/halls.js';


const initialState = {
    allHallsByCinema: [],
    error: []
  }

export default function getHalls(state = initialState, action) {
  switch (action.type) {
    case GET_HALLS_BY_CINEMA_SUCCESS: 
      return Object.assign({}, state, {
        allHallsByCinema: action.payload
      })

    case GET_HALLS_BY_CINEMA_FAILURE: 
      return Object.assign({}, state, {
        error: action.payload
      })
    
    default:
      return state;
      }}