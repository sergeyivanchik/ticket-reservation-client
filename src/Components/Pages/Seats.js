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
    this.props.onShowLoader();
    await this.props.onGetHallByCinema(this.props.match.params.hallId, this.props.match.params.cinemaId);
    await this.props.onGetBoughtSeats(
      this.props.match.params.sessionId,
      this.props.match.params.cinemaId,
      this.props.match.params.hallId,
      this.props.match.params.movieId
    );
    await this.props.onGetSelectedSeats (
      this.props.match.params.sessionId,
      this.props.match.params.cinemaId,
      this.props.match.params.hallId,
      this.props.match.params.movieId,
    );
    this.props.onHideLoader();
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
              onSelectSeat={this.props.onSelectSeat}
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
  onShowLoader() {
    dispatch(showLoader())
  },
  onGetHallByCinema(hallId, cinemaId) {
    return dispatch(getHallByCinemaAsync(hallId, cinemaId))
  },
  onSelectSeat(session, cinema, hall, movie, user, row, seat, cost) {
    dispatch(selectSeatAsync(session, cinema, hall, movie, user, row, seat, cost))
  },
  onHideLoader() {
    dispatch(hideLoader())
  },
  onGetBoughtSeats(sessionId, cinemaId, hallId, movieId) {
    return dispatch(getBoughtSeatsAsync(sessionId, cinemaId, hallId, movieId))
  },
  onGetSelectedSeats(sessionId, cinemaId, hallId, movieId) {
    return dispatch(getSelectedSeatsAsync(sessionId, cinemaId, hallId, movieId))
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Seats);
