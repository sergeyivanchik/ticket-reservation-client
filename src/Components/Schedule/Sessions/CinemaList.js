import React from 'react';

import TimeList from './TimeList.js';


class CinemaList extends React.Component {
  render() {
    const { cinema, date, sessionsList, movie, cinemasList } = this.props
    return(
      <div className="cinemas-list">
        <div className="cinemas-list__cinema-info">
          <span className="cinemas-list__cinema-title">
            {cinemasList.find(cinemaById => cinemaById.id === cinema).name}
          </span>
        </div>
         <TimeList
            date={date}
            cinema={cinema}
            movie={movie}
            sessionsList={sessionsList}
            deleteTickets={this.props.deleteTickets}
            key={`${date}${cinema}`}
          /> 
      </div>
    )
  }
}

export default CinemaList;
