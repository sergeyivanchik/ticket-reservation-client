import {combineReducers} from 'redux';
import selectTicket from './tickets.js';
import getAllCards from './cards.js';


const allReducers = combineReducers ({
  selectTicket,
  getAllCards,
})

export default allReducers