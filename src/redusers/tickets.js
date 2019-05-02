import {
  SELECT_TICKET_SUCCESS,
  GET_TICKETS_SUCCESS,
  GET_TICKETS_FAILURE
} from '../constants/tickets.js';


const initialState = {
  selectedSeats: [],
  allSelectedSeats: [],
  error: ''
}

export default function getTickets(state = initialState, action) {
  switch (action.type) {
    case GET_TICKETS_SUCCESS:
    {
      return Object.assign({}, state, {
        allSelectedSeats: action.payload
      })
    }

    case GET_TICKETS_FAILURE:
    {
      return Object.assign({}, state, {
        error: action.payload
      })
    }

    case SELECT_TICKET_SUCCESS:
    {
      const currentTicket = state.selectedSeats.find(ticket => 
        action.payload.row === ticket.row &&
        action.payload.seat === ticket.seat &&
        action.payload.price === ticket.price
      )
      const boughtTicket = currentTicket
      ? state.selectedSeats.filter(ticket => ticket !== currentTicket)
      : [...state.selectedSeats, action.payload]

      return Object.assign({}, state, {
        selectedSeats: boughtTicket
        })
    }

    default: return state;
  }
}
