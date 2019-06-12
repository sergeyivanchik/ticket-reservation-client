import React, { Component } from 'react';


class Seat extends Component {
  render() {
    const { session, cinema, hall, movie, row, seat, occupied, cost, bought, user, selectedOtherUser } = this.props;
    return (
      <span 
        onClick={() => this.props.onSelectSeat({user, session, cinema, hall, movie, row, seat, cost})}
        occupied={occupied}
        bought={bought}
        cost={cost}
        className={`seat ${occupied ? 'seat_occupied' : bought ? 'seat_bought' : selectedOtherUser ? 'seat_bought' : ''}` }
        title={`row ${row} seat ${seat} cost ${cost}`}
      >
        {seat}
      </span>
    )
  }
}

export default Seat;
