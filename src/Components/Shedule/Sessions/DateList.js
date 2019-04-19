import React from 'react';

import CinemaList from './CinemaList.js';
import { getCinemasByFilmAndDate } from '../../../functions/index.js'


class DateList extends React.Component {
  render() {
    const {date, film, sessionsList} = this.props
    return (
      <div className = "session">
        <div className = "session-date">
          <span className = "film-date" >{date}</span>
        </div> 
          {getCinemasByFilmAndDate(film, date, sessionsList).map((cinema) => <CinemaList cinema ={cinema} film = {film} date = {date} sessionsList = {sessionsList} key = {`${film}${date}${cinema}`}/>)} 
      </div>
    )
  }
}

export default DateList;