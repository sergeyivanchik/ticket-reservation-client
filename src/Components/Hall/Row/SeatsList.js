import React from 'react';

import Row from './Row.js';
import './SeatsList.scss';


class SeatsList extends React.Component {
  render() {
    return (
      <div className="rows-list">
        {this.props.hallSeats.map(hallRow =>
          <Row
            row={hallRow.row}
            selectedTickets={this.props.selectedTickets}
            amountOfSeats={this.props.seats}
            seats={hallRow.countOfSeats}
            chooseSeat={this.props.chooseSeat}
            price={hallRow.cost}
            key={hallRow.row}
          />
        )}
      </div>
    )
  }
}

export default SeatsList;
