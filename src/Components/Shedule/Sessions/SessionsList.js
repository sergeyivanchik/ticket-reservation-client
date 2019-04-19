import React from 'react';

import DateList from './DateList.js';
import {getDatesByMovie} from '../../../functions/index.js';
import './SessionsList.scss';


class SessionsList extends React.Component {
  render() {
    const {movie, sessionsList} = this.props;
    return (
      getDatesByMovie(movie, sessionsList).length > 0 ? 
      <div className = "sessions-list">
        {getDatesByMovie(movie, sessionsList).map((date) => <DateList movie = {movie} date = {date} sessionsList = {sessionsList} key ={date}/> ) 
      }  
      </div> : <div className = "no-sessions"> На данный фильм нет сеансов! </div>
    )
  }
}

export default SessionsList;
