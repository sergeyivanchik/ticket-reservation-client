const initialState = {
    allMovies: []
}
const  GET_ALL_MOVIES = 'GET_ALL_MOVIES';

export default function getAllMovies(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_MOVIES:
        {
            return Object.assign({}, state, {
                allMovies: action.payload
            })
        }
        default:
            return state;
    }} 