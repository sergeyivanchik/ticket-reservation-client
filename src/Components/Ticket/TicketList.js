import React from 'react';
import { connect } from  'react-redux';

import Ticket from './Ticket.js';
import {  getCardsAsync } from '../../actions/cards.js';
import { getCinemasAsync } from '../../actions/cinemas.js';
import './TicketList.scss';

class TicketList extends React.Component {
    componentDidMount() {
        this.props.onGetCinemas();
        this.props.onGetCards();
    }
    
    render() {
        const ticket = this.props.selectedSeats;
        return (
            this.props.allCinemas.length && this.props.allCards.length &&
            <div className = "tickets-list">
                {ticket.map(ticket =>
                    <Ticket
                        row={ticket.split(',')[0]}
                        seat={ticket.split(',')[1]}
                        price={ticket.split(',')[2]}
                        ticket={this.props}
                        hall={this.props.match.params.hall}
                        key={ticket}
                    />
                )}
            </div>
        )
    }
}

const mapStateToProps = store => {
    return({
    selectedSeats: store.selectTicket.selectedSeats,
    allCards: store.getCards.allCards,
    allCinemas : store.getCinemas.allCinemas
  })}

  const mapDispatchToProps = dispatch => ({
    onGetCinemas() {
      dispatch(getCinemasAsync())
    },
    onGetCards() {
        dispatch(getCardsAsync())
      }
  });

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
