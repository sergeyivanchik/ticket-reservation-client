import React from 'react';

import './Ticket.scss';


class Ticket extends React.Component {
    render() {
        const { 
            row,
            seat,
            price,
            date,
            time,
            hall,
            allCinemas,
            allMovies,
            cinemaId,
            movieId 
        } = this.props; 
        const cinema = allCinemas.find(cinema =>
            cinema.id === cinemaId).name;
        const movie = allMovies.find(movie =>
            movie.id === movieId).name;   
        return (
            <div className="ticket">
                <div className="ticket__info">
                    <div className="ticket__cinema">
                        {cinema}
                    </div>
                    <div className="ticket__movie">
                        <span>Movie:
                            <span className="ticket__choice">
                                {movie}
                            </span>
                        </span>
                    </div>
                    <div className="ticket__date">
                        <span>Date :
                            <span className="ticket__choice">
                                {date}
                            </span>
                        </span>
                        <span>Time :
                            <span className="ticket__choice">
                                {time}
                            </span>
                        </span>
                    </div>
                    <div className="ticket__seat">
                        <span>Hall :
                            <span className="ticket__choice">
                                {hall}
                            </span>
                        </span>
                        <span>Row :
                            <span className="ticket__choice">
                                {row}
                            </span>
                        </span>
                        <span>Seat :
                            <span className="ticket__choice">
                                {seat}
                            </span>
                        </span>
                        <span>Price :
                            <span className="ticket__choice">
                                {price}
                            </span>
                        </span>
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
