import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import Searchs from '../Search/Search.js';
import CardList from '../CardList/CardList.js';
import { getMovies } from '../../actions/movies.js';
import { getCinemas } from '../../actions/cinemas.js';


class MainPage extends React.Component {
  componentWillMount() {
    this.props.onGetAllMovies();
    this.props.onGetAllCinemas();
  }

  render() {
    return (
      this.props.allMovies.length && this.props.allCinemas.length &&
      <div className = "main-page">
        <TopNavBar/>
        <Searchs movies={this.props.allMovies} cinemas={this.props.allCinemas}/>
        <CardList/>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  allMovies: store.getAllMovies.allMovies,
  allCinemas: store.getAllCinemas.allCinemas
});

const mapDispatchToProps = dispatch => ({
  onGetAllMovies() {
    dispatch(getMovies())
  },
  onGetAllCinemas() {
    dispatch(getCinemas())
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
