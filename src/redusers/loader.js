import { SHOW_LOADER, HIDE_LOADER } from '../constants/loader.js';


const initialState = {
  isLoading: true
}

export default function loader(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return Object.assign({}, state, {
        isLoading: true
      })

    case HIDE_LOADER: 
      return Object.assign({}, state, {
        isLoading: false
      })
      
    default:
      return state;
}}
