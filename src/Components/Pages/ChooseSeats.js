import React from 'react'
import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js'
import Hall from '../Hall/Hall.js'
import { connect } from 'react-redux'
import {getTickets} from '../../actions/index.js'
import axios from "axios";

class ChooseSeats extends React.Component {
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
    })
    .catch(error => 
      console.log(error)
    )  
  }

  componentWillMount() {
    this.props.onGetAllTickets();
    this.getHalls(this.props.match.params.cinema);
  }

  render() {
    return (
      this.state.halls.length &&
      <div className = "choose-seats">
        <TopNavBar/>
        <Hall  film = {this.props.match.params.film} cinema = {this.props.match.params.cinema} hallId = {this.props.match.params.hall} hallSeats = {this.state.halls[this.state.halls.findIndex(hall => hall.name === this.props.match.params.hall)]} seats = {this.props.allSelectedSeats}/>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  allSelectedSeats: store.getAllTicket.allSelectedSeats
});

const mapDispatchToProps = dispatch => ({
  onGetAllTickets() {
    dispatch(getTickets())
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(ChooseSeats);