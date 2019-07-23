import { 
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  CHECK_AUTHORIZATION_SUCCESS,
  CHECK_AUTHORIZATION_FAILURE,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from '../constants/users.js';


const initialState = {
  currentUser: {},
  error: ''
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return Object.assign({}, state, {
        error: '',
      })
    case LOG_IN_FAILURE: 
      return Object.assign({}, state, {
        error: action.payload
      })
    case LOG_OUT_SUCCESS:
      return Object.assign({}, state, {
        error: '',
      })
    case LOG_OUT_FAILURE: 
      return Object.assign({}, state, {
        error: action.payload
      })
    case CHECK_AUTHORIZATION_SUCCESS:
      return Object.assign({}, state, {
        currentUser: action.payload
      })
    case CHECK_AUTHORIZATION_FAILURE: 
      return Object.assign({}, state, {
        error: action.payload
      })
      case SIGN_UP_SUCCESS:
      return Object.assign({}, state, {
        error: '',
      })
    case SIGN_UP_FAILURE: 
      return Object.assign({}, state, {
        error: action.payload
      })

    default:
      return state;
}}
