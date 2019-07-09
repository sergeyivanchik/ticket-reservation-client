import React from 'react';

import { convertDate, convertTime } from '../../functions/index.js';
import './Ticket.scss';
import CheckboxLabel from './CheckboxLabel.js'


class Ticket extends React.Component {
  render() {
    const { row, seat, cost, date, hall, cinema, movie, additionalServices, user,
      hallId, cinemaId, movieId, sessionId,
      getAdditionalServices, selectAdditionalService, selectedAdditionalServices } = this.props; 
    return (
      <div className="ticket">
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
            Cost :<span className="ticket__choice">{cost}</span>
          </div>
           <div className="additionalSevices">
              {additionalServices 
                ? additionalServices.map(service => {
                  return <CheckboxLabel  
                    service={service}
                    getAdditionalServices={getAdditionalServices}
                    row={row}
                    seat={seat}
                    cost={cost}
                    hall={hallId}
                    user={user}
                    session={sessionId}
                    movie={movieId}
                    cinema={cinemaId}
                    key={seat + row + cost + hallId}
                    selectAdditionalService={selectAdditionalService}
                    selectedAdditionalServices={selectedAdditionalServices}
                  />
                })
                : ''}
          </div>
        </div>
    )
  }
}

export default Ticket;
