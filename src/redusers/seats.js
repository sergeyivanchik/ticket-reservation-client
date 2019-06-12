import {
  SELECT_SEAT_SUCCESS,
  SELECT_SEAT_FAILURE,
  DELETE_SELECTED_SEATS,
  BUY_SEATS_SUCCESS,
  BUY_SEATS_FAILURE,
  GET_BOUGHT_SEATS_SUCCESS,
  GET_BOUGHT_SEATS_FAILURE,
  GET_SELECTED_SEATS_SUCCESS,
  GET_SELECTED_SEATS_FAILURE,
  GET_BOUGHT_SEATS_BY_USER_SUCCESS,
  GET_BOUGHT_SEATS_BY_USER_FAILURE
} from '../constants/seats.js';


const initialState = {
  selectedSeats: [],
  reserveSeats: [],
  boughtSeats: [],
  boughtSeatsByUser: [],
  error: ''
}

export default function seats(state = initialState, action) {
  switch (action.type) {
    case DELETE_SELECTED_SEATS:
      return Object.assign({}, state, {
        selectedSeats: []
      })

    case SELECT_SEAT_SUCCESS: {
      const currentSeat = state.selectedSeats.find(seatInfo => 
        action.payload.row === seatInfo.row &&
        action.payload.seat === seatInfo.seat &&
        action.payload.cost === seatInfo.cost &&
        action.payload.user === seatInfo.user &&
        action.payload.session === seatInfo.session &&
        action.payload.cinema === seatInfo.cinema &&
        action.payload.hall === seatInfo.hall &&
        action.payload.movie === seatInfo.movie
      )
      const selectedSeat = currentSeat
      ? state.selectedSeats.filter(seat => seat !== currentSeat)
      : [...state.selectedSeats, action.payload]

      return Object.assign({}, state, {
        selectedSeats: selectedSeat
      })
    }

    case SELECT_SEAT_FAILURE: {
      return Object.assign({}, state, {
        error: action.payload
      })
    }

    case BUY_SEATS_SUCCESS: {
      return Object.assign({}, state, {
        reserveSeats: action.payload
      })
    }

    case GET_SELECTED_SEATS_SUCCESS: {
      return Object.assign({}, state, {
        selectedSeats: action.payload
      })
    }

    case GET_SELECTED_SEATS_FAILURE: {
      return Object.assign({}, state, {
        error: action.payload
      })
    }

    case BUY_SEATS_FAILURE: {
      return Object.assign({}, state, {
        error: action.payload
      })
    }

    case GET_BOUGHT_SEATS_SUCCESS: {
      return Object.assign({}, state, {
        boughtSeats: action.payload
      })
    }

    case GET_BOUGHT_SEATS_FAILURE: {
      return Object.assign({}, state, {
        error: action.payload
      })
    }

    case GET_BOUGHT_SEATS_BY_USER_SUCCESS: {
      return Object.assign({}, state, {
        boughtSeatsByUser: action.payload
      })
    }

    case GET_BOUGHT_SEATS_BY_USER_FAILURE: {
      return Object.assign({}, state, {
        error: action.payload
      })
    }

    default: 
      return state;
  }
}
