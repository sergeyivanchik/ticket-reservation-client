import axios from "axios";
import { GET_CARDS } from '../constants/cards.js';


export const getCards = card => ({
  type: GET_CARDS,
  payload: card
})

export const getCardsAsync = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:8080');
      dispatch(getCards(data))
    }
    catch (error) {
      console.log(error);
    }
  }
}
