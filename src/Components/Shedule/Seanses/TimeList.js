import React from 'react'
import { Link } from 'react-router-dom'
import {sortTime, getTimesByFilmAndDateAndCinema} from '../../../functions/index.js'

class TimeList extends React.Component {
  render() {
    const {film, date, cinema, seansesList} = this.props;
    return (
      <div className = "time-list">
        {sortTime(getTimesByFilmAndDateAndCinema(film, date, cinema, seansesList)).map((time) => <Link to = {{ pathname: `/choose_seats/${film}/${cinema}/${time.hall}/${date}/${time.time}`}} key = {time.id} > <span className = "film-time" title = {time.hall}> {time.time} </span> </Link> )}
      </div>
    )
  }
}

export default TimeList