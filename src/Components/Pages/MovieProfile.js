import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import Schedule from '../Schedule/Schedule.js';
import { getSeatsAsync, deleteSelectedSeats } from '../../actions/seats.js';
import { getMovieByIdAsync } from '../../actions/movies.js';
import { getCinemasAsync } from '../../actions/cinemas.js';
import Loader from '../Loader/Loader.js'; 


class MovieProfile extends React.Component {
  componentWillMount() {
    this.props.onGetCinemas();
    this.props.onGetSeats();
    this.props.onGetMovieById(this.props.match.params.movie);
  }
  render() {
    return (
        !this.props.allSelectedSeats.length || !this.props.movieById || !this.props.allCinemas.length ?
        <Loader/> :
        <div className="movie-profile">
          <TopNavBar/>
          <Schedule
            movie={this.props.movieById}
            sessionsList={this.props.allSelectedSeats}
            cinemasList={this.props.allCinemas}
            deleteTickets={this.props.onDeleteTickets}
          />
        </div>
    )
  }
}
const mapStateToProps = store => ({
  allSelectedSeats: store.getSeats.allSelectedSeats,
  movieById: store.getMovies.movieById,
  allCinemas: store.getCinemas.allCinemas
});

const mapDispatchToProps = dispatch => ({
  onGetSeats() {
    dispatch(getSeatsAsync())
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
