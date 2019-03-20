import React from 'react'
import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js'
import Hall from '../Hall/Hall.js'


class ChooseSeats extends React.Component {
  render() {
    return (
      <div className = "choose-seats">
        <TopNavBar/>
        <Hall date = {this.props.match.params.date} cinema = {this.props.match.params.cinema} id = {this.props.match.params.id} time = {this.props.match.params.time} />
      </div>
    )
  }
}

export default ChooseSeats
