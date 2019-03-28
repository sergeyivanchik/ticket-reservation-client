import React from 'react'
import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js'
import Shedule from '../Shedule/Shedule.js'
import { connect } from 'react-redux'
import {getCards} from '../../actions/index.js'

class ChooseSeanse extends React.Component {
  componentWillMount() {
    this.props.onGetAllCards();
  }
  render() {
    return (
      this.props.allCards.length &&
      <div className = "choose-seanse">
        <TopNavBar/>
        <Shedule id = {this.props.match.params.id} films = {this.props.allCards}/> 
      </div>
    )
           
  }
}
const mapStateToProps = store => ({
  allCards: store.getAllCards.allCards
});

const mapDispatchToProps = dispatch => ({
  onGetAllCards() {
    dispatch(getCards())
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(ChooseSeanse);