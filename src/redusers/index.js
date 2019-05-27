import { combineReducers } from 'redux';
import getSeats  from './seats.js';
import getCinemas from './cinemas.js';
import getHalls from './halls.js';
import getMovies from './movies';

const allReducers = combineReducers ({
  getSeats,
  getCinemas,
  getHalls,
  getMovies
})

export default allReducers