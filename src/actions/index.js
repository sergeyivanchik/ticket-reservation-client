import axios from "axios";

const SELECT_TICKET = 'SELECT_TICKET';
const GET_ALL_CARDS = 'GET_ALL_CARDS';
const GET_TICKET = 'GET_TICKET';
const GET_ALL_CINEMAS = 'GET_ALL_CINEMAS';
const GET_ALL_HALLS_BY_CINEMA = 'GET_ALL_HALLS_BY_CINEMA';
const GET_ALL_CINEMAS_BY_ID = 'GET_ALL_CINEMAS_BY_ID';
const GET_ALL_MOVIES = 'GET_ALL_MOVIES'

export const getAllCinemas = cinemas => ({
  type: GET_ALL_CINEMAS,
  payload: cinemas
});

export const getAllMovies = movies => ({
  type: GET_ALL_MOVIES,
  payload: movies
})

export const getAllTicket = tickets => ({
  type: GET_TICKET,
  payload: tickets
});

export const selectTicket = ticket => ({
  type: SELECT_TICKET,
  payload: ticket
});

export const getAllCards = card => ({
  type: GET_ALL_CARDS,
  payload: card
});

export const getAllHallsByCinema = hall => ({
  type: GET_ALL_HALLS_BY_CINEMA,
  payload: hall
});

export const getAllCinemasById = cinema => ({
  type: GET_ALL_CINEMAS_BY_ID,
  payload: cinema
});

export function getCinemasById(cinemaId) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/cinemas/${cinemaId}?select=name`);
      dispatch(getAllCinemasById(data))
    }
    catch (error) {
      console.log(error);
    }
  }
}

export function getHallsByCinema() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/cinemas/5c98af99ef0e720b148e1643?select=halls`);
      dispatch(getAllHallsByCinema(data))
    }
    catch (error) {
      console.log(error);
    }
  }
}

export function getMovies() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:8080/movies');
      dispatch(getAllMovies(data))
    }
    catch (error) {
      console.log(error);
    }
  }
}

export function getCards() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:8080');
      dispatch(getAllCards(data))
    }
    catch (error) {
      console.log(error);
    }
  }
}
export function getCinemas() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:8080/cinemas');
      dispatch(getAllCinemas(data))
    }
    catch (error) {
      console.log(error);
    }
  }
}

export function getTickets() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:8080/sessions');
      dispatch(getAllTicket(data))
    }
    catch (error) {
      console.log(error);
    }
  }
}
