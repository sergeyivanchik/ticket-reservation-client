import React from 'react'
import './SelectedFilm.scss'
import { connect } from 'react-redux'


class SelectedFilm extends React.Component {
  render() {
  const selectedFilm = this.props.allCards.find((film) => film.id === +this.props.id)
    return (
      <div className = "selected-film" > 
        <img src = {selectedFilm.img} alt = {selectedFilm.img} className = "selected-film__img"></img>
        <div className = "selected-film__description">
          <p className = "selected-film__film-title">
            {selectedFilm.film}
          </p>
          <p className = "selected-film__film-info">
          {selectedFilm.description}
          </p>
        </div>
      </div>
    )
  }
}
const mapStateToProps = store => ({
  allCards: store.getAllCards.allCards
});

export default connect(mapStateToProps)(SelectedFilm); 