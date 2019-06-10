import React from 'react';

import DateList from './DateList.js';
import {getDatesByMovie} from '../../../functions/index.js';
import './SessionsList.scss';


class SessionsList extends React.Component {
  render() {
    const { movie, sessionsList } = this.props;
    return (
      <div className="sessions-list">
        {getDatesByMovie(movie.id, sessionsList).map(date =>
          <DateList
            movie={movie.id}
            date={date}
            sessionsList={sessionsList}
            key={date}
            deleteTickets={this.props.deleteTickets}
          />
        ) 
      }  
      </div> 
    )
  }
}

export default SessionsList;
