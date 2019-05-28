import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import CardList from '../CardList/CardList.js';
import { getMoviesAsync } from '../../actions/movies.js';
import { getCinemasAsync } from '../../actions/cinemas.js';
import { showLoader, hideLoader } from '../../actions/loader.js';
import Loader from '../Loader/Loader.js';


class MainPage extends React.Component {
  async componentDidMount() {
    this.props.onShowLoader();
    await this.props.onGetMovies();
    await this.props.onGetCinemas();
    this.props.onHideLoader();
  }

  render() {
    return (
      this.props.isLoading ? 
      <Loader/> :
      <div className="main-page">
        <TopNavBar/>
        <CardList moviesList={this.props.allMovies}/>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  allMovies: store.getMovies.allMovies,
  allCinemas: store.getCinemas.allCinemas,
  isLoading: store.getLoader.isLoading
});

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

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
