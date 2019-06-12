import React from 'react';
import { Link } from 'react-router-dom';

import { sortTime, getTimesByMovieAndDateAndCinema, convertTime } from '../../../functions/index.js';


class TimeList extends React.Component {
  deleteTickets = () => {
    this.props.deleteTickets();
  }

  render() {
    const { movie, date, cinemaId, sessionsList } = this.props;
    return (
      <div className="sessions-time">
        {sortTime(getTimesByMovieAndDateAndCinema(movie, date, cinemaId, sessionsList)).map(
          session =>
            <Link to={ `/hall/${session.id}/${movie}/${cinemaId}/${session.hallId}/${date}`
            } 
              key={session.id}
              onClick={() => this.deleteTickets()}
              className='sessions-time__link-to'
            >
              <span className="sessions-time__time" title={session.hall}>
                {convertTime(session.time)}
              </span>
            </Link>)}
      </div>
    )
  }
}

export default TimeList;
