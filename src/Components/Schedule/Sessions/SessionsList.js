import React from 'react';

import DateList from './DateList.js';
import {getDatesByMovie} from '../../../functions/index.js';
import './SessionsList.scss';


class SessionsList extends React.Component {
  render() {
    const { movie, sessionsList } = this.props;
    return (
      <div className="sessions-list">
        {getDatesByMovie(movie.id, sessionsList).map(date => {
          if(new Date().getFullYear() <= new Date(date).getFullYear() 
            && new Date().getMonth() <= new Date(date).getMonth()
            &&  ((new Date().getMonth() <= new Date(date).getMonth() && new Date().getDate() <= new Date(date).getDate())
                  || (new Date().getMonth() < new Date(date).getMonth() && new Date().getDate() >= new Date(date).getDate())
                ))
            return <DateList
                movie={movie.id}
                date={date}
                sessionsList={sessionsList}
                key={date}
              />
        }) 
        }  
      </div> 
    )
  }
}

export default SessionsList;
