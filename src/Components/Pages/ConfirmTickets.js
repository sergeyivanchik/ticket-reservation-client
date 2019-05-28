import React from 'react';
import { connect } from  'react-redux';

import { getCinemasAsync } from '../../actions/cinemas.js';
import { getMoviesAsync } from '../../actions/movies.js';
import TicketList from '../Ticket/TicketList.js';
import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import { showLoader, hideLoader } from '../../actions/loader.js';
import Loader from '../Loader/Loader.js';

class ConfirmTickets extends React.Component {
  async componentDidMount() {
    this.props.onShowLoader()
    await this.props.onGetMovies()
    await this.props.onGetCinemas();
    this.props.onHideLoader();
}

  render() {
    return (
       !this.props.allCinemas.length || !this.props.allMovies.length || this.props.loading ?
        <Loader/> :
        <div className="confirm-ticket">
          <TopNavBar/>
          <TicketList 
            selectSeats={this.props.selectSeats}
            allMovies={this.props.allMovies}
            allCinemas={this.props.allCinemas}
            date={this.props.match.params.date}
            hall={this.props.match.params.hall}
            movieId={this.props.match.params.movie}
            cinemaId={this.props.match.params.cinema}
          />
        </div>
    )
  }
}

const mapStateToProps = store => ({
  selectSeats: store.getSeats.selectSeats,
  allCinemas: store.getCinemas.allCinemas,
  allMovies: store.getMovies.allMovies,
  loading: store.getLoader.loading
})

const mapDispatchToProps = dispatch => ({
  onGetMovies() {
    return dispatch(getMoviesAsync())
  },
  onGetCinemas() {
    return dispatch(getCinemasAsync())
  },
  onShowLoader() {
    dispatch(showLoader())
  },
  onHideLoader() {
    dispatch(hideLoader())
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(ConfirmTickets);