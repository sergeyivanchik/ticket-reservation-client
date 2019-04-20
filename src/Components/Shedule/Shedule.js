import React from 'react';

import SelectedMovie from './SelectedMovie/SelectedMovie.js';
import SessionsList from './Sessions/SessionsList.js';


class Shedule extends React.Component {
  render() {
    const {movie, moviesList, sessionsList} = this.props;
    return (
      <div className="shedule">
        <SelectedMovie movie={movie} moviesList={moviesList} />
        <SessionsList movie={movie} sessionsList={sessionsList}/>
      </div>
    )
  }
}

export default Shedule;
