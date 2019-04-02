import React from 'react'
import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js'
import Shedule from '../Shedule/Shedule.js'
import { connect } from 'react-redux'
import {getCards, getTickets} from '../../actions/index.js'

class ChooseSeanse extends React.Component {
  componentWillMount() {
    this.props.onGetAllCards();
    this.props.onGetAllTickets();
  }
  render() {
    return (
      this.props.allCards.length && this.props.allSelectedSeats &&
       <div className = "choose-seanse">
        <TopNavBar/>
        <Shedule id = {this.props.match.params.id} films = {this.props.allCards} seanses = {this.props.allSelectedSeats}/> 
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

export default connect(mapStateToProps,mapDispatchToProps)(ChooseSeanse);