import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Choice from './Choice/Choice.js';
import SeatsList from './Row/SeatsList.js';
import { selectTicket } from '../../actions/tickets.js';
import './Hall.scss';


class Hall extends React.Component {
  render() { 
    return (
      <div className="hall">
        <SeatsList
          selectedSeats={this.props.selectedSeats}
          seats={this.props.seats}
          hallSeats={this.props.hallSeats}
          chooseSeat={this.props.onSelectTicket}
        />
        <span className="hall__choice">Your choice:</span>
        <div className="hall__choice-list">
          {this.props.selectedSeats.map(seat =>
            <Choice
              row={seat.split(',')[0]}
              seat={seat.split(',')[1]}
              price={seat.split(',')[2]}
              key={seat}
            />
          )}
        </div>
        <div>
            Cost :{this.props.selectedSeats.reduce(function(sum, price) {
            return sum + (+price.split(',')[2]) }, 0)} руб
        </div>
        <Link to={{ pathname: `/confirm-ticket/`+
          `${this.props.movie}/`+
          `${this.props.date}/`+
          `${this.props.cinema}/`+
          `${this.props.hall}/`+
          `${this.props.time}`
        }}>
          <button
            className='123'
            disabled={(this.props.selectedSeats.length>6 || this.props.selectedSeats.length === 0) ? true : false}
          >
            Buy
          </button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return ({
  selectedSeats: store.selectTicket.selectedSeats
})}

const mapDispatchToProps = dispatch => ({
  onSelectTicket(ticket) {
    dispatch(selectTicket(ticket))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Hall);
