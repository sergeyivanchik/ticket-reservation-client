import {
  SELECT_SEAT,
  DELETE_SELECTED_SEATS
} from '../constants/seats.js';


const initialState = {
  selectSeats: [],
  error: ''
}

export default function getSeats(state = initialState, action) {
  switch (action.type) {
    case DELETE_SELECTED_SEATS:
      return Object.assign({}, state, {
        selectSeats: []
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
