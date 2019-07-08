import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import CardList from '../CardList/CardList.js';
import { getMoviesAsync } from '../../actions/movies.js';
import { showLoader, hideLoader } from '../../actions/loader.js';
import Loader from '../Loader/Loader.js';


class MainPage extends React.Component {
  async componentDidMount() {
    const { showLoader, getMovies, hideLoader } = this.props;
    showLoader();
    await getMovies();
    hideLoader();
  }

  render() {
    const { isLoading, allMovies} = this.props;
    return (
      isLoading
        ? <Loader/>
        : <div className="main-page">
            <TopNavBar/>
            <CardList moviesList={allMovies}/>
          </div>
    )
  }
}

const mapStateToProps = store => ({
  allMovies: store.movies.allMovies,
  isLoading: store.loader.isLoading
});

const mapDispatchToProps = dispatch => ({
  getMovies() {
    return dispatch(getMoviesAsync())
  },
  showLoader() {
    dispatch(showLoader())
  },
  hideLoader() {
    dispatch(hideLoader())
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
