import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import Schedule from '../Schedule/Schedule.js';
import { getCards, getTickets } from '../../actions/index.js';


class MovieProfile extends React.Component {
  componentWillMount() {
    this.props.onGetAllCards();
    this.props.onGetAllTickets();
  }

  render() {
    return (
      this.props.allCards.length && this.props.allSelectedSeats &&
       <div className="choose-session">
        <TopNavBar/>
        <Schedule 
          movie={this.props.match.params.movie} 
          moviesList={this.props.allCards} 
          sessionsList={this.props.allSelectedSeats}
        /> 
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

export default connect(mapStateToProps,mapDispatchToProps)(MovieProfile);
