import React from 'react';

import { convertDate, convertTime } from '../../functions/index.js';
import './Ticket.scss';
import CheckboxLabel from './CheckboxLabel.js'


class Ticket extends React.Component {
  render() {
    const { ticketInfo, user, getAdditionalServices, selectAdditionalService } = this.props;
    return (
      <div className="ticket">
          <div className="ticket__cinema">{ticketInfo.cinema.name}</div>
          <div className="ticket__movie">
            Movie :<span className="ticket__choice">{ticketInfo.movie.name}</span>
          </div>
          <div className="ticket__date">
            Date :<span className="ticket__choice">{convertDate(ticketInfo.session.date)}</span>
            Time :<span className="ticket__choice">{convertTime(ticketInfo.session.date)}</span>
          </div>
          <div className="ticket__seat">
            Hall :<span className="ticket__choice">{ticketInfo.hall.name}</span>
            Row :<span className="ticket__choice">{ticketInfo.row}</span>
            Seat :<span className="ticket__choice">{ticketInfo.seat}</span>
            Cost :<span className="ticket__choice">{ticketInfo.cost}</span>
          </div>
           <div className="additionalSevices">
              {ticketInfo.cinema.additionalServices 
                ? ticketInfo.cinema.additionalServices.map(service => {
                  return <CheckboxLabel  
                    service={service}
                    getAdditionalServices={getAdditionalServices}
                    ticketInfo={ticketInfo}
                    row={ticketInfo.row}
                    seat={ticketInfo.seat}
                    cost={ticketInfo.cost}
                    hall={ticketInfo.hall.id}
                    user={user}
                    session={ticketInfo.session.id}
                    movie={ticketInfo.movie.id}
                    cinema={ticketInfo.cinema.id}
                    key={ticketInfo.seat + ticketInfo.row + ticketInfo.cost + ticketInfo.hall.id}
                    selectAdditionalService={selectAdditionalService}
                    selectedAdditionalServices={ticketInfo.additionalServices}
                  />
                })
                : ''}
          </div>
        </div>
    )
  }
}

export default Ticket;
