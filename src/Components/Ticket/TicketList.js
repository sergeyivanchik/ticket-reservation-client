import React from 'react';

import Ticket from './Ticket.js';
import './TicketList.scss';

class TicketList extends React.Component {
  render() {
    const { selectedSeatsByUser, user, getAdditionalServices, selectAdditionalService,  } = this.props;
    return (
      <div className="tickets-list">
        {selectedSeatsByUser.map(ticket => 
          <Ticket
            user={user}
            ticketInfo={ticket}
            key={ticket.id}
            getAdditionalServices={getAdditionalServices}
            selectAdditionalService={selectAdditionalService}
          />
        
        )}
      </div>
    )
  }
}

export default TicketList;
