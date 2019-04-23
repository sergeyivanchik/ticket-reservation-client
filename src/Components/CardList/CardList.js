import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './Card/Card.js';
import { getCards } from '../../actions/cards.js';
import './CardList.scss';

class CardList extends Component {
  componentDidMount() {
    this.props.onGetAllCards();
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
  allCards: store.getAllCards.allCards
});

const mapDispatchToProps = dispatch => ({
  onGetAllCards() {
    dispatch(getCards())
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(CardList);
