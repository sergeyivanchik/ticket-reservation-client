import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import Searchs from '../Search/Search.js';
import CardList from '../CardList/CardList.js';
import { getMoviesAsync } from '../../actions/movies.js';
import { getCinemasAsync } from '../../actions/cinemas.js';


class MainPage extends React.Component {
  componentWillMount() {
    this.props.onGetMovies();
    this.props.onGetCinemas();
  }

  render() {
    return (
      this.props.allMovies.length && 
      this.props.allCinemas.length &&
      <div className = "main-page">
        <TopNavBar/>
        <Searchs movies={this.props.allMovies} cinemas={this.props.allCinemas}/>
        <CardList/>
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

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
