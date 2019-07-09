import axios from "axios";
import {
  SELECT_SEAT_SUCCESS,
  SELECT_SEAT_FAILURE,
  BOOK_SEATS_SUCCESS,
  BOOK_SEATS_FAILURE,
  GET_BOUGHT_SEATS_SUCCESS,
  GET_BOUGHT_SEATS_FAILURE,
  GET_SELECTED_SEATS_SUCCESS,
  GET_SELECTED_SEATS_FAILURE,
  GET_BOUGHT_SEATS_BY_USER_SUCCESS,
  GET_BOUGHT_SEATS_BY_USER_FAILURE,
  GET_SELECTED_SEATS_BY_USER_SUCCESS,
  GET_SELECTED_SEATS_BY_USER_FAILURE,
  SELECT_ADDITIONAL_SERVICE_SUCCESS,
  SELECT_ADDITIONAL_SERVICE_FAILURE,
  DELETE_ADDITIONAL_SERVICES_SUCCESS,
  DELETE_ADDITIONAL_SERVICES_FAILURE
} from '../constants/seats.js';


export const deleteAdditionalServicesSuccess = () => ({
  type: DELETE_ADDITIONAL_SERVICES_SUCCESS
});

export const deleteAdditionalServicesFailure = error => ({
  type: DELETE_ADDITIONAL_SERVICES_FAILURE,
  payload: error
})

export const deleteAdditionalServicesAsync = (userId, sessionId, cinemaId, hallId, movieId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`selectedSeats/deleteServices/${userId}/${sessionId}/${cinemaId}/${hallId}/${movieId}`);
      dispatch(deleteAdditionalServicesSuccess());
    }
    catch (error) {
      dispatch(deleteAdditionalServicesFailure(error));
    }
  }
}

export const selectAdditionalServiceSuccess = service => ({
  type: SELECT_ADDITIONAL_SERVICE_SUCCESS,
  payload: service
});

export const selectAdditionalServiceFailure = error => ({
  type: SELECT_ADDITIONAL_SERVICE_FAILURE,
  payload: error
})

export const selectAdditionalServiceAsync = (user, session, cinema, hall, movie, row, seat, cost, service) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`selectedSeats/addService`, 
        { user, session, cinema, hall, movie, row, seat, cost, service }
      );
      dispatch(selectAdditionalServiceSuccess(data));
      dispatch(getSelectedSeatsByUserAsync(data.user, data.session, data.cinema, data.hall, data.movie))
    }
    catch (error) {
      dispatch(selectAdditionalServiceFailure(error));
    }
  }
}

export const getSelectedSeatsByUserSuccess = selectedSeats => ({
  type: GET_SELECTED_SEATS_BY_USER_SUCCESS,
  payload: selectedSeats
})

export const getSelectedSeatsByUserFailure = error => ({
  type: GET_SELECTED_SEATS_BY_USER_FAILURE,
  payload: error
})

export const getSelectedSeatsByUserAsync = (userId, sessionId, cinemaId, hallId, movieId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`selectedSeats/${userId}/${sessionId}/${cinemaId}/${hallId}/${movieId}`);
      dispatch(getSelectedSeatsByUserSuccess(data))
    }
    catch (error) {
      dispatch(getSelectedSeatsByUserFailure(error));
    }
  }
}

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
      const { data } = await axios.get(`boughtSeats/${userId}`);
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

export const getSelectedSeatsAsync = (sessionId, cinemaId, hallId, movieId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`selectedSeats/${sessionId}/${cinemaId}/${hallId}/${movieId}`);
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
      const { data } = await axios.get(`boughtSeats/${sessionId}/${cinemaId}/${hallId}/${movieId}`);
      dispatch(getBoughtSeatsSucces(data))
    }
    catch (error) {
      dispatch(getBoughtSeatsFailure(error));
    }
  }
}

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
      const { data } = await axios.put(`selectedSeats`, 
        { user, session, cinema, hall, movie, row, seat, cost }
      );
      dispatch(selectSeatSuccess(data));
    }
    catch (error) {
      dispatch(selectSeatFailure(error));
    }
  }
}

export const bookSeatsSuccess = seats => ({
  type: BOOK_SEATS_SUCCESS,
  payload: seats
});

export const bookSeatsFailure = error => ({
  type: BOOK_SEATS_FAILURE,
  payload: error
});

export const bookSeatsAsync = (user, session, cinema, hall, movie, row, seat, cost, additionalServices) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`boughtSeats`,
        { user, session, cinema, hall, movie, row, seat, cost, additionalServices } );
      dispatch(bookSeatsSuccess(data))
    }
    catch (error) {
      dispatch(bookSeatsFailure(error));
    }
  }
} 
