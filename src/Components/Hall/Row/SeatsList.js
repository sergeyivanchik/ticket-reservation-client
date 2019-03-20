import React from 'react'
import Row from './Row.js'
import RowsInfo from './RowsInfo.js'
import './SeatsList.scss'


class SeatsList extends React.Component {
  render() {
    return(
      <div className = "rows-list">
        {RowsInfo.map((rowInfo) => <Row row = {rowInfo.row} selectedSeats = {this.props.selectedSeats}  seats = {rowInfo.coutPlaces} chooseSeat = {this.props.chooseSeat} price = {rowInfo.price} key = {rowInfo.row} />)}
      </div>
    )
  }
}


export default SeatsList