import React from 'react';
import { Link } from 'react-router-dom';

import Choice from './Choice/Choice.js';
import SeatsList from './Row/SeatsList.js';
import Legend from './Legend/Legend.js';
import Button from '@material-ui/core/Button';
import './Hall.scss';


class Hall extends React.Component {
  render() { 
    const countOfSelectedSeats = 6;
    const { selectSeats, hallSeats, chooseSeat, movieId, cinemaId, hall, date } = this.props;
    return (
      <div className="hall">
        <div className="hall__screen">Screen</div>
        <SeatsList
          selectSeats={selectSeats}
          hallSeats={hallSeats}
          chooseSeat={chooseSeat}
        />
        <Legend/>

        <div className="hall__choice">
          <label className="hall__choice-text">Your choice:</label>
          <div className="hall__choice-list">
            {selectSeats.map(selectedSeat =>
              <Choice
                row={selectedSeat.row}
                seat={selectedSeat.seat}
                price={selectedSeat.price}
                key={selectedSeat}
              />
            )}
          </div>

          <div className={`hall__cost ${(!selectSeats.length) ? 'hall__cost_hidden' : ''}`}>
            Cost: {selectSeats.reduce((sum, ticket) => 
              sum + ticket.price, 0)} $
          </div>

          <Link to={`/confirm-ticket/${movieId}/${cinemaId}/${hall}/${date}`} className='hall__link-to'>
            <Button 
              variant="contained" 
              color="primary"
              className={`hall__button ${(!selectSeats.length) ? 'hall__button_hidden' : ''}`}
              disabled={(selectSeats.length > countOfSelectedSeats) ? true : false}
            >
              Buy
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Hall;
