import { SHOW_SNACKBAR, HIDE_SNACKBAR } from '../constants/snackbar.js';


const initialState = {
  isShown: false,
  message: ''
}

export default function snackbar(state = initialState, action) {
  switch (action.type) {
    case SHOW_SNACKBAR:
      return Object.assign({}, state, {
        isShown: true,
        message: action.payload
      })

    case HIDE_SNACKBAR: 
      return Object.assign({}, state, {
        isShown: false
      })
      
    default:
      return state;
}}
