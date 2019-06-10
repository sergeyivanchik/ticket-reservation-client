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
    await this.props.onGetSessions(this.props.match.params.movieId);
    await this.props.onGetMovieById(this.props.match.params.movieId);
    this.props.onHideLoader();
  }
  
  render() {
    return (
      this.props.isLoading
        ? <Loader/>
        : <div className="movie-profile">
            <TopNavBar/>
            <Schedule
              movie={this.props.movieById}
              sessionsList={this.props.sessionsList}
              deleteTickets={this.props.onDeleteTickets}
            />
          </div>
    )
  }
}
const mapStateToProps = store => ({
  sessionsList: store.sessions.sessionsList,
  movieById: store.movies.movieById,
  allCinemas: store.cinemas.allCinemas,
  isLoading: store.loader.isLoading
});

const mapDispatchToProps = dispatch => ({
  onGetSessions(movieId) {
    return dispatch(getSessionsAsync(movieId))
  },
  onGetMovieById(movieId) {
    return dispatch(getMovieByIdAsync(movieId))
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
