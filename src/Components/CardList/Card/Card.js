import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Card.scss'

class Card extends React.Component {
  render() {
  const {card} = this.props
  return (
    <div className = "card" >
      <img className = "card__img" src = {card.img}  title = {card.film} alt = {card.film}></img> 
      <div className = "card__film">
        {card.film}
      </div>
        <div className="card__wrapper-button">
          <Link to={{ pathname: `/choose_film/${card.id}`}} className= {`card__button`}>Buy ticket</Link>
        </div>
    </div>
  )
}}

Card.propTypes = {
  card: PropTypes.object.isRequired,
}

export default Card