import React from 'react';

import { convertDate, convertTime } from '../../functions/index.js';
import './Ticket.scss';


class Ticket extends React.Component {
  render() {
    const { row, seat, price, date, hall, allCinemas, allMovies, cinemaId, movieId } = this.props; 
    const cinema = allCinemas.find(cinema => cinema.id === cinemaId).name;
    const movie = allMovies.find(movie => movie.id === movieId).name;   
    return (
      <div className="ticket">
        <div className="ticket__info">
          <div className="ticket__cinema">{cinema}</div>
          <div className="ticket__movie">
            Movie :<span className="ticket__choice">{movie}</span>
          </div>
          <div className="ticket__date">
            Date :<span className="ticket__choice">{convertDate(date)}</span>
            Time :<span className="ticket__choice">{convertTime(date)}</span>
          </div>
          <div className="ticket__seat">
            Hall :<span className="ticket__choice">{hall}</span>
            Row :<span className="ticket__choice">{row}</span>
            Seat :<span className="ticket__choice">{seat}</span>
            Price :<span className="ticket__choice">{price}</span>
          </div>
          </div>
            <div className="ticket__control">
              <p className="ticket__text-control">Control</p>
            </div>
      </div>
    )
  }
}

export default Ticket;
