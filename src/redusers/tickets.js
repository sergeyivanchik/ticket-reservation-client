import { SELECT_TICKET, GET_TICKETS } from '../constants/tickets.js';


const initialState = {
  selectedSeats: []
}

export function getTickets(state = { allSelectedSeats: [] }, action) {
  switch (action.type) {
    case GET_TICKETS:
    {
      return Object.assign({}, state, {
        allSelectedSeats: action.payload
    })
    }
    default: return state;
  }
}

export default function selectTicket(state = initialState, action) {
  switch (action.type) {
    case SELECT_TICKET:
    {
        return Object.assign({}, state, {
            selectedSeats: state.selectedSeats.includes(action.payload)
                ? state.selectedSeats.filter( seat => seat !== action.payload)
                : [...state.selectedSeats, action.payload]
        })
    }
    default: return state;
  }
}