import React, { Component } from 'react';

import Card from './Card/Card.js';
import './CardList.scss';

class CardList extends Component {
  render() {
    const { moviesList } = this.props;
    return (
      <div className="card-list">
        {moviesList.map(card => 
            <Card card={card} key={card.id} />
          )
        }
      </div> 
    )
  }
}

export default CardList;
