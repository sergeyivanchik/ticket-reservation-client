import React from 'react'
import Row from './Row.js'
import RowsInfo from './RowsInfo.js'
import './SeatsList.scss'


class SeatsList extends React.Component {
  render() {
    return(
      <div className = "rows-list">
        {this.props.hallSeats.map((rowInfo) => <Row row = {rowInfo.row} selectedSeats = {this.props.selectedSeats} colSeat = {this.props.seats} seats = {rowInfo.countOfSeats} chooseSeat = {this.props.chooseSeat} price = {rowInfo.cost} key = {rowInfo.row} />)}
      </div>
    )
  }
}


export default SeatsList