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
        return Object.assign({}, state, {
            selectedSeats: state.selectedSeats.includes(action.payload)
                ? state.selectedSeats.filter( seat => seat !== action.payload)
                : [...state.selectedSeats, action.payload]
        })
    }

    default: return state;
  }
}
