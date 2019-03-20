import React,{Component} from 'react'
import Card from './Card/Card.js'
import './CardList.scss'
import { connect } from 'react-redux'
import {getAllCards} from '../../actions/index.js'
import CardDescription from './Card/CardDescription.js'
//import * as axios  from 'axios';

class CardList extends Component {
  componentDidMount() {
    this.props.onGetAllCards(CardDescription);
  }
  render() {
    return (
      <div className="card-list">
        {this.props.allCards.map((card) => <Card selectedFilm = {this.props.selectedFilm} selectFilm = {this.props.onSelectFilm}  card = {card} key = {card.id} />)}
      </div> 
    )
  }
}

const mapStateToProps = store => ({
  allCards: store.getAllCards.allCards
});
const mapDispatchToProps = dispatch => ({
  onGetAllCards(card) {
    dispatch(getAllCards(card))
  }
}
);

export default connect(mapStateToProps,mapDispatchToProps)(CardList)
