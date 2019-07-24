import React from 'react';

import Row from './Row.js';
import './SeatsList.scss';


class SeatsList extends React.Component {
  render() {
    const { selectedSeats, hallSeats, movie, cinema, hall, user, boughtSeats, session } = this.props;
    return (
      <div className="rows-list">
        {hallSeats.map(hallRow =>
          <Row
            user={user}
            hallRow={hallRow}
            selectedSeats={selectedSeats}
            boughtSeats={boughtSeats}
            key={hallRow.row}
            movie={movie}
            cinema={cinema}
            session={session}
            hall={hall}
          />
        )}
      </div>
    )
  }
}

export default SeatsList;
