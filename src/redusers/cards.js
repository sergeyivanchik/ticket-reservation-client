import { GET_CARDS } from '../constants/cards.js';


const initialState = {
  allCards: []
}

export default function getCards(state = initialState,action) {
    switch (action.type) {
        case GET_CARDS:
        {
            return Object.assign({}, state, {
                allCards: action.payload
            })
        }
        default:
            return state;
    }}