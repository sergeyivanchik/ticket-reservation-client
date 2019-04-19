import React from 'react'
import './SelectedFilm.scss'



class SelectedFilm extends React.Component {
  
  render() {
    const selectedFilm = this.props.films.find((film) => film.id === this.props.id)
    return (
      <div className = "selected-film" > 
        <img src = {selectedFilm.poster} alt = {selectedFilm.poster} className = "selected-film__img"></img>
        <div className = "selected-film__description">
          <p className = "selected-film__film-title">
            {selectedFilm.name}
          </p>
          <p className = "selected-film__film-info">
          {selectedFilm.description}
          </p>
        </div>
      </div>
    )
  }
}


export default SelectedFilm; 