import React, {Component} from 'react'
import MainPage from './Components/Pages/MainPage.js'
import ChooseSeanse from './Components/Pages/ChooseSeanse.js'
import ChooseSeats from './Components/Pages/ChooseSeats.js'
import SignIn from './Components/Users/SignIn/SignIn.js'
import LogIn from './Components/Users/LogIn/LogIn.js'
import AdminPanel from './Components/AdminPanel/AdminPanel.js'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import TicketList from './Components/Ticket/TicketList.js'
import './App.scss'


class App extends Component {
  render() {
    return (
      <Router>
        <div className = "router">
          <Route exact path="/" component={ MainPage } />
          <Route path="/choose_film/:film" component={ ChooseSeanse } />
          <Route path="/choose_seats/:film/:cinema/:hall/:date/:time" component={ ChooseSeats } />
          <Route path="/login" component={ LogIn } />
          <Route path="/signin" component={ SignIn } />
          <Route path="/admin-page" component={ AdminPanel } />
          <Route path="/buy_ticket/:id/:date/:cinema/:hall/:time" component={ TicketList } />
        </div>
      </Router>
    )
  }
}

export default App