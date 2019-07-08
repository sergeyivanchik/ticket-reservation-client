import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import Hall from '../Hall/Hall.js';
import { showLoader, hideLoader } from '../../actions/loader.js';
import { getHallByCinemaAsync } from '../../actions/halls.js';
import { getBoughtSeatsAsync, getSelectedSeatsAsync, selectSeatAsync } from '../../actions/seats.js';
import Loader from '../Loader/Loader.js';


class Seats extends React.Component {
  async componentDidMount() {
    this.props.showLoader();
    await this.props.getHallByCinema(this.props.match.params.hallId, this.props.match.params.cinemaId);
    await this.props.getBoughtSeats(
      this.props.match.params.sessionId,
      this.props.match.params.cinemaId,
      this.props.match.params.hallId,
      this.props.match.params.movieId
    );
    await this.props.getSelectedSeats (
      this.props.match.params.sessionId,
      this.props.match.params.cinemaId,
      this.props.match.params.hallId,
      this.props.match.params.movieId,
    );
    this.props.hideLoader();
  }

  render() {
    const { hallByCinema, boughtSeats } = this.props;
    return (
      this.props.isLoading
        ? <Loader/>
        : <div className="seats">
            <TopNavBar/>
            <Hall
              movie={this.props.match.params.movieId}
              cinema={this.props.match.params.cinemaId}
              session={this.props.match.params.sessionId}
              hall={this.props.match.params.hallId}
              user={this.props.currentUser.id}
              boughtSeats={boughtSeats}
              hallSeats={hallByCinema[0].seats}
              onSelectSeat={this.props.selectSeat}
              selectedSeats={this.props.selectedSeats}
              date={this.props.match.params.date}
            />
          </div>
    )
  }
}

const mapStateToProps = store => ({
  currentUser: store.user.currentUser,
  hallByCinema: store.halls.hallByCinema,
  boughtSeats: store.seats.boughtSeats,
  selectedSeats: store.seats.selectedSeats,
  isLoading: store.loader.isLoading
});

const mapDispatchToProps = dispatch => ({
  showLoader() {
    dispatch(showLoader())
  },
  getHallByCinema(hallId, cinemaId) {
    return dispatch(getHallByCinemaAsync(hallId, cinemaId))
  },
  selectSeat(session, cinema, hall, movie, user, row, seat, cost) {
    dispatch(selectSeatAsync(session, cinema, hall, movie, user, row, seat, cost))
  },
  hideLoader() {
    dispatch(hideLoader())
  },
  getBoughtSeats(sessionId, cinemaId, hallId, movieId) {
    return dispatch(getBoughtSeatsAsync(sessionId, cinemaId, hallId, movieId))
  },
  getSelectedSeats(sessionId, cinemaId, hallId, movieId) {
    return dispatch(getSelectedSeatsAsync(sessionId, cinemaId, hallId, movieId))
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Seats);
