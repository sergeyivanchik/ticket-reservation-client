import io from 'socket.io-client';
import { baseUrl } from './configs/url';
import { selectSeatAsync } from './actions/seats'

const socket = io(baseUrl);

const socketConfig = dispatch => {
  socket.on('connect', () => {
    console.log('User сonnected!');
  });

  socket.on('selectedSeat', ticket => 
    dispatch(selectSeatAsync(ticket))
  )
  return socket;
}

export const sendToServer = data => socket.emit('sendToServer', {...data});


export default socketConfig;
