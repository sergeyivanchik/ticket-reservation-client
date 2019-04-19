import React, { Component } from 'react';

import Seat from './Seat.js'


class Row extends Component {
  CreateRow  (row,coutPlaces)  {
    let places = []
    for(let place = 0; place < coutPlaces; place ++) {
      places.push(
        <Seat row = {row} number = {place+1} price = {this.props.price} chooseSeat = {this.props.chooseSeat} occupied = { 
         /*{ this.props.colSeat[0].selectedSeats.includes(`${row},${place + 1},${this.props.price}`).toString() || }*/this.props.selectedSeats.includes(`${row},${place + 1},${this.props.price}`).toString()} key = {`${place + 1}${row}`}  />
      )
    }
    return places    
  }
  render(){
    const {row, seats} = this.props
    return (
      this.props.colSeat.length &&
      <div className = "row">
        <div className = "row__left-number" title = {`row ${row}`}>{row}</div>
        <div className = "row__seats-list">
          { this.CreateRow(row, seats) }
        </div>
        <div className = "row__right-number" title = {`row ${row}`}>{row}</div>
      </div>
    )
  }
}

export default Row;
