import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import Hall from '../Hall/Hall.js';
import { selectSeat, buySeatsAsync } from '../../actions/seats.js';
import { getCinemasAsync } from '../../actions/cinemas.js';
import { showLoader, hideLoader } from '../../actions/loader.js';
import Loader from '../Loader/Loader.js';


class Seats extends React.Component {
  async componentDidMount() {
    this.props.onShowLoader();
    await this.props.onGetCinemas();
    this.props.onHideLoader();
  }

  render() {
    const seatsList = () => this.props.allCinemas.find(cinema => 
      cinema.id === this.props.match.params.cinemaId).halls.find(hall => 
        hall.name === this.props.match.params.hall).places;
    return (
      this.props.isLoading
        ? <Loader/>
        : <div className="seats">
            <TopNavBar/>
            <Hall
              movieId={this.props.match.params.movieId}
              cinemaId={this.props.match.params.cinemaId}
              sessionId={this.props.match.params.sessionId}
              hall={this.props.match.params.hall}
              date={this.props.match.params.date}
              hallSeats={seatsList()}
              chooseSeat={this.props.onSelectSeat}
              selectSeats={this.props.selectSeats}
              buySeats={this.props.onBuySeats}
            />
          </div>
    )
  }
}

const mapStateToProps = store => ({
  allCinemas: store.getCinemas.allCinemas,
  isLoading: store.getLoader.isLoading,
  selectSeats: store.getSeats.selectSeats
});

const mapDispatchToProps = dispatch => ({
  onGetCinemas() {
    return dispatch(getCinemasAsync())
  },
  onSelectSeat(ticket) {
    dispatch(selectSeat(ticket))
  },
  onShowLoader() {
    dispatch(showLoader())
  },
  onHideLoader() {
    dispatch(hideLoader())
  },
  onBuySeats(sessionId, row, seat,price) {
    dispatch(buySeatsAsync(sessionId, row, seat, price))
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Seats);
