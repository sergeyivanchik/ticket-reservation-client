import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import Schedule from '../Schedule/Schedule.js';
import { getMovieByIdAsync } from '../../actions/movies.js';
import { getSessionsAsync } from '../../actions/sessions.js';
import { showLoader, hideLoader } from '../../actions/loader.js';
import Loader from '../Loader/Loader.js'; 


class MovieProfile extends React.Component {
  async componentDidMount() {
    this.props.showLoader();
    await this.props.getSessions(this.props.match.params.movieId);
    await this.props.getMovieById(this.props.match.params.movieId);
    this.props.hideLoader();
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
            />
          </div>
    )
  }
}
const mapStateToProps = store => ({
  sessionsList: store.sessions.sessionsList,
  movieById: store.movies.movieById,
  isLoading: store.loader.isLoading
});

const mapDispatchToProps = dispatch => ({
  getSessions(movieId) {
    return dispatch(getSessionsAsync(movieId))
  },
  getMovieById(movieId) {
    return dispatch(getMovieByIdAsync(movieId))
  },
  showLoader() {
    dispatch(showLoader())
  },
  hideLoader() {
    dispatch(hideLoader())
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(MovieProfile);
