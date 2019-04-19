import React from 'react';

import './Ticket.scss';


class Ticket extends React.Component {
    render() {
        return (
            <div className = "ticket">
                <div className = "ticket__info">
                    <div className = "ticket__cinema">
                        {this.props.ticket.allCinemas.find( cinema => cinema.id === this.props.ticket.match.params.cinema).name}
                    </div>
                    <div className = "ticket__movie">
                        <span>Movie : <span className = "ticket__choise">{this.props.ticket.allCards.find( movie => movie.id === this.props.ticket.match.params.id).name}</span></span>
                    </div>
                    <div className = "ticket__date">
                        <span>Date : <span className = "ticket__choise">{this.props.ticket.match.params.date}</span></span> <span>Time : <span className = "ticket__choise">{this.props.ticket.match.params.time}</span></span>
                    </div>
                    <div className = "ticket__seat">
                        <span>Hall : <span className = "ticket__choise">{this.props.hall}</span> </span>
                        <span>Row : <span className = "ticket__choise">{this.props.row}</span> </span>
                        <span>Seat : <span className = "ticket__choise">{this.props.seat}</span></span>
                        <span>Price : <span className = "ticket__choise">{this.props.price}</span></span>
                    </div>
                </div>    
                <div className = "ticket__control">
                   <p className = "ticket__text-control"> Control</p>
                </div>
            </div>
        )
    }
}

export default Ticket;
