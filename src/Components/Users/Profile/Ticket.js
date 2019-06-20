import React from 'react';

import { convertDate } from '../../../functions/index.js';
import { millisecondsToMinutes }from '../../../functions/index.js';


class Ticket extends React.Component {
  render() {
    const { movie, date, city, cinema, hall, row, seat, cost, poster, additionalServices, duration } = this.props;
    const additionalCost = additionalServices 
    ? additionalServices.reduce((sum, service) => sum + service.cost, 0) : 0
    return (
      <div className="user-ticket">
        <img
          className="user-ticket__poster"
          src={poster}
          title={poster}
          alt={poster}
        />
        <div className="user-ticket__info">
          <span className="user-ticket__movie">{movie}</span>
          <span>Duration: {millisecondsToMinutes(duration)} m </span>
          <span>Date: {convertDate(date)}</span>
          <span>City: {city}</span>
          <span>Cinema: {cinema}</span>
          <span>Hall: {hall}</span>
          <span>Row: {row}</span>
          <span>Seat: {seat}</span>
          <span>Addition services:</span>
          {additionalServices.length
            ? additionalServices.map(service => <span>{service.name}: {service.cost} $</span>)
            : 'No additional services!'
          }
          <span>Total cost: {cost + additionalCost} $</span>
        </div>
      </div>
    )
  }
}

export default Ticket;
