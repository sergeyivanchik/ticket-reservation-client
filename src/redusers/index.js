import { combineReducers } from 'redux';
import getSeats  from './seats.js';
import getCinemas from './cinemas.js';
import getHalls from './halls.js';
import getMovies from './movies.js';
import getSessions from './sessions.js';
import getLoader from './loader.js';

const allReducers = combineReducers ({
  getSeats,
  getCinemas,
  getHalls,
  getMovies,
  getSessions,
  getLoader
})

export default allReducers