import React from 'react';

import Ticket from './Ticket.js';
import './TicketList.scss';

class TicketList extends React.Component {
    render() {
        const { 
            selectedTickets,
            date,
            time,
            hall,
            movieId,
            cinemaId,
            allMovies,
            allCinemas
        } = this.props;
        return (
            <div className="tickets-list">
                {selectedTickets.map(ticket =>
                    <Ticket
                        row={ticket.row}
                        seat={ticket.seat}
                        price={ticket.price}
                        date={date}
                        time={time}
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
