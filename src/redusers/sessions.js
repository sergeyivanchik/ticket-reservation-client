import {
  GET_SESSIONS_SUCCESS,
  GET_SESSIONS_FAILURE
} from '../constants/sessions.js';


const initialState = {
  sessionsList: [],
  error: ''
}

export default function sessions(state = initialState, action) {
  switch (action.type) {
    case GET_SESSIONS_SUCCESS:
      return Object.assign({}, state, {
        sessionsList: action.payload
      })

    case GET_SESSIONS_FAILURE:
      return Object.assign({}, state, {
        error: action.payload
      })

    default: 
      return state;
  }
}
