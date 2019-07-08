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
    const { hallId, cinemaId, sessionId, movieId } = this.props.match.params;
    const { showLoader, getHallByCinema, getBoughtSeats, getSelectedSeats, hideLoader } = this.props;
    showLoader();
    await getHallByCinema(hallId, cinemaId);
    await getBoughtSeats(sessionId,cinemaId, hallId, movieId);
    await getSelectedSeats(sessionId, cinemaId, hallId, movieId,);
    hideLoader();
  }

  render() {
    const { hallByCinema, boughtSeats, selectSeat, selectedSeats, currentUser, isLoading } = this.props;
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
              user={currentUser.id}
              boughtSeats={boughtSeats}
              hallSeats={hallByCinema[0].seats}
              onSelectSeat={selectSeat}
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
