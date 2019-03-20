import React from 'react'
import TimeList from './TimeList.js'


class CinemaList extends React.Component {
  render() {
    const {cinema} = this.props
    return(
      <div className = "seanse-info">
        <div className = "cinema-info">
          <span className = "cinema">{cinema.cinemaName}</span> 
        </div>
        <TimeList date ={this.props.date} cinema = {cinema.cinemaName} id = {this.props.id} times={cinema.time} key = {`${cinema.cinemaName}${cinema.time[0]}`} />
      </div>
    )
  }
}

export default CinemaList