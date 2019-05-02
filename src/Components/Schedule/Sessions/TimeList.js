import React from 'react';
import { Link } from 'react-router-dom';

import { sortTime, getTimesByMovieAndDateAndCinema } from '../../../functions/index.js';


class TimeList extends React.Component {
  render() {
    const { movie, date, cinema, sessionsList } = this.props;
    return (
      <div className="time-list">
        {sortTime(getTimesByMovieAndDateAndCinema(movie, date, cinema, sessionsList)).map(
          session =>
            <Link to={{ pathname: `/hall/`+
              `${movie}/`+
              `${cinema}/`+
              `${session.hall}/`+
              `${date}/`+
              `${session.time}`
            }} 
              key={session.id}
            >
              <span className="movie-time" title={session.hall}>
              {session.time}
              </span>
            </Link>)}
      </div>
    )
  }
}

export default TimeList;
