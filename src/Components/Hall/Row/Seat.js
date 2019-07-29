import React, { Component } from 'react';
import { sendToServer } from '../../../socket';

class Seat extends Component {
  render() {
    const { session, cinema, hall, movie,
      row, seat, occupied, cost, bought,
      user, selectedOtherUser, selectedSeats, showSnackbar } = this.props;
    const selectedSeatsByUser = selectedSeats.filter(seat => seat.user === user);
    const countOfSelectedSeats = 6;
    return (
      <span 
        onClick={event => { 
          if((event.target.className !== 'seat seat_bought' && selectedSeatsByUser.length < countOfSelectedSeats) ||
            (event.target.className === 'seat seat_occupied' && selectedSeatsByUser.length === countOfSelectedSeats)) {
              sendToServer({user, session, cinema, hall, movie, row, seat, cost});
            }
          else if(event.target.className === 'seat seat_bought'){
            showSnackbar("You cannot select book seat!")
          } else showSnackbar("You cannot select more than 6 seats!")
        }}
        className={`seat ${occupied ? 'seat_occupied' : bought || selectedOtherUser ? 'seat_bought' : ''}` }
        title={`${bought || selectedOtherUser ? 'bought' : `row ${row} seat ${seat} cost ${cost}`}`}
      >
        {seat}
      </span>
    )
  }
}

export default Seat;
