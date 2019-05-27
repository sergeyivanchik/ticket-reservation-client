import React, { Component } from 'react';


class Seat extends Component {
  render() {
    const { row, seat, occupied, price } = this.props;
    return (
      <span 
        onClick={() => this.props.chooseSeat({row, seat, price})}
        occupied={occupied}
        price={price}
        className={`seat ${occupied ? `seat_occupied` : ``}`}
        title={`row ${row} seat ${seat} price ${price}`}
      >
        {seat}
      </span>
    )
  }
}

export default Seat;
