import React from 'react';
import { connect } from 'react-redux';

import { getCinemasAsync } from '../../actions/cinemas.js';
import { getMoviesAsync } from '../../actions/movies.js';
import CinemasPanel from './CinemasPanel.js';
import MoviesPanel from './MoviesPanel.js';
import SessionPanel from './SessionPanel.js';
import './AdminPanel.scss';


class AdminPanel extends React.Component {
  componentWillMount() {
    this.props.onGetMovies();
    this.props.onGetCinemas();
  }

  render() {
    return (
      this.props.allCinemas.length &&
      <div className="admin-panel">
        <div className="admin-panel__tabs-list">
          <ul className="admin-panel__tabs">
            <li><a href="#cinemas">Cinemas</a></li>
            <li><a href="#movies">Movies</a></li>
            <li><a href="#sessions">Sessions</a></li>
          </ul>
        </div>
        <div className="admin-panel__tabs-content">
          <ul>
            <li id="cinemas"><CinemasPanel/></li>
            <li id="movies"><MoviesPanel/></li>
            <li id="sessions">
              <SessionPanel cinemas={this.props.allCinemas} movies={this.props.allMovies}/>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  allMovies: store.getMovies.allMovies,
  allCinemas: store.getCinemas.allCinemas
});
const mapDispatchToProps = dispatch => ({
  onGetMovies() {
    dispatch(getMoviesAsync())
  },
  onGetCinemas() {
    dispatch(getCinemasAsync())
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(AdminPanel);
