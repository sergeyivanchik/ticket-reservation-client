import axios from "axios";
import { SELECT_TICKET, GET_TICKET } from '../constants/tickets.js';


export const getAllTicket = tickets => ({
  type: GET_TICKET,
  payload: tickets
});

export const selectTicket = ticket => ({
  type: SELECT_TICKET,
  payload: ticket
});

export const getTickets = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/sessions`);
      dispatch(getAllTicket(data))
    }
    catch (error) {
      console.log(error);
    }
  }
}