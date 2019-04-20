import React from 'react';
import { connect } from  'react-redux';

import Ticket from './Ticket.js';
import { getCinemas, getCards } from '../../actions/index.js';
import './TicketList.scss';

class TicketList extends React.Component {
    componentDidMount() {
        this.props.onGetAllCinemas();
        this.props.onGetAllCards();
    }
    render() {
        const ticket = this.props.selectedSeats;
        return (
            this.props.allCinemas.length && this.props.allCards.length &&
            <div className = "tickets-list">
                {ticket.map(ticket => 
                    <Ticket 
                        row = {ticket.split(',')[0]} 
                        seat = {ticket.split(',')[1]} 
                        price = {ticket.split(',')[2]} 
                        ticket = {this.props} 
                        hall = {this.props.match.params.hall}  
                        key = {ticket} 
                    />
                )}
            </div>
        )
    }
}

const mapStateToProps = store => {
    return({
    selectedSeats: store.selectTicket.selectedSeats,
    allCards: store.getAllCards.allCards,
    allCinemas : store.getAllCinemas.allCinemas
  })}

  const mapDispatchToProps = dispatch => ({
    onGetAllCinemas() {
      dispatch(getCinemas())
    },
    onGetAllCards() {
        dispatch(getCards())
      }
  });

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
