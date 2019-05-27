import React from 'react';
import { Link } from 'react-router-dom';

import { sortTime, getTimesByMovieAndDateAndCinema } from '../../../functions/index.js';


class TimeList extends React.Component {
  deleteTickets = () => {
    this.props.deleteTickets();
  }

  render() {
    const { movie, date, cinema, sessionsList } = this.props;
    return (
      <div className="times-list">
        {sortTime(getTimesByMovieAndDateAndCinema(movie, date, cinema, sessionsList)).map(
          session =>
            <Link to={ `/hall/${movie}/${cinema}/${session.hall}/${date}/${session.time}`
            } 
              key={session.id}
              onClick={() => this.deleteTickets()}
            >
              <span className="times-list__movie-time" title={session.hall}>
                {session.time}
              </span>
            </Link>)}
      </div>
    )
  }
}

export default TimeList;
