import React, { Component } from 'react';


class Seat extends Component {
  render() {
    const { session, cinema, hall, movie, row, seat, occupied, cost, bought, user, selectedOtherUser, onSelectSeat } = this.props;
    return (
      <span 
        onClick={(e) => { 
          if(e.target.className !== 'seat seat_bought'){
            onSelectSeat({user, session, cinema, hall, movie, row, seat, cost})
          }
        }}
        on
        occupied={occupied}
        bought={bought}
        cost={cost}
        className={`seat ${occupied ? 'seat_occupied' : bought ? 'seat_bought' : selectedOtherUser ? 'seat_bought' : ''}` }
        title={`${bought ? 'bought' : selectedOtherUser ? 'bought' : `row ${row} seat ${seat} cost ${cost}`}`}
      >
        {seat}
      </span>
    )
  }
}

export default Seat;
