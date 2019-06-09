import React, {Component} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import MainPage from './Components/Pages/MainPage.js';
import MovieProfile from './Components/Pages/MovieProfile.js';
import Seats from './Components/Pages/Seats.js';
import SignUp from './Components/Users/SignUp/SignUp.js';
import LogIn from './Components/Users/LogIn/LogIn.js';
import ConfirmTickets from './Components/Pages/ConfirmTickets.js';
import SnackBar from './Components/Snackbar/Snackbar.js';
import './App.scss';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="router">
          <SnackBar message={this.props.message} isShown={this.props.isShown}/>
          <Route exact path="/" component={MainPage}/>
          <Route path="/movie-profile/:movieId" component={MovieProfile}/>
          <Route path="/hall/:sessionId/:movieId/:cinemaId/:hall/:date" component={Seats}/>
          <Route path="/login" component={LogIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/confirm-ticket/:movieId/:cinemaId/:hall/:date" component={ConfirmTickets}/>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = store => ({
  isShown: store.snackbar.isShown,
  message: store.snackbar.message,
})

export default connect(mapStateToProps, null)(App);
