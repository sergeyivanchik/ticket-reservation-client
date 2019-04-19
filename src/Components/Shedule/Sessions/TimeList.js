import React from 'react';
import { Link } from 'react-router-dom';

import { sortTime, getTimesByMovieAndDateAndCinema } from '../../../functions/index.js';


class TimeList extends React.Component {
  render() {
    const {movie, date, cinema, sessionsList} = this.props;
    return (
      <div className = "time-list">
        {sortTime(getTimesByMovieAndDateAndCinema(movie, date, cinema, sessionsList)).map((time) => <Link to = {{ pathname: `/hall/${movie}/${cinema}/${time.hall}/${date}/${time.time}`}} key = {time.id} > <span className = "movie-time" title = {time.hall}> {time.time} </span> </Link> )}
      </div>
    )
  }
}

export default TimeList;
