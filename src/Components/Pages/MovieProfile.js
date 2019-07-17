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
    const { movieId } = this.props.match.params;
    this.props.showLoader();
    await this.props.getSessions(movieId);
    await this.props.getMovieById(movieId);
    this.props.hideLoader();
  }
  
  render() {
    const { isLoading, movieById, sessionsList } = this.props;
    return (
      isLoading
        ? <Loader/>
        : <div className="movie-profile">
            <TopNavBar/>
            <Schedule
              movie={movieById}
              sessionsList={sessionsList}
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
