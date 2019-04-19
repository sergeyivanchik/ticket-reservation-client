import React from 'react';

import DateList from './DateList.js';
import {getDatesByFilm} from '../../../functions/index.js';
import './SeansesList.scss';;


class SeansesList extends React.Component {
  render() {
    const {film, seansesList} = this.props;
    return (
      getDatesByFilm(film, seansesList).length > 0 ? 
      <div className = "seanses-list">
        {getDatesByFilm(film, seansesList).map((date) => <DateList film = {film} date = {date} seansesList = {seansesList} key ={date}/> ) }  
      </div> : <div className = "no-seanses"> На данный фильм нет сеансов!</div>
    )
  }
}

export default SeansesList;
