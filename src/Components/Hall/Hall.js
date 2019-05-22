import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Choice from './Choice/Choice.js';
import SeatsList from './Row/SeatsList.js';
import { selectTicket } from '../../actions/tickets.js';
import './Hall.scss';


class Hall extends React.Component {
  render() { 
    const countOfTickets = 6;
    return (
      <div className="hall">
        <SeatsList
          selectedTickets={this.props.selectedTickets}
          seats={this.props.seats}
          hallSeats={this.props.hallSeats}
          chooseSeat={this.props.onSelectTicket}
        />
        <label className="hall__choice">Your choice:</label>
        <div className="hall__choice-list">
          {this.props.selectedTickets.map(selectedSeat =>
            <Choice
              row={selectedSeat.row}
              seat={selectedSeat.seat}
              price={selectedSeat.price}
              key={selectedSeat}
            />
          )}
        </div>
        <div>
            Cost: {this.props.selectedTickets.reduce((sum, ticket) => 
             sum + (+ticket.price), 0)} rub
        </div>
        <Link to={{ pathname: `/confirm-ticket/`+
          `${this.props.movie}/`+
          `${this.props.date}/`+
          `${this.props.cinema}/`+
          `${this.props.hall}/`+
          `${this.props.time}`
        }}>
          <button
            className='buy'
            disabled={(this.props.selectedTickets.length > countOfTickets || this.props.selectedTickets.length === 0) ? true : false}
          >
            Buy
          </button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return ({
  selectedTickets: store.getTickets.selectedTickets
})}

const mapDispatchToProps = dispatch => ({
  onSelectTicket(ticket) {
    dispatch(selectTicket(ticket))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Hall);
