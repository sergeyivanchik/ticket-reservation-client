import React from 'react';
import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import Searchs from '../Search/Search.js';
import CardList from '../CardList/CardList.js';
import { connect } from 'react-redux'
import {getFilms, getCinemas} from '../../actions/index.js'


class MainPage extends React.Component {
  componentWillMount() {
    this.props.onGetAllFilms();
    this.props.onGetAllCinemas();
  }

  render() {
    return(
      this.props.allFilms.length && this.props.allCinemas.length &&
      <div className = "main-page">
        <TopNavBar/>
        <Searchs films = {this.props.allFilms} cinemas = {this.props.allCinemas}/>
        <CardList/>
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

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);