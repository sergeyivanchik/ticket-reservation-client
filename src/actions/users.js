import axios from "axios";
import {
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  CHECK_AUTHORIZATION_SUCCESS,
  CHECK_AUTHORIZATION_FAILURE
} from '../constants/users.js';
import { showSnackbar } from '../actions/snackbar.js'
import { history } from '../App.js';


export const checkAuthorizationSuccess = currentUser => ({
  type: CHECK_AUTHORIZATION_SUCCESS,
  payload: currentUser
})

export const checkAuthorizationFailure = error => ({
  type: CHECK_AUTHORIZATION_FAILURE,
  payload: error
})

export const checkAuthorizationAsync = () => {
  axios.defaults.headers['AUTHORIZATION'] = localStorage.getItem('token');
  return async (dispatch) => {
    try {
      const currentUser  = await axios.post(`http://localhost:8080/users/user`);
      dispatch(checkAuthorizationSuccess(currentUser.data));
    } catch (error) {
      dispatch(checkAuthorizationFailure(error));
    }
  }
}

export const logInSuccess = () => ({
  type: LOG_IN_SUCCESS
})

export const logInFailure = error => ({
  type: LOG_IN_FAILURE,
  payload: error
})

export const logInAsync = userInfo => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`http://localhost:8080/users/login`, {...userInfo});
      const { token } = data;
      if(token) {
        localStorage.setItem('token', token);
      } else console.log('token not found');
      dispatch(logInSuccess());
      dispatch(showSnackbar('You have successfully logged in!'));
      history.push('/')
    } catch (error) {
      dispatch(logInFailure(error));
      dispatch(showSnackbar('Please, enter correct data!'));
    }
  }
}
