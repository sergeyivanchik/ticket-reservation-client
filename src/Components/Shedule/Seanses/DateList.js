import React from 'react'
import CinemaList from './CinemaList.js'


class DateList extends React.Component {
  convertDate (date)  {
    let convertDate = new Date(+date)
    return `${convertDate.getDate()} ${convertDate.toLocaleString('en', {month: 'long'})}, ${convertDate.toLocaleString('en', {weekday: 'long'})}`.toLowerCase() 
  }
  render() {
    const {dateList} = this.props
    return (
      <div className = "seanse">
        <div className = "seanse-date">
          <span className = "film-date" >{this.convertDate(dateList.date)}</span>
        </div>  
        {dateList.seanses.map((seanse) => <CinemaList date = {dateList.date} id = {this.props.id} cinema={seanse}  key = {`${seanse.cinemaName}${dateList.date}`}/>)}
      </div>
    )
  }
}

export default DateList