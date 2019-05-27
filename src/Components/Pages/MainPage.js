import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import CardList from '../CardList/CardList.js';
import { getMoviesAsync } from '../../actions/movies.js';
import { getCinemasAsync } from '../../actions/cinemas.js';
import Loader from '../Loader/Loader.js';


class MainPage extends React.Component {
  async componentWillMount() {
    await this.props.onGetMovies();
    await this.props.onGetCinemas();
  }

  render() {
    return (
      !this.props.allMovies.length || !this.props.allCinemas.length ? 
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
  allCinemas: store.getCinemas.allCinemas
});

const mapDispatchToProps = dispatch => ({
  onGetMovies() {
    return dispatch(getMoviesAsync())
  },
  onGetCinemas() {
    return dispatch(getCinemasAsync())
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
