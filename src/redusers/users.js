import { LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../constants/users.js';


const initialState = {
  user: false,
  error: ''
}

export default function getUsers(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return Object.assign({}, state, {
        user: true
      })
    case LOG_IN_FAILURE: 
      return Object.assign({}, state, {
        error: action.payload
      })
    default:
      return state;
}}
