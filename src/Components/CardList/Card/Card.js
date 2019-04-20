import React from 'react';
import { Link } from 'react-router-dom';

import './Card.scss';

class Card extends React.Component {
  render() {
  const {card} = this.props
  return (
    <div className="card" >
      <img 
        className="card__img" 
        src={card.poster} 
        title={card.name} 
        alt={card.name}>
      </img> 
      <div className="card__movie">
        {card.name}
      </div>
        <div className="card__wrapper-button">
          <Link 
            to={{ pathname: `/movie-profile/${card.id}`}}  
            className="card__button"
          >
            Buy ticket
          </Link>
        </div>
    </div>
  )
}}

export default Card;
