import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import Schedule from '../Schedule/Schedule.js';
import { getTickets } from '../../actions/tickets.js';
import { getMovieByIdAsync } from '../../actions/movies.js';
import { getCinemas } from '../../actions/cinemas.js';


class MovieProfile extends React.Component {
  componentWillMount() {
    this.props.onGetAllCinemas();
    this.props.onGetAllTickets();
    this.props.onGetMovieById(this.props.match.params.movie);
  }
  render() {
    return (
        this.props.allSelectedSeats && 
        this.props.movieById &&
        this.props.allCinemas &&
        <div className="choose-session">
        <TopNavBar/>
        <Schedule
          movie={this.props.movieById}
          sessionsList={this.props.allSelectedSeats}
          cinemasList={this.props.allCinemas} 
        />
      </div>
    )
  }
}
const mapStateToProps = store => ({
  allSelectedSeats: store.getAllTicket.allSelectedSeats,
  movieById: store.getMovieById.movieById,
  allCinemas: store.getAllCinemas.allCinemas
});

const mapDispatchToProps = dispatch => ({
  onGetAllTickets() {
    dispatch(getTickets())
  },
  onGetMovieById(id) {
    dispatch(getMovieByIdAsync(id))
  },
  onGetAllCinemas() {
    dispatch(getCinemas())
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(MovieProfile);
