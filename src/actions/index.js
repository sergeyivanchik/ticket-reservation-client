const SELECT_TICKET = 'SELECT_TICKET';
const GET_ALL_CARDS = 'GET_ALL_CARDS';

export const selectTicket = ticket => ({
  type: SELECT_TICKET,
  payload: ticket
});
export const getAllCards = card => ({
  type: GET_ALL_CARDS,
  payload: card
});

