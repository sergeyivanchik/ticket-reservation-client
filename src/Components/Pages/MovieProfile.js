import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import Schedule from '../Schedule/Schedule.js';
import { getTicketsAsync } from '../../actions/tickets.js';
import { getMovieByIdAsync } from '../../actions/movies.js';
import { getCinemasAsync } from '../../actions/cinemas.js';
import Loader from '../Loader/Loader.js'; 


class MovieProfile extends React.Component {
  componentWillMount() {
    this.props.onGetCinemas();
    this.props.onGetTickets();
    this.props.onGetMovieById(this.props.match.params.movie);
  }
  render() {
    return (
        !this.props.allSelectedTickets.length || !this.props.movieById || !this.props.allCinemas.length ?
        <Loader/> :
        <div className="movie-profile">
        <TopNavBar/>
        <Schedule
          movie={this.props.movieById}
          sessionsList={this.props.allSelectedTickets}
          cinemasList={this.props.allCinemas} 
        />
        </div>
    )
  }
}
const mapStateToProps = store => ({
  allSelectedTickets: store.getTickets.allSelectedTickets,
  movieById: store.getMovies.movieById,
  allCinemas: store.getCinemas.allCinemas
});

const mapDispatchToProps = dispatch => ({
  onGetTickets() {
    dispatch(getTicketsAsync())
  },
  onGetMovieById(id) {
    dispatch(getMovieByIdAsync(id))
  },
  onGetCinemas() {
    dispatch(getCinemasAsync())
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(MovieProfile);
