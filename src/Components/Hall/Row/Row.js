import React, { Component } from 'react';

import Seat from './Seat.js'


class Row extends Component {
  CreateRow(row, coutPlaces) {
    let places = []
    for(let i = 0; i < coutPlaces; i++) {
      places.push(
        <Seat
          row={row}
          number={i+1}
          price={this.props.price}
          chooseSeat={this.props.chooseSeat}
          occupied={
            this.props.selectedSeats.find(ticket => 
              ticket.row === row && 
              ticket.seat === i+1 && 
              ticket.price === this.props.price) ? 'true' : 'false'
          }
          key={`${i + 1}${row}`}
        />
      )
    }
    return places
  }
  
  render() {
    const { row, seats } = this.props
    return (
      this.props.amountOfSeats.length &&
      <div className="row">
        <div className="row__number row__number_left" title={`row ${row}`}>
          {row}
        </div>
        <div className="row__seats-list">
          {this.CreateRow(row, seats)}
        </div>
        <div className="row__number row__number_right" title={`row ${row}`}>
          {row}
        </div>
      </div>
    )
  }
}

export default Row;
