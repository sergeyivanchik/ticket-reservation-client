import React,{Component} from 'react';
import Card from './Card/Card.js';
import './CardList.scss';
import { connect } from 'react-redux';
import {getCards} from '../../actions/index.js';

class CardList extends Component {
  
  componentDidMount() {
    this.props.onGetAllCards();
  };

  render() {
    return (
      <div className="card-list">
        {this.props.allCards.map((card) => <Card card = {card} key = {card.id} />)}
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

export default connect(mapStateToProps,mapDispatchToProps)(CardList)
