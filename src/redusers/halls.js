import { GET_HALLS_BY_CINEMA_SUCCESS } from '../constants/halls.js';


const initialState = {
    allHallsByCinema: []
  }

export default function getHalls(state = initialState, action) {
  switch (action.type) {
    case GET_HALLS_BY_CINEMA_SUCCESS: {
      return Object.assign({}, state, {
        allHallsByCinema: action.payload
      })
  }
    default:
      return state;
      }}