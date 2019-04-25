import React from 'react';

import SelectedMovie from './SelectedMovie/SelectedMovie.js';
import SessionsList from './Sessions/SessionsList.js';


class Schedule extends React.Component {
  render() {
    const { movie, sessionsList, cinemasList } = this.props;
    return (
      <div className="schedule">
        <SelectedMovie
          movie={movie}
        />
        <SessionsList
          movie={movie}
          sessionsList={sessionsList}
          cinemasList={cinemasList}
        />
      </div>
    )
  }
}

export default Schedule;
