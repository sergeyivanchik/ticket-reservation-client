import axios from "axios";
import {
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE
} from '../constants/users.js';
import { showSnackbar } from '../actions/snackbar.js'
import { history } from '../App.js';


export const logInSuccess = user => ({
  type: LOG_IN_SUCCESS,
  payload: user
})

export const logInFailure = error => ({
  type: LOG_IN_FAILURE,
  payload: error
})

export const logInAsync = (userInfo) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`http://localhost:8080/users/login`, {...userInfo});
      let token = data.token;
      token
        ? localStorage.setItem('token', token)
        : console.log('token not found');
      dispatch(logInSuccess(data));
      dispatch(showSnackbar('You have successfully logged in!'));
      history.push('/')
    } catch (error) {
      dispatch(logInFailure(error));
      dispatch(showSnackbar('Please, enter correct data!'));
    }
  }
}
