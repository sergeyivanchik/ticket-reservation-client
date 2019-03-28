import {combineReducers} from 'redux';
import selectTicket,{getAllTicket} from './tickets.js';
import getAllCards from './cards.js';


const allReducers = combineReducers ({
  selectTicket,
  getAllCards,
  getAllTicket
})

export default allReducers