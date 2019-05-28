import React, { Component } from 'react';

import Card from './Card/Card.js';
import './CardList.scss';

class CardList extends Component {
  render() {
    const { moviesList } = this.props;
    const amountOfCards = 6;
    return (
      <div className="card-list">
        {moviesList.slice(moviesList.length > amountOfCards ?
          moviesList.length - amountOfCards : 0).map(card => 
            <Card card={card} key={card.id} />
          )
        }
      </div> 
    )
  }
}

export default CardList;
