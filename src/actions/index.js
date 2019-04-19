import axios from "axios";

const SELECT_TICKET = 'SELECT_TICKET';
const GET_ALL_CARDS = 'GET_ALL_CARDS';
const GET_TICKET = 'GET_TICKET';

export const getAllTicket = tickets => ({
  type: GET_TICKET,
  payload: tickets
}); 

export const selectTicket = ticket => ({
  type: SELECT_TICKET,
  payload: ticket
});

export const getAllCards = card => ({
  type: GET_ALL_CARDS,
  payload: card
});

export function getCards () {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('http://localhost:8080');
      dispatch(getAllCards(data))
    }
    catch (error) {
      console.log(error);
    }  
  }
}

export function getTickets () {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('http://localhost:8080/seanses');
      dispatch(getAllTicket(data))
    }
    catch (error) {
      console.log(error);
    }    
  }
}
