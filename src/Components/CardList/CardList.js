import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './Card/Card.js';
import { getCardsAsync } from '../../actions/cards.js';
import './CardList.scss';

class CardList extends Component {
  componentDidMount() {
    this.props.onGetCards();
  };

  render() {
    return (
      <div className="card-list">
        {this.props.allCards.map(card => 
          <Card card = {card} key = {card.id} />
        )}
      </div> 
    )
  }
}

const mapStateToProps = store => ({
  allCards: store.getCards.allCards
});

const mapDispatchToProps = dispatch => ({
  onGetCards() {
    dispatch(getCardsAsync())
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(CardList);
