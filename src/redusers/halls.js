import { 
  GET_HALL_BY_CINEMA_SUCCESS,
  GET_HALL_BY_CINEMA_FAILURE 
} from '../constants/halls.js';


const initialState = {
  hallByCinema: {},
  error: ""
}

export default function halls(state = initialState, action) {
  switch (action.type) {
    case GET_HALL_BY_CINEMA_SUCCESS: 
      return Object.assign({}, state, {
        hallByCinema: action.payload
      })

    case GET_HALL_BY_CINEMA_FAILURE: 
      return Object.assign({}, state, {
        error: action.payload
      })
    
    default:
      return state;
  }
}
