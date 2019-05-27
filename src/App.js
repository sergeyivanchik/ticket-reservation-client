import React, {Component} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import MainPage from './Components/Pages/MainPage.js';
import MovieProfile from './Components/Pages/MovieProfile.js';
import Seats from './Components/Pages/Seats.js';
import SignUp from './Components/Users/SignUp/SignUp.js';
import LogIn from './Components/Users/LogIn/LogIn.js';
import ConfirmTickets from './Components/Pages/ConfirmTickets.js';
import './App.scss';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="router">
          <Route exact path="/" component={MainPage}/>
          <Route path="/movie-profile/:movie" component={MovieProfile}/>
          <Route path="/hall/:movie/:cinema/:hall/:date/:time" component={Seats}/>
          <Route path="/login" component={LogIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/confirm-ticket/:movie/:date/:cinema/:hall/:time" component={ConfirmTickets}/>
        </div>
      </Router>
    )
  }
}

export default App;
