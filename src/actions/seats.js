import axios from "axios";
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


export const getBoughtSeatsByUserSucces = selectedSeats => ({
  type: GET_BOUGHT_SEATS_BY_USER_SUCCESS,
  payload: selectedSeats
})

export const getBoughtSeatsByUserFailure = error => ({
  type: GET_BOUGHT_SEATS_BY_USER_FAILURE,
  payload: error
})

export const getBoughtSeatsByUserAsync = userId => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/boughtSeats/${userId}`);
      dispatch(getBoughtSeatsByUserSucces(data))
    }
    catch (error) {
      dispatch(getBoughtSeatsByUserFailure(error));
    }
  }
}

export const getSelectedSeatsSuccess = selectedSeats => ({
  type: GET_SELECTED_SEATS_SUCCESS,
  payload: selectedSeats
})

export const getSelectedSeatsFailure = error => ({
  type: GET_SELECTED_SEATS_FAILURE,
  payload: error
})

export const getSelectedSeatsAsync = (sessionId, cinemaId, hallId, movieId, userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/selectedSeats/${userId}/${sessionId}/${cinemaId}/${hallId}/${movieId}`);
      dispatch(getSelectedSeatsSuccess(data))
    }
    catch (error) {
      dispatch(getSelectedSeatsFailure(error));
    }
  }
}

export const getBoughtSeatsSucces = boughtSeats => ({
  type: GET_BOUGHT_SEATS_SUCCESS,
  payload: boughtSeats
})

export const getBoughtSeatsFailure = error => ({
  type: GET_BOUGHT_SEATS_FAILURE,
  payload: error
})

export const getBoughtSeatsAsync = (sessionId, cinemaId, hallId, movieId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/boughtSeats/${sessionId}/${cinemaId}/${hallId}/${movieId}`);
      dispatch(getBoughtSeatsSucces(data))
    }
    catch (error) {
      dispatch(getBoughtSeatsFailure(error));
    }
  }
}

export const deleteSelectedSeats = () => ({
  type: DELETE_SELECTED_SEATS
});

export const selectSeatSuccess = seat => ({
  type: SELECT_SEAT_SUCCESS,
  payload: seat
});

export const selectSeatFailure = error => ({
  type: SELECT_SEAT_FAILURE,
  payload: error
})

export const selectSeatAsync = (user, session, cinema, hall, movie, row, seat, cost) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`http://localhost:8080/selectedSeats`, 
        { user, session, cinema, hall, movie, row, seat, cost }
      );
      dispatch(selectSeatSuccess(data));
    }
    catch (error) {
      dispatch(selectSeatFailure(error));
    }
  }
}

export const buySeatsSuccess = seats => ({
  type: BUY_SEATS_SUCCESS,
  payload: seats
});

export const buySeatsFailure = error => ({
  type: BUY_SEATS_FAILURE,
  payload: error
});

export const buySeatsAsync = (sessionId, row, seat, price) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`http://localhost:8080/sessions/insert/${sessionId}`, { row, seat, price } );
      dispatch(buySeatsSuccess(data))
    }
    catch (error) {
      dispatch(buySeatsFailure(error));
    }
  }
} 
