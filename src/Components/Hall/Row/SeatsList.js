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
            selectSeats={this.props.selectSeats}
            amountOfSeats={hallRow.countOfSeats}
            chooseSeat={this.props.chooseSeat}
            price={hallRow.cost}
            sessionId={this.props.sessionId}
            sessionsList={this.props.sessionsList}
            key={hallRow.row}
          />
        )}
      </div>
    )
  }
}

export default SeatsList;
