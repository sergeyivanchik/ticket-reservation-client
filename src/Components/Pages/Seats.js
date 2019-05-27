import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import Hall from '../Hall/Hall.js';
import { getHallsByCinemaAsync } from '../../actions/halls.js';
import { selectSeat } from '../../actions/seats.js';
import { getCinemasAsync } from '../../actions/cinemas.js';
import Loader from '../Loader/Loader.js';


class Seats extends React.Component {
  seats = () => this.props.allCinemas.find(cinema => 
    cinema.id === this.props.match.params.cinema).halls.find(hall => 
      hall.name === this.props.match.params.hall).places ;

  async componentDidMount() {
    await this.props.onGetCinemas();
  }

  render() {
    return (
     !this.props.allCinemas.length ?
        <Loader/> : 
        <div className="seats">
          <TopNavBar/>
          <Hall
            movie={this.props.match.params.movie}
            cinema={this.props.match.params.cinema}
            hall={this.props.match.params.hall}
            date={this.props.match.params.date}
            time={this.props.match.params.time}
            hallSeats={this.seats()}
            chooseSeat={this.props.onSelectSeat}
            selectSeats={this.props.selectSeats}
          />
        </div>
    )
  }
}

const mapStateToProps = store => ({
  allHallsByCinema: store.getHalls.allHallsByCinema,
  allCinemas: store.getCinemas.allCinemas,
  selectSeats: store.getSeats.selectSeats
});

const mapDispatchToProps = dispatch => ({
  onGetHallsByCinema(cinemaId) {
    return dispatch(getHallsByCinemaAsync(cinemaId))
  },
  onGetCinemas() {
    return dispatch(getCinemasAsync())
  },
  onSelectSeat(ticket) {
    dispatch(selectSeat(ticket))
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Seats);
