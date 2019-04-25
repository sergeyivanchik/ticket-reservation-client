import React from 'react';

import './SelectedMovie.scss';


class SelectedMovie extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="selected-movie" >
        <img
          src={movie.poster}
          alt={movie.name}
          className="selected-movie__poster"
        >
        </img>
        <div className="selected-movie__description">
          <p className="selected-movie__movie-title">
            {movie.name}
          </p>
          <p className="selected-movie__movie-info">
          {movie.description}
          </p>
        </div>
      </div>
    )
  }
}

export default SelectedMovie;
