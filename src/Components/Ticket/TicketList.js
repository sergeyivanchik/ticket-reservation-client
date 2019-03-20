import React from 'react';
import { connect } from  'react-redux';
import Ticket from './Ticket.js';
import './TicketList.scss';

class TicketList extends React.Component {
    render() {
        const ticket = this.props.selectedSeats;
        return (
            <div className = "tickets-list">
                {ticket.map((ticket) => 
                <Ticket row = {ticket.split(',')[0]} seat = {ticket.split(',')[1]} price = {ticket.split(',')[2]} ticket = {this.props} key = {ticket} />
                )}
            </div>
        )
    }
}

const mapStateToProps = store => {
    return({
    selectedSeats: store.selectTicket.selectedSeats,
    allCards: store.getAllCards.allCards
  })}

export default connect(mapStateToProps)(TicketList);