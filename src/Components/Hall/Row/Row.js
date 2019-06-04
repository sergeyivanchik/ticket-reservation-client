import React, { Component } from 'react';

import Seat from './Seat.js'


class Row extends Component {
  CreateRow(row, countPlaces) {
    let places = [];
    for(let i = 1; i < countPlaces+1; i++) {
      places.push(
        <Seat
          row={row}
          seat={i}
          price={this.props.price}
          chooseSeat={this.props.chooseSeat}
          occupied={
            this.props.selectSeats.find(ticket => 
              ticket.row === row && 
              ticket.seat === i && 
              ticket.price === this.props.price)
          }
          key={i+row}
        />
      )
    }
    return places
  }
  
  render() {
    const { row, amountOfSeats } = this.props;
    return (
      <div className="row">
        <div className="row__number" title={`row ${row}`}>
          {row}
        </div>
        <div className="row__seats-list">
          {this.CreateRow(row, amountOfSeats)}
        </div>
        <div className="row__number" title={`row ${row}`}>
          {row}
        </div>
      </div>
    )
  }
}

export default Row;
