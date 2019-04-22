const initialState = {
  allCards: []
}
const  GET_ALL_CARDS = 'GET_ALL_CARDS';

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