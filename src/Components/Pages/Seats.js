import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import Hall from '../Hall/Hall.js';
import {getTickets, getHallsByCinema} from '../../actions/index.js';
import axios from "axios";


class Seats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      halls : [],
    }
  }

  getHalls = (id) => {
    axios.get (`http://localhost:8080/cinemas/${id}?select=halls`)
    .then ((response) =>{
      this.setState({halls:response.data.halls})
      console.log(response.data.halls)
    })
    .catch(error => 
      console.log(error)
    )  
  }

  componentWillMount() {
    this.props.onGetAllTickets();
    this.getHalls(this.props.match.params.cinema);
    this.props.onGetAllHallsByCinema(this.props.match.params.cinema)
  }

  render() {
    return (
      this.state.halls.length &&
      <div className = "choose-seats">
        <TopNavBar/>
        <Hall  film = {this.props.match.params.film} cinema = {this.props.match.params.cinema} hall = {this.props.match.params.hall} date = {this.props.match.params.date} time = {this.props.match.params.time}  hallSeats = {this.state.halls.find( hall => hall.name === this.props.match.params.hall).places} seats = {this.props.allSelectedSeats}/>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  allSelectedSeats : store.getAllTicket.allSelectedSeats,
  allHallsByCinema : store.getAllHallsByCinema.allHallsByCinema
});

const mapDispatchToProps = dispatch => ({
  onGetAllTickets() {
    dispatch(getTickets())
  },
  onGetAllHallsByCinema(cinemaID) {
    dispatch(getHallsByCinema(cinemaID))
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Seats);
