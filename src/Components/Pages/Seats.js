import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import Hall from '../Hall/Hall.js';
import { getHallsByCinema } from '../../actions/halls.js';
import { getTickets } from '../../actions/tickets.js';
import { getCinemas } from '../../actions/cinemas.js';


class Seats extends React.Component {
  async componentDidMount() {
    await this.props.onGetAllCinemas();
    await this.props.onGetAllTickets();
  }

  render() {
    const seatsList = this.props.allCinemas.find(cinema => 
      cinema.id === this.props.match.params.cinema).halls.find(hall => 
        hall.name === this.props.match.params.hall).places;
    return (
      this.props.allSelectedSeats.length && this.props.allCinemas.length &&
      <div className="choose-seats">
        <TopNavBar/>
        <Hall
          movie={this.props.match.params.movie}
          cinema={this.props.match.params.cinema}
          hall={this.props.match.params.hall}
          date={this.props.match.params.date}
          time={this.props.match.params.time}
          hallSeats={seatsList}
          seats={this.props.allSelectedSeats}
        />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  allHallsByCinema: store.getAllHallsByCinema.allHallsByCinema,
  allSelectedSeats: store.getAllTicket.allSelectedSeats,
  allCinemas: store.getAllCinemas.allCinemas
});

const mapDispatchToProps = dispatch => ({
  onGetAllHallsByCinema(cinemaId) {
    return dispatch(getHallsByCinema(cinemaId))
  },
  onGetAllTickets() {
    return dispatch(getTickets())
  },
  onGetAllCinemas() {
    return dispatch(getCinemas())
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Seats);
