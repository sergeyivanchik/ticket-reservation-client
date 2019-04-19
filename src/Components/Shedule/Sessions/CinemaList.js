import React from 'react';
import { connect } from 'react-redux';

import axios from "axios";
import TimeList from './TimeList.js';
import { getCinemasById } from '../../../actions/index.js';


class CinemaList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    cinema:{}
    }
  }

  componentWillMount() {
    this.getCinemaById(this.props.cinema);
    this.props.onGetAllCinemasById(this.props.cinema);
  }

  getCinemaById = (id) => {
    axios.get (`http://localhost:8080/cinemas/${id}?select=name`)
    .then ((response) =>{
      this.setState({cinema:response.data})
    })
    .catch(error => 
      console.log(error)
    )  
  }

  render() {
    const {cinema, date, sessionsList, movie} = this.props
    return(
      this.props.allCinemasById &&
      <div className = "session-info">
        <div className = "cinema-info">
          <span className = "cinema">{this.state.cinema.name}</span> 
        </div>
         <TimeList date ={date} cinema = {cinema} movie = {movie} sessionsList = {sessionsList} key = {`${date}${cinema}`} /> 
      </div>
    )
  }
}
const mapStateToProps = store => {
  return({
  allCinemasById : store.getAllCinemasById.allCinemasById
})}
const mapDispatchToProps = dispatch => ({
  onGetAllCinemasById(id) {
    dispatch(getCinemasById(id))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(CinemaList);
