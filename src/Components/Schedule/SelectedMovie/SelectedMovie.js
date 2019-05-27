import React from 'react';

import './SelectedMovie.scss';


class SelectedMovie extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie" >
        <img
          src={movie.poster}
          alt={movie.name}
          className="movie__poster"
        >
        </img>
        <div className="movie__info">
          <p className="movie__title">
            {movie.name}
          </p>
          <p className="movie__description">
            {movie.description}
          </p>
        </div>
      </div>
    )
  }
}

export default SelectedMovie;
