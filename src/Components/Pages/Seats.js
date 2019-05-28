import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import Hall from '../Hall/Hall.js';
import { selectSeat } from '../../actions/seats.js';
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
    return (
      !this.props.allCinemas.length || this.props.loading ?
        <Loader/> : 
        <div className="seats">
          <TopNavBar/>
          <Hall
            movie={this.props.match.params.movie}
            cinema={this.props.match.params.cinema}
            hall={this.props.match.params.hall}
            date={this.props.match.params.date}
            hallSeats={this.props.allCinemas.find(cinema => 
              cinema.id === this.props.match.params.cinema).halls.find(hall => 
                hall.name === this.props.match.params.hall).places}
            chooseSeat={this.props.onSelectSeat}
            selectSeats={this.props.selectSeats}
          />
        </div>
    )
  }
}

const mapStateToProps = store => ({
  allCinemas: store.getCinemas.allCinemas,
  loading: store.getLoader.loading,
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
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Seats);
