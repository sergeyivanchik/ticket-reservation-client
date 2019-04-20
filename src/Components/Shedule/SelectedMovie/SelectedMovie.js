import React from 'react';

import './SelectedMovie.scss';


class SelectedMovie extends React.Component {
  render() {
    const selectedMovie = this.props.moviesList.find(movie => movie.id === this.props.movie)
    return (
      <div className = "selected-movie" > 
        <img src = {selectedMovie.poster} alt = {selectedMovie.poster} className = "selected-movie__img"></img>
        <div className = "selected-movie__description">
          <p className = "selected-movie__movie-title">
            {selectedMovie.name}
          </p>
          <p className = "selected-movie__movie-info">
          {selectedMovie.description}
          </p>
        </div>
      </div>
    )
  }
}

export default SelectedMovie; 
