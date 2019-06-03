import {
  SELECT_SEAT,
  DELETE_SELECTED_SEATS,
  BUY_SEATS_SUCCESS,
  BUY_SEATS_FAILURE
} from '../constants/seats.js';


const initialState = {
  selectSeats: [],
  reserveSeats: [],
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
      const chooseSeat = currentSeat
      ? state.selectSeats.filter(seat => seat !== currentSeat)
      : [...state.selectSeats, action.payload]

      return Object.assign({}, state, {
        selectSeats: chooseSeat
      })
    }

    case BUY_SEATS_SUCCESS: {
      return Object.assign({}, state, {
        reserveSeats: action.payload
      })
    }

    case BUY_SEATS_FAILURE: {
      return Object.assign({}, state, {
        error: action.payload
      })
    }

    default: 
      return state;
  }
}
