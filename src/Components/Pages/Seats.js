import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import Hall from '../Hall/Hall.js';
import { showLoader, hideLoader } from '../../actions/loader.js';
import { getHallByCinemaAsync } from '../../actions/halls.js';
import { getBoughtSeatsAsync, getSelectedSeatsAsync } from '../../actions/seats.js';
import Loader from '../Loader/Loader.js';


class Seats extends React.Component {
  async componentDidMount() {
    const { hallId, cinemaId, sessionId, movieId } = this.props.match.params;
    this.props.showLoader();
    await this.props.getHallByCinema(hallId, cinemaId);
    await this.props.getBoughtSeats(sessionId,cinemaId, hallId, movieId);
    await this.props.getSelectedSeats(sessionId, cinemaId, hallId, movieId);
    this.props.hideLoader();
  }

  render() {
    const { hallByCinema, boughtSeats, selectedSeats, isLoading } = this.props;
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
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Seats);
