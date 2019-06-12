import React, { Component } from 'react';

import Seat from './Seat.js'


class Row extends Component {
  CreateRow(row, countPlaces) {
    let places = [];
    for(let i = 1; i < countPlaces+1; i++) {
      places.push(
        <Seat
          user={this.props.user}
          movie={this.props.movie}
          cinema={this.props.cinema}
          session={this.props.session}
          hall={this.props.hall}
          row={row}
          seat={i}
          cost={this.props.cost}
          onSelectSeat={this.props.onSelectSeat}
          occupied={
            this.props.selectedSeats.find(ticket => 
              ticket.row === row && 
              ticket.seat === i && 
              ticket.cost === this.props.cost &&
              ticket.user === this.props.user)
          }
          bought={
            this.props.boughtSeats.find(boughtSeat => 
              boughtSeat.row === row &&
              boughtSeat.seat === i &&
              boughtSeat.cost === this.props.cost)
          }
          selectedOtherUser={
            this.props.selectedSeats.find(ticket => 
              ticket.user !== this.props.user &&
              ticket.row === row && 
              ticket.seat === i && 
              ticket.cost === this.props.cost)
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
        <div className="row__number" title={`row ${row}`}>{row}</div>

        <div className="row__seats-list">{this.CreateRow(row, amountOfSeats)}</div>

        <div className="row__number" title={`row ${row}`}>{row}</div>
      </div>
    )
  }
}

export default Row;
