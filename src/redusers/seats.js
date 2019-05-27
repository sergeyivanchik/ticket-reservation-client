import {
  SELECT_SEAT,
  GET_SELECTED_SEATS_SUCCESS,
  GET_SELECTED_SEATS_FAILURE,
  DELETE_SELECTED_SEATS
} from '../constants/seats.js';


const initialState = {
  selectSeats: [],
  allSelectedSeats: [],
  error: ''
}

export default function getSeats(state = initialState, action) {
  switch (action.type) {
    case GET_SELECTED_SEATS_SUCCESS:
      return Object.assign({}, state, {
        allSelectedSeats: action.payload
      })

    case GET_SELECTED_SEATS_FAILURE:
      return Object.assign({}, state, {
        error: action.payload
      })

      case DELETE_SELECTED_SEATS:
      return Object.assign({}, state, {
        selectSeats: action.payload
      })

    case SELECT_SEAT: {
      const currentSeat = state.selectSeats.find(seatInfo => 
        action.payload.row === seatInfo.row &&
        action.payload.seat === seatInfo.seat &&
        action.payload.price === seatInfo.price
      )
      const boughtTicket = currentSeat
      ? state.selectSeats.filter(seat => seat !== currentSeat)
      : [...state.selectSeats, action.payload]

      return Object.assign({}, state, {
        selectSeats: boughtTicket
        })
    }

    default: 
      return state;
  }
}
