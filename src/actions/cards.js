import axios from "axios";
import { GET_ALL_CARDS } from '../constants/cards.js';


export const getAllCards = card => ({
  type: GET_ALL_CARDS,
  payload: card
})

export function getCards() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:8080');
      dispatch(getAllCards(data))
    }
    catch (error) {
      console.log(error);
    }
  }
}
