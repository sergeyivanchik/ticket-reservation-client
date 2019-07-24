import React, { Component } from 'react';

import Seat from './Seat.js'


class Row extends Component {
  occupied = (row, seat, cost, user) => 
    this.props.selectedSeats.find(ticket => 
      ticket.row === row && 
      ticket.seat === seat && 
      ticket.cost === cost &&
      ticket.user === user) 
    ? true 
    : false; 

  bought = (row, seat, cost) => 
    this.props.boughtSeats.find(boughtSeat => 
      boughtSeat.row === row &&
      boughtSeat.seat === seat &&
      boughtSeat.cost === cost)
    ? true
    : false

  selectedOtherUser = (user, row, seat, cost) =>
    this.props.selectedSeats.find(ticket => 
      ticket.user !== user &&
      ticket.row === row && 
      ticket.seat === seat && 
      ticket.cost === cost)
    ? true
    : false

  CreateRow(row, countPlaces) {
    const { user, movie, cinema, session, hall, hallRow} = this.props;
    let places = [];
    for(let i = 1; i < countPlaces+1; i++) {
      places.push(
        <Seat
          user={user}
          movie={movie}
          cinema={cinema}
          session={session}
          hall={hall}
          row={row}
          seat={i}
          cost={hallRow.cost}
          occupied={this.occupied(row, i, hallRow.cost, user)}
          bought={this.bought(row, i, hallRow.cost)}
          selectedOtherUser={this.selectedOtherUser(user, row, i, hallRow.cost)}
          key={i+row}
        />
      )
    }
    return places
  }
  
  render() {
    const { hallRow } = this.props;
    return (
      <div className="row">
        <div className="row__number" title={`row ${hallRow.row}`}>{hallRow.row}</div>

        <div className="row__seats-list">{this.CreateRow(hallRow.row, hallRow.countOfSeats)}</div>

        <div className="row__number" title={`row ${hallRow.row}`}>{hallRow.row}</div>
      </div>
    )
  }
}

export default Row;
