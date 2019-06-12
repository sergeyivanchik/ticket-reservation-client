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
    const { selectedSeats, hallSeats, onSelectSeat, movie, cinema, hall, user, boughtSeats, session, date } = this.props;
    return (
      <div className="hall">
        <div className="hall__screen">Screen</div>
        <SeatsList
          user={user}
          selectedSeats={selectedSeats}
          hallSeats={hallSeats}
          onSelectSeat={onSelectSeat}
          boughtSeats={boughtSeats}
          movie={movie}
          cinema={cinema}
          session={session}
          hall={hall}
        />
        <Legend/>

        <div className="hall__choice">
          <label className="hall__choice-text">Your choice:</label>
          <div className="hall__choice-list">
            {selectedSeats.filter(seat => seat.user === user).map(selectedSeat => 
              <Choice
                row={selectedSeat.row}
                seat={selectedSeat.seat}
                price={selectedSeat.price}
                key={selectedSeat}
              />
            )}
          </div>

          <div className={`hall__cost ${(!selectedSeats.find(seat => seat.user === user)) ? 'hall__cost_hidden' : ''}`}>
            Cost: {selectedSeats.filter(seat => seat.user === user).reduce((sum, ticket) =>  
              sum + ticket.cost, 0)} $
          </div>

          <Link to={`/confirm-ticket/${movie}/${cinema}/${hall}/${date}`} className='hall__link-to'>
            <Button
              onClick={() => selectedSeats.map(seats => {
               const { row, seat, price } = seats;
               return this.props.buySeats(this.props.sessionId, row, seat, price)
            })}
              variant="contained" 
              color="primary"
              className={`hall__button ${(!selectedSeats.find(seat => seat.user === user)) ? 'hall__button_hidden' : ''}`}
              disabled={(selectedSeats.length > countOfSelectedSeats) ? true : false}
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
