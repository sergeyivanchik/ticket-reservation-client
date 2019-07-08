import React, {Component} from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import createBrowseHistory from "history/createBrowserHistory";

import MainPage from './Components/Pages/MainPage.js';
import MovieProfile from './Components/Pages/MovieProfile.js';
import Seats from './Components/Pages/Seats.js';
import SignUp from './Components/Users/SignUp/SignUp.js';
import LogIn from './Components/Users/LogIn/LogIn.js';
import ConfirmTickets from './Components/Pages/ConfirmTickets.js';
import SnackBar from './Components/Snackbar/Snackbar.js';
import { checkAuthorizationAsync } from './actions/users.js';
import './App.scss';

export const history = createBrowseHistory();

class App extends Component {
  async componentWillMount() {
    await this.props.checkAuthorization();
  }
  
  сheckAuthorization = () => localStorage.getItem('token') !== null ? true : false;
  
  render() {
    const { message, isShown } = this.props;
    return (
      <Router history={history}>
        <div className="router">
          <SnackBar message={message} isShown={isShown}/>
          <Route exact path="/" component={MainPage}/>
          <Route path="/movie-profile/:movieId" component={MovieProfile}/>
          <Route path="/hall/:sessionId/:movieId/:cinemaId/:hallId/:date" 
            component={this.сheckAuthorization() ? Seats : LogIn}/>
          <Route path="/login" component={LogIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/confirm-ticket/:movieId/:cinemaId/:hallId/:date" 
            component={this.сheckAuthorization() ? ConfirmTickets : LogIn}/>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = store => ({
  isShown: store.snackbar.isShown,
  message: store.snackbar.message,
  currentUser: store.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  checkAuthorization() {
    return dispatch(checkAuthorizationAsync())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
