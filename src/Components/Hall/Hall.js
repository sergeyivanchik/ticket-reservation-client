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
          selectSeats={this.props.selectSeats}
          hallSeats={this.props.hallSeats}
          chooseSeat={this.props.chooseSeat}
          boughtSeats={this.props.boughtSeats}
        />
        <label className="hall__choice">Your choice:</label>
        <div className="hall__choice-list">
          {this.props.selectSeats.map(selectedSeat =>
            <Choice
              row={selectedSeat.row}
              seat={selectedSeat.seat}
              price={selectedSeat.price}
              key={selectedSeat}
            />
          )}
        </div>
        <div className='hall__cost'>
          Cost: {this.props.selectSeats.reduce((sum, ticket) => 
            sum + ticket.price, 0)} $
        </div>
        <Link to={`/confirm-ticket/${this.props.movieId}/${this.props.cinemaId}/${this.props.hall}/${this.props.date}`}
          className='hall__link-to'>
          <Button 
            variant="contained" 
            color="primary"
            className="hall__button"
            disabled={(this.props.selectSeats.length > countOfTickets || !this.props.selectSeats.length) ? true : false}
          >
            Buy
          </Button>
        </Link>
      </div>
    )
  }
}

export default Hall;
