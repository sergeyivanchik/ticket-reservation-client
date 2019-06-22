import React from 'react';
import { Link } from 'react-router-dom';

import { sortTime, getTimesByMovieAndDateAndCinema, convertTime } from '../../../functions/index.js';


class TimeList extends React.Component {
  render() {
    const { movie, date, cinemaId, sessionsList } = this.props;
    const currentTime = new Date().getTime();
    return (
      <div className="sessions-time">
        {sortTime(getTimesByMovieAndDateAndCinema(movie, date, cinemaId, sessionsList)).map(
          session =>
            <Link to={ `/hall/${session.id}/${movie}/${cinemaId}/${session.hallId}/${date}`
            } 
              key={session.id}
              className={`sessions-time__link ${currentTime > session.time ? `sessions-time__link_end` : ``}`}
            >
              <span className={`sessions-time__time ${currentTime > session.time ? `sessions-time__time_end` : ``}`} 
                title={session.hall}>
                {convertTime(session.time)}
              </span>
            </Link>
        )}
      </div>
    )
  }
}

export default TimeList;
