import {
  SELECT_TICKET_SUCCESS,
  SELECT_TICKET_FAILURE,
  GET_TICKETS_SUCCESS,
  GET_TICKETS_FAILURE
} from '../constants/tickets.js';


const initialState = {
  selectedTickets: [],
  allSelectedTickets: [],
  error: ''
}

export default function getTickets(state = initialState, action) {
  switch (action.type) {
    case GET_TICKETS_SUCCESS:
      return Object.assign({}, state, {
        allSelectedTickets: action.payload
      })

    case GET_TICKETS_FAILURE:
      return Object.assign({}, state, {
        error: action.payload
      })

    case SELECT_TICKET_SUCCESS: {
      const currentTicket = state.selectedTickets.find(ticket => 
        action.payload.row === ticket.row &&
        action.payload.seat === ticket.seat &&
        action.payload.price === ticket.price
      )
      const boughtTicket = currentTicket
      ? state.selectedTickets.filter(ticket => ticket !== currentTicket)
      : [...state.selectedTickets, action.payload]

      return Object.assign({}, state, {
        selectedTickets: boughtTicket
        })
    }

    case SELECT_TICKET_FAILURE:
      return Object.assign({}, state, {
        error: action.payload
      })

    default: 
      return state;
  }
}
