import React, { Component } from 'react';

import Seat from './Seat.js'


class Row extends Component {
  CreateRow(row, countPlaces) {
    const { user, movie, cinema, session, hall, hallRow, onSelectSeat, selectedSeats, boughtSeats} = this.props;
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
          onSelectSeat={onSelectSeat}
          occupied={
            selectedSeats.find(ticket => 
              ticket.row === row && 
              ticket.seat === i && 
              ticket.cost === hallRow.cost &&
              ticket.user === user)
          }
          bought={
            boughtSeats.find(boughtSeat => 
              boughtSeat.row === row &&
              boughtSeat.seat === i &&
              boughtSeat.cost === hallRow.cost)
          }
          selectedOtherUser={
            selectedSeats.find(ticket => 
              ticket.user !== user &&
              ticket.row === row && 
              ticket.seat === i && 
              ticket.cost === hallRow.cost)
          }
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
