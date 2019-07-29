import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import Hall from '../Hall/Hall.js';
import { showLoader, hideLoader } from '../../actions/loader.js';
import { getHallByCinemaAsync } from '../../actions/halls.js';
import { getBoughtSeatsAsync, getSelectedSeatsAsync } from '../../actions/seats.js';
import { showSnackbar } from '../../actions/snackbar.js'
import Loader from '../Loader/Loader.js';
import { checkAuthorizationAsync } from '../../actions/users.js';


class Seats extends React.Component {
  async componentDidMount() {
    this.props.showLoader();
    const { hallId, cinemaId, sessionId, movieId } = this.props.match.params;
    await this.props.checkAuthorization();
    await this.props.getHallByCinema(hallId, cinemaId);
    await this.props.getBoughtSeats(sessionId,cinemaId, hallId, movieId);
    await this.props.getSelectedSeats(sessionId, cinemaId, hallId, movieId);
    this.props.hideLoader();
  }

  render() {
    const { hallByCinema, boughtSeats, selectedSeats, isLoading, showSnackbar } = this.props;
    const { hallId, cinemaId, sessionId, movieId, date } = this.props.match.params;
    return (
      isLoading
        ? <Loader/>
        : <div className="seats">
            <TopNavBar/>
            <Hall
              movie={movieId}
              cinema={cinemaId}
              session={sessionId}
              hall={hallId}
              user={this.props.currentUser.id}
              boughtSeats={boughtSeats}
              hallSeats={hallByCinema[0].seats}
              selectedSeats={selectedSeats}
              date={date}
              showSnackbar={showSnackbar}
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
  hideLoader() {
    dispatch(hideLoader())
  },
  getBoughtSeats(sessionId, cinemaId, hallId, movieId) {
    return dispatch(getBoughtSeatsAsync(sessionId, cinemaId, hallId, movieId))
  },
  getSelectedSeats(sessionId, cinemaId, hallId, movieId) {
    return dispatch(getSelectedSeatsAsync(sessionId, cinemaId, hallId, movieId))
  },
  showSnackbar(message) {
    dispatch(showSnackbar(message))
  },
  checkAuthorization() {
    return dispatch(checkAuthorizationAsync())
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Seats);
