import React from 'react';

import Row from './Row.js';
import './SeatsList.scss';


class SeatsList extends React.Component {
  render() {
    return(
      <div className = "rows-list">
        {this.props.hallSeats.map(row => <Row row = {row.row} selectedSeats = {this.props.selectedSeats} colSeat = {this.props.seats} seats = {row.countOfSeats} chooseSeat = {this.props.chooseSeat} price = {row.cost.toString()} key = {row.row} />)}
      </div>
    )
  }
}

export default SeatsList;
