import { SHOW_LOADER, HIDE_LOADER } from '../constants/loader.js';


const initialState = {
  loading: false
}

export default function getLoader(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return Object.assign({}, state, {
        loading: true
      })

    case HIDE_LOADER: 
      return Object.assign({}, state, {
        loading: false
      })
      
    default:
      return state;
}}