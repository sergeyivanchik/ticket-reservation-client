import React, {Component} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import MainPage from './Components/Pages/MainPage.js';
import FilmProfile from './Components/Pages/FilmProfile.js';
import Seats from './Components/Pages/Seats.js';
import SignIn from './Components/Users/SignIn/SignIn.js';
import LogIn from './Components/Users/LogIn/LogIn.js';
import AdminPanel from './Components/AdminPanel/AdminPanel.js';
import TicketList from './Components/Ticket/TicketList.js';
import './App.scss';


class App extends Component {
  render() {
    return (
      <Router>
        <div className = "router">
          <Route exact path="/" component={ MainPage } />
          <Route path="/film-profile/:film" component={ FilmProfile } />
          <Route path="/hall/:film/:cinema/:hall/:date/:time" component={ Seats } />
          <Route path="/login" component={ LogIn } />
          <Route path="/signin" component={ SignIn } />
          <Route path="/admin-page" component={ AdminPanel } />
          <Route path="/confirm-ticket/:id/:date/:cinema/:hall/:time" component={ TicketList } />
        </div>
      </Router>
    )
  }
}

export default App;
