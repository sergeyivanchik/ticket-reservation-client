import React from 'react';
import { connect } from 'react-redux';

import { getFilms, getCinemas } from '../../actions/index.js';
import CinemasPanel from './CinemasPanel.js';
import FilmsPanel from './FilmsPanel.js';
import SessionPanel from './SessionPanel.js';
import './AdminPanel.scss';


class AdminPanel extends React.Component {
  componentWillMount() {
    this.props.onGetAllFilms();
    this.props.onGetAllCinemas();
  }

  render() {
    return (
      this.props.allCinemas.length &&
      <div className = "admin-panel">
        <div className = "admin-panel__tabs-list">
          <ul className="admin-panel__tabs">
            <li><a href="#cinemas">Cinemas</a></li>
            <li><a href="#films">Films</a></li>
            <li><a href="#sessions">Sessions</a></li>
          </ul>
        </div>
        <div className = "admin-panel__tabs-content">
          <ul>
            <li id="cinemas"> <CinemasPanel /></li>
            <li id="films"><FilmsPanel/></li>
            <li id="sessions"><SessionPanel cinemas = {this.props.allCinemas}  films = {this.props.allFilms}/></li>
          </ul>
        </div>
      </div>

    )
  }
}

const mapStateToProps = store => ({
  allFilms : store.getAllFilms.allFilms,
  allCinemas : store.getAllCinemas.allCinemas
});
const mapDispatchToProps = dispatch => ({
  onGetAllFilms() {
    dispatch(getFilms())
  },
  onGetAllCinemas() {
    dispatch(getCinemas())
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(AdminPanel);
