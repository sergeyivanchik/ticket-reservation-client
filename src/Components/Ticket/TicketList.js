import React from 'react';

import Ticket from './Ticket.js';
import './TicketList.scss';

class TicketList extends React.Component {
  render() {
    const { selectSeats, date, hall, movieId, cinemaId, allMovies, allCinemas} = this.props;
    return (
      <div className="tickets-list">
        {selectSeats.map(ticket =>
          <Ticket
            row={ticket.row}
            seat={ticket.seat}
            price={ticket.price}
            date={date}
            hall={hall}
            movieId={movieId}
            cinemaId={cinemaId}
            allMovies={allMovies}
            allCinemas={allCinemas}
            key={ticket}
          />
        )}
      </div>
    )
  }
}

export default TicketList;
