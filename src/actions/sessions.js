import axios from "axios";
import {
  GET_SESSIONS_SUCCESS,
  GET_SESSIONS_FAILURE,
} from '../constants/sessions.js';

export const getSessionsSuccess = sessions => ({
  type: GET_SESSIONS_SUCCESS,
  payload: sessions
});

export const getSessionsFailure = error => ({
  type: GET_SESSIONS_FAILURE,
  payload: error
});

export const getSessionsAsync = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/sessions`);
      dispatch(getSessionsSuccess(data))
    }
    catch (error) {
      dispatch(getSessionsFailure(error))
    }
  }
}
