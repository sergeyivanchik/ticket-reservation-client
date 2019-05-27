import React from 'react';
import { Link } from 'react-router-dom';

import Choice from './Choice/Choice.js';
import SeatsList from './Row/SeatsList.js';
import Button from '@material-ui/core/Button';
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
          chooseSeat={this.props.selectTicket}
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
        <Link to={ `/confirm-ticket/`+
          `${this.props.movie}/`+
          `${this.props.date}/`+
          `${this.props.cinema}/`+
          `${this.props.hall}/`+
          `${this.props.time}`
        }>
          <Button 
            variant="contained" 
            color="primary"
            className="hall__button"
            disabled={(this.props.selectedTickets.length > countOfTickets || this.props.selectedTickets.length === 0) ? true : false}
          >
            Buy
          </Button>
        </Link>
      </div>
    )
  }
}

export default Hall;
