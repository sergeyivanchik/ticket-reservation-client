const initialState = {
    allFilms: []
}
const  GET_ALL_FILMS = 'GET_ALL_FILMS';

export default function getAllFilms(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_FILMS : 
        {
            return Object.assign({}, state, { 
                allFilms: action.payload
            })
        }
        default:
            return state;
    }} 