import axios from "axios";
import {
  SELECT_TICKET_SUCCESS,
  SELECT_TICKET_FAILURE,
  GET_TICKETS_SUCCESS,
  GET_TICKETS_FAILURE
} from '../constants/tickets.js';


export const getTicketsSuccess = tickets => ({
  type: GET_TICKETS_SUCCESS,
  payload: tickets
});

export const getTicketsFailure = error => ({
  type: GET_TICKETS_FAILURE,
  payload: error
});

export const selectTicketSuccess = ticket => ({
  type: SELECT_TICKET_SUCCESS,
  payload: ticket
});

export const selectTicketFailure = error => ({
  type: SELECT_TICKET_FAILURE,
  payload: error
});

export const getTicketsAsync = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/sessions`);
      dispatch(getTicketsSuccess(data))
    }
    catch (error) {
      dispatch(getTicketsFailure(error))
    }
  }
}