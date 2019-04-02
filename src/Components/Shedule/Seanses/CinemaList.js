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

  componentWillMount() {
    this.getCinemaById(this.props.cinema);
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
    const {cinema, date, seanses, id} = this.props
    return(
      <div className = "seanse-info">
        <div className = "cinema-info">
          <span className = "cinema">{this.state.cinema.name}</span> 
        </div>
         <TimeList date ={date} cinema = {cinema} id = {id} seanses = {seanses} key = {`${date}${cinema}`} /> 
      </div>
    )
  }
}

export default CinemaList