import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import Schedule from '../Schedule/Schedule.js';
import { deleteSelectedSeats } from '../../actions/seats.js';
import { getMovieByIdAsync } from '../../actions/movies.js';
import { getSessionsAsync } from '../../actions/sessions.js';
import { getCinemasAsync } from '../../actions/cinemas.js';
import { showLoader, hideLoader } from '../../actions/loader.js';
import Loader from '../Loader/Loader.js'; 


class MovieProfile extends React.Component {
  async componentDidMount() {
    this.props.onShowLoader();
    await this.props.onGetCinemas();
    await this.props.onGetSessions();
    await this.props.onGetMovieById(this.props.match.params.movieId);
    this.props.onHideLoader();
  }
  
  render() {
    return (
        this.props.loading ?
          <Loader/> :
          <div className="movie-profile">
            <TopNavBar/>
            <Schedule
              movie={this.props.movieById}
              sessionsList={this.props.sessionsList}
              cinemasList={this.props.allCinemas}
              deleteTickets={this.props.onDeleteTickets}
            />
          </div>
    )
  }
}
const mapStateToProps = store => ({
  sessionsList: store.getSessions.sessionsList,
  movieById: store.getMovies.movieById,
  allCinemas: store.getCinemas.allCinemas,
  loading: store.getLoader.loading
});

const mapDispatchToProps = dispatch => ({
  onGetSessions() {
    return dispatch(getSessionsAsync())
  },
  onGetMovieById(id) {
    return dispatch(getMovieByIdAsync(id))
  },
  onGetCinemas() {
    return dispatch(getCinemasAsync())
  },
  onDeleteSeats() {
    dispatch(deleteSelectedSeats())
  },
  onShowLoader() {
    dispatch(showLoader())
  },
  onHideLoader() {
    dispatch(hideLoader())
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(MovieProfile);
