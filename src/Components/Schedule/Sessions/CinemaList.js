import React from 'react';

import TimeList from './TimeList.js';


class CinemaList extends React.Component {
  render() {
    const { cinemaId, date, sessionsList, movie, cinemasList } = this.props;
    return(
      <div className="cinemas-list">
        <div className="cinemas-list__cinema-info">
          <span className="cinemas-list__cinema-title">
            {cinemasList.find(cinema => cinema.id === cinemaId).name}
          </span>
        </div>
         <TimeList
            date={date}
            cinemaId={cinemaId}
            movie={movie}
            sessionsList={sessionsList}
            deleteTickets={this.props.deleteTickets}
            key={`${date}${cinemaId}`}
          /> 
      </div>
    )
  }
}

export default CinemaList;
