import React from 'react';

import { convertDate, convertTime } from '../../functions/index.js';
import './Ticket.scss';
import CheckboxLabel from './CheckboxLabel.js'


class Ticket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0
    }
  }

  getAdditionalServices = data  => {
    const {sum, checked} = data;
    checked
    ? this.setState(function(prev) {
        return {
          sum: prev.sum + sum
        }
      })
    : this.setState(function(prev) {
        return {
          sum: prev.sum - sum
        }
    })
  }

  render() {
    const { row, seat, cost, date, hall, cinema, movie, hallId, cinemaId, movieId, sessionId, additionalServices, user } = this.props; 
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
              {additionalServices ? additionalServices.map(service => {
                return <CheckboxLabel  
                  service={service}
                  getAdditionalServices={this.props.getAdditionalServices}
                  row={row}
                  seat={seat}
                  cost={cost}
                  hall={hallId}
                  user={user}
                  session={sessionId}
                  movie={movieId}
                  cinema={cinemaId}
                  key={seat + row + cost + hallId}
                  selectAdditionalService={this.props.selectAdditionalService}
                  selectedAdditionalServices={this.props.selectedAdditionalServices}
                />
              }) : ''}
          </div>
        </div>
    )
  }
}

export default Ticket;
