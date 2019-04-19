import React from 'react';
import { Link } from 'react-router-dom';

import { sortTime, getTimesByFilmAndDateAndCinema } from '../../../functions/index.js';


class TimeList extends React.Component {
  render() {
    const {film, date, cinema, sessionsList} = this.props;
    return (
      <div className = "time-list">
        {sortTime(getTimesByFilmAndDateAndCinema(film, date, cinema, sessionsList)).map((time) => <Link to = {{ pathname: `/hall/${film}/${cinema}/${time.hall}/${date}/${time.time}`}} key = {time.id} > <span className = "film-time" title = {time.hall}> {time.time} </span> </Link> )}
      </div>
    )
  }
}

export default TimeList;
