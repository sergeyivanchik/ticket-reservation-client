import { combineReducers } from 'redux';
import getTickets  from './tickets.js';
import getCinemas from './cinemas.js';
import getHalls from './halls.js';
import getMovies from './movies';

const allReducers = combineReducers ({
  getTickets,
  getCinemas,
  getHalls,
  getMovies
})

export default allReducers