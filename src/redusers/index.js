import { combineReducers } from 'redux';
import selectTicket,{ getAllTicket } from './tickets.js';
import getAllCards from './cards.js';
import getAllCinemas, { getAllCinemasById } from './cinemas.js';
import getAllHallsByCinema from './halls.js';
import getAllMovies, { getMovieById } from './movies';

const allReducers = combineReducers ({
  selectTicket,
  getAllCards,
  getAllTicket,
  getAllCinemas,
  getAllHallsByCinema,
  getAllCinemasById,
  getAllMovies,
  getMovieById
})

export default allReducers