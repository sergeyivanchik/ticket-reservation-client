import React from 'react';

import DateList from './DateList.js';
import {getDatesByFilm} from '../../../functions/index.js';
import './SessionsList.scss';


class SessionsList extends React.Component {
  render() {
    const {film, sessionsList} = this.props;
    return (
      getDatesByFilm(film, sessionsList).length > 0 ? 
      <div className = "sessions-list">
        {getDatesByFilm(film, sessionsList).map((date) => <DateList film = {film} date = {date} sessionsList = {sessionsList} key ={date}/> ) }  
      </div> : <div className = "no-sessions"> На данный фильм нет сеансов!</div>
    )
  }
}

export default SessionsList;
