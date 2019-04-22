const initialState = {
    allCinemas: []
  }
  const  GET_ALL_CINEMAS = 'GET_ALL_CINEMAS';
  const GET_ALL_CINEMAS_BY_ID = 'GET_ALL_CINEMAS_BY_ID';
  
  export function getAllCinemasById (state = {
      allCinemasById: []
    },
    action
  ) {
    switch (action.type) {
      case GET_ALL_CINEMAS_BY_ID:
      {
          return Object.assign({}, state, {
            allCinemasById: action.payload
          })
      }
      default:
          return state;
  }
  }

  export default function getAllCinemas(state = initialState,action) {
      switch (action.type) {
          case GET_ALL_CINEMAS:
          {
              return Object.assign({}, state, {
                allCinemas: action.payload
              })
          }
          default:
              return state;
      }}