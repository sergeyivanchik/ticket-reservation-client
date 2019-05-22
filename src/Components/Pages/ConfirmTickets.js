import React from 'react';
import { connect } from  'react-redux';

import { getCinemasAsync } from '../../actions/cinemas.js';
import { getMoviesAsync } from '../../actions/movies.js';
import TicketList from '../Ticket/TicketList.js';
import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import Loader from '../Loader/Loader.js';

class ConfirmTickets extends React.Component {
  componentDidMount() {
    this.props.onGetMovies()
    this.props.onGetCinemas();
}

  render() {
    return (
      !this.props.allCinemas.length || !this.props.allMovies.length ?
      <Loader/> :
      <div className="confirm-ticket">
        <TopNavBar/>
        <TicketList 
          selectedSeats={this.props.selectedSeats}
          allMovies={this.props.allMovies}
          allCinemas={this.props.allCinemas}
          date={this.props.match.params.date}
          time={this.props.match.params.time}
          hall={this.props.match.params.hall}
          movieId={this.props.match.params.movie}
          cinemaId={this.props.match.params.cinema}
        />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  selectedSeats: store.getTickets.selectedSeats,
  allCinemas: store.getCinemas.allCinemas,
  allMovies: store.getMovies.allMovies
})

const mapDispatchToProps = dispatch => ({
  onGetMovies() {
    dispatch(getMoviesAsync())
  },
  onGetCinemas() {
    dispatch(getCinemasAsync())
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(ConfirmTickets);