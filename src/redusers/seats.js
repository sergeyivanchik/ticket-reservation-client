import {
  SELECT_SEAT_SUCCESS,
  SELECT_SEAT_FAILURE,
  BUY_SEATS_SUCCESS,
  BUY_SEATS_FAILURE,
  GET_BOUGHT_SEATS_SUCCESS,
  GET_BOUGHT_SEATS_FAILURE,
  GET_SELECTED_SEATS_SUCCESS,
  GET_SELECTED_SEATS_FAILURE,
  GET_BOUGHT_SEATS_BY_USER_SUCCESS,
  GET_BOUGHT_SEATS_BY_USER_FAILURE,
  GET_SELECTED_SEATS_BY_USER_SUCCESS,
  GET_SELECTED_SEATS_BY_USER_FAILURE,
  DELETE_ADDITIONAL_SERVICES_SUCCESS,
  DELETE_ADDITIONAL_SERVICES_FAILURE,
  SELECT_ADDITIONAL_SERVICE_SUCCESS,
  SELECT_ADDITIONAL_SERVICE_FAILURE
} from '../constants/seats.js';


const initialState = {
  selectedSeats: [],
  selectedSeatsByUser: [],
  boughtSeats: [],
  boughtSeatsByUser: [],
  error: ''
}

export default function seats(state = initialState, action) {
  switch (action.type) {
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

    case SELECT_ADDITIONAL_SERVICE_SUCCESS: {
      return Object.assign({}, state, {
        error: ''
      })
    }

    case SELECT_ADDITIONAL_SERVICE_FAILURE: {
      return Object.assign({}, state, {
        error: action.payload
      })
    }

    case GET_SELECTED_SEATS_BY_USER_SUCCESS: {
      return Object.assign({}, state, {
        selectedSeatsByUser: action.payload
      })
    }

    case GET_SELECTED_SEATS_BY_USER_FAILURE: {
      return Object.assign({}, state, {
        error: action.payload
      })
    }

    case BUY_SEATS_SUCCESS: {
      return Object.assign({}, state, {
        boughtSeats: action.payload
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

    case DELETE_ADDITIONAL_SERVICES_SUCCESS: {
      return Object.assign({}, state, {
        error: ''
      })
    }

    case DELETE_ADDITIONAL_SERVICES_FAILURE: {
      return Object.assign({}, state, {
        error: action.payload
      })
    }

    default: 
      return state;
  }
}
