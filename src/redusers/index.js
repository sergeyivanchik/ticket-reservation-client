import { combineReducers } from 'redux';
import selectTicket,{ getTickets } from './tickets.js';
import getCards from './cards.js';
import getCinemas, { getCinemasById } from './cinemas.js';
import getHallsByCinema from './halls.js';
import getMovies, { getMovieById } from './movies';

const allReducers = combineReducers ({
  selectTicket,
  getCards,
  getTickets,
  getCinemas,
  getHallsByCinema,
  getCinemasById,
  getMovies,
  getMovieById
})

export default allReducers