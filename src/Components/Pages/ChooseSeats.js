import React from 'react'
import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js'
import Hall from '../Hall/Hall.js'
import { connect } from 'react-redux'
import {getTickets} from '../../actions/index.js'

class ChooseSeats extends React.Component {
  componentWillMount() {
    this.props.onGetAllTickets();
  }
  render() {
    return (
      <div className = "choose-seats">
        <TopNavBar/>
        <Hall date = {this.props.match.params.date} cinema = {this.props.match.params.cinema} id = {this.props.match.params.id} time = {this.props.match.params.time} seats = {this.props.allSelectedSeats}/>
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