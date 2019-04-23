import { GET_ALL_CARDS } from '../constants/cards.js';


const initialState = {
  allCards: []
}

export default function getAllCards(state = initialState,action) {
    switch (action.type) {
        case GET_ALL_CARDS:
        {
            return Object.assign({}, state, {
                allCards: action.payload
            })
        }
        default:
            return state;
    }}