import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import Schedule from '../Schedule/Schedule.js';
import { deleteSelectedSeats } from '../../actions/seats.js';
import { getMovieByIdAsync } from '../../actions/movies.js';
import { getSessionsAsync } from '../../actions/sessions.js';
import { getCinemasAsync } from '../../actions/cinemas.js';
import Loader from '../Loader/Loader.js'; 


class MovieProfile extends React.Component {
  componentWillMount() {
    this.props.onGetCinemas();
    this.props.onGetSessions();
    this.props.onGetMovieById(this.props.match.params.movie);
  }
  render() {
    return (
        !this.props.sessionsList.length || !this.props.movieById || !this.props.allCinemas.length ?
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
  allCinemas: store.getCinemas.allCinemas
});

const mapDispatchToProps = dispatch => ({
  onGetSessions() {
    dispatch(getSessionsAsync())
  },
  onGetMovieById(id) {
    dispatch(getMovieByIdAsync(id))
  },
  onGetCinemas() {
    dispatch(getCinemasAsync())
  },
  onDeleteSeats() {
    dispatch(deleteSelectedSeats())
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(MovieProfile);
