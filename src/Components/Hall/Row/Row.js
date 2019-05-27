import React, { Component } from 'react';

import Seat from './Seat.js'


class Row extends Component {
  CreateRow(row, countPlaces) {
    let places = []
    for(let i = 0; i < countPlaces; i++) {
      places.push(
        <Seat
          row={row}
          seat={i+1}
          price={this.props.price}
          chooseSeat={this.props.chooseSeat}
          occupied={
            this.props.selectSeats.find(ticket => 
              ticket.row === row && 
              ticket.seat === i+1 && 
              ticket.price === this.props.price)
          }
          key={`${i + 1}${row}`}
        />
      )
    }
    return places
  }
  
  render() {
    const { row, amountOfSeats } = this.props;
    return (
      <div className="row">
        <div className="row__number row__number_left" title={`row ${row}`}>
          {row}
        </div>
        <div className="row__seats-list">
          {this.CreateRow(row, amountOfSeats)}
        </div>
        <div className="row__number row__number_right" title={`row ${row}`}>
          {row}
        </div>
      </div>
    )
  }
}

export default Row;
