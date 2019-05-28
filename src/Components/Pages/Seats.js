import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import Hall from '../Hall/Hall.js';
import { selectSeat } from '../../actions/seats.js';
import { getCinemasAsync } from '../../actions/cinemas.js';
import { showLoader, hideLoader } from '../../actions/loader.js';
import { getSessionsAsync } from '../../actions/sessions.js';
import Loader from '../Loader/Loader.js';


class Seats extends React.Component {
  async componentDidMount() {
    this.props.onShowLoader();
    await this.props.onGetCinemas();
    await this.props.onGetSessions();
    this.props.onHideLoader();
  }

  render() {
    return (
      !this.props.allCinemas.length || this.props.isLoading
        ? <Loader/>
        : <div className="seats">
            <TopNavBar/>
            <Hall
              movieId={this.props.match.params.movieId}
              cinemaId={this.props.match.params.cinemaId}
              sessionId={this.props.match.params.sessionId}
              sessionsList={this.props.sessionsList}
              hall={this.props.match.params.hall}
              date={this.props.match.params.date}
              hallSeats={this.props.allCinemas.find(cinema => 
                cinema.id === this.props.match.params.cinemaId).halls.find(hall => 
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
  isLoading: store.getLoader.isLoading,
  selectSeats: store.getSeats.selectSeats,
  sessionsList: store.getSessions.sessionsList,
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
  onGetSessions() {
    return dispatch(getSessionsAsync())
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Seats);
