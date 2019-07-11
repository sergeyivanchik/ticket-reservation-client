import React from 'react';

import CinemaList from './CinemaList.js';
import { getCinemasByMovieAndDate, convertDate } from '../../../functions/index.js'


class DateList extends React.Component {
  render() {
    const { date, movie, sessionsList } = this.props;
    return (
      <div className="session-date">
        <div className="session-date__date">
          {convertDate(date)}
        </div> 
        
          {getCinemasByMovieAndDate(movie, date, sessionsList).map(cinema =>
            <CinemaList
              cinemaId={cinema}
              movie={movie}
              date={date}
              sessionsList={sessionsList}
              key={movie+date+cinema}
            />
          )}
      </div>
    )
  }
}

export default DateList;
