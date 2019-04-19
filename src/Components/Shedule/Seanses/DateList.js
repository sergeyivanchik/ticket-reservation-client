import React from 'react';
import CinemaList from './CinemaList.js';
import {getCinemasByFilmAndDate} from '../../../functions/index.js'


class DateList extends React.Component {
  render() {
    const {date, film, seansesList} = this.props
    return (
      <div className = "seanse">
        <div className = "seanse-date">
          <span className = "film-date" >{date}</span>
        </div> 
          {getCinemasByFilmAndDate(film, date, seansesList).map((cinema) => <CinemaList cinema ={cinema} film = {film} date = {date} seansesList = {seansesList} key = {`${film}${date}${cinema}`}/>)} 
      </div>
    )
  }
}

export default DateList