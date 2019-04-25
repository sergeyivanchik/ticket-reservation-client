import React from 'react';

import Ticket from './Ticket.js';
import './TicketList.scss';

class TicketList extends React.Component {
    render() {
        const { 
            selectedSeats,
            date,
            time,
            hall,
            movieId,
            cinemaId,
            allMovies,
            allCinemas
        } = this.props;
        return (
            <div className = "tickets-list">
                {selectedSeats.map(ticket =>
                    <Ticket
                        row={ticket.split(',')[0]}
                        seat={ticket.split(',')[1]}
                        price={ticket.split(',')[2]}
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
