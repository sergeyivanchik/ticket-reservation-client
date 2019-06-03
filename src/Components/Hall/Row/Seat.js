import React, { Component } from 'react';


class Seat extends Component {
  render() {
    const { row, seat, occupied, price, bought } = this.props;
    return (
      <span 
        onClick={() => bought ? '' : this.props.chooseSeat({row, seat, price})}
        occupied={occupied}
        bought={bought}
        price={price}
        className={`seat ${occupied ? 'seat_occupied' : bought ? 'seat_bought' : ''}` }
        title={`row ${row} seat ${seat} price ${price}`}
      >
        {seat}
      </span>
    )
  }
}

export default Seat;
