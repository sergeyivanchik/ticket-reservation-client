import { GET_CINEMAS, GET_CINEMA_BY_ID } from '../constants/cinemas.js';


const initialState = {
    allCinemas: []
  }
  
  export function getCinemasById (state = {
      allCinemasById: []
    },
    action
  ) {
    switch (action.type) {
      case GET_CINEMA_BY_ID:
      {
          return Object.assign({}, state, {
            allCinemasById: action.payload
          })
      }
      default:
          return state;
  }
  }

  export default function getCinemas(state = initialState,action) {
      switch (action.type) {
          case GET_CINEMAS:
          {
              return Object.assign({}, state, {
                allCinemas: action.payload
              })
          }
          default:
              return state;
      }}