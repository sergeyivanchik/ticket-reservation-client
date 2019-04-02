import React from 'react';
import axios from "axios";
import TimeList from './TimeList.js'


class CinemaList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    cinema:{}
  }
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
    
    const {cinema} = this.props
    this.getCinemaById(cinema);
    return(
      <div className = "seanse-info">
        <div className = "cinema-info">
          <span className = "cinema">{this.state.cinema.name}</span> 
        </div>
        {/* <TimeList date ={this.props.date} cinema = {cinema.cinemaName} id = {this.props.id} times={cinema.time} key = {`${cinema.cinemaName}${cinema.time[0]}`} /> */}
      </div>
    )
  }
}

export default CinemaList