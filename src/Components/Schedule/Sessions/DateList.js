import React from 'react';

import CinemaList from './CinemaList.js';
import { getCinemasByMovieAndDate } from '../../../functions/index.js'


class DateList extends React.Component {
  render() {
    const { date, movie, sessionsList, cinemasList } = this.props
    return (
      <div className="session">
        <div className="session-date">
          <span>{date}</span>
        </div> 
          {getCinemasByMovieAndDate(movie, date, sessionsList).map(cinema =>
            <CinemaList
              cinema={cinema}
              movie={movie}
              date={date}
              sessionsList={sessionsList}
              cinemasList={cinemasList}
              key={`${movie}${date}${cinema}`}
            />
          )}
      </div>
    )
  }
}

export default DateList;