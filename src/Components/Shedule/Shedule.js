import React from 'react';

import SelectedFilm from './SelectedFilm/SelectedFilm.js';
import SessionsList from './Sessions/SessionsList.js';


class Shedule extends React.Component {
  render() {
    const {film, filmsList, sessionsList} = this.props;
    return (
      <div className = "shedule">
        <SelectedFilm film = {film} filmsList = {filmsList} />
        <SessionsList film = {film} sessionsList = {sessionsList}/>
      </div>
    )
  }
}

export default Shedule;
