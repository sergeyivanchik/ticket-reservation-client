import React from 'react'
import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js'
import Shedule from '../Shedule/Shedule.js'

class ChooseSeanse extends React.Component {
  render() {
    return (
      <div className = "choose-seanse">
        <TopNavBar/>
        <Shedule id = {this.props.match.params.id} /> 
      </div>
    )
           
  }
}

export default ChooseSeanse;