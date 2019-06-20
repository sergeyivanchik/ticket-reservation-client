import React from 'react';

import Ticket from './Ticket.js';
import './TicketList.scss';

class TicketList extends React.Component {
  render() {
    const { selectedSeatsByUser, user } = this.props;
    return (
      <div className="tickets-list">
        {selectedSeatsByUser.map(ticket => 
          <Ticket
            user={user}
            row={ticket.row}
            seat={ticket.seat}
            cost={ticket.cost}
            date={ticket.session.date}
            sessionId={ticket.session.id}
            hall={ticket.hall.name}
            hallId={ticket.hall.id}
            movie={ticket.movie.name}
            movieId={ticket.movie.id}
            cinema={ticket.cinema.name}
            cinemaId={ticket.cinema.id}
            key={ticket.id}
            additionalServices={ticket.cinema.additionalServices}
            getAdditionalServices={this.props.getAdditionalServices}
            selectAdditionalService={this.props.selectAdditionalService}
            selectedAdditionalServices={ticket.additionalServices}
          />
        
        )}
      </div>
    )
  }
}

export default TicketList;
