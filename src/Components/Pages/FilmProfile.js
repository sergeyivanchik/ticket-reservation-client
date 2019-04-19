import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import Shedule from '../Shedule/Shedule.js';
import { getCards, getTickets } from '../../actions/index.js';


class FilmProfile extends React.Component {
  componentWillMount() {
    this.props.onGetAllCards();
    this.props.onGetAllTickets();
  }

  render() {
    return (
      this.props.allCards.length && this.props.allSelectedSeats &&
       <div className = "choose-seanse">
        <TopNavBar/>
        <Shedule film = {this.props.match.params.film} filmsList = {this.props.allCards} seansesList = {this.props.allSelectedSeats}/> 
      </div>
    )
           
  }
}
const mapStateToProps = store => ({
  allCards: store.getAllCards.allCards,
  allSelectedSeats: store.getAllTicket.allSelectedSeats
});

const mapDispatchToProps = dispatch => ({
  onGetAllCards() {
    dispatch(getCards())
  },
  onGetAllTickets() {
    dispatch(getTickets())
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(FilmProfile);
