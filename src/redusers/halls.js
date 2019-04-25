import { GET_HALLS_BY_CINEMA } from '../constants/halls.js';


const initialState = {
    allHallsByCinema: []
  }

export default function getHallsByCinema(state = initialState, action) {
  switch (action.type) {
    case GET_HALLS_BY_CINEMA: {
      return Object.assign({}, state, {
        allHallsByCinema: action.payload
      })
  }
    default:
      return state;
      }}