import { GET_ALL_HALLS_BY_CINEMA } from '../constants/halls.js';


const initialState = {
    allHallsByCinema: []
  }

export default function getAllHallsByCinema(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_HALLS_BY_CINEMA: {
      return Object.assign({}, state, {
        allHallsByCinema: action.payload
      })
  }
    default:
      return state;
      }}