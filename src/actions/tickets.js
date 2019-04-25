import axios from "axios";
import { SELECT_TICKET, GET_TICKETS } from '../constants/tickets.js';


export const getTickets = tickets => ({
  type: GET_TICKETS,
  payload: tickets
});

export const selectTicket = ticket => ({
  type: SELECT_TICKET,
  payload: ticket
});

export const getTicketsAsync = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/sessions`);
      dispatch(getTickets(data))
    }
    catch (error) {
      console.log(error);
    }
  }
}