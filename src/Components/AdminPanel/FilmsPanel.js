import React from 'react';

import axios from "axios";
import './FilmsPanel.scss';


class FilmsPanel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name : '',
      description : '',
      poster : ''
    };
  }

  updateInputName=(event)=>{
    this.setState({name : event.target.value})
  }
  updateInputDescription=(event)=>{
    this.setState({description : event.target.value})
  }
  updateInputPoster=(event)=>{
    this.setState({poster : event.target.value})
  }

  addFilm =() => {
    axios.post('http://localhost:8080/films', {
      name: this.state.name,
      description: this.state.description,
      poster: this.state.poster
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });    
  }
  render() {
    return (
      <div className = "films-panel">
        <label >Add film</label>
        <input type = "text" placeholder = "film title" name="name" onChange={this.updateInputName}/>
        <label >Poster</label>
        <input type = "text" placeholder = "poster" name="poster" onChange={this.updateInputPoster}/>
        <label >Descriprion</label>
        <textarea rows="10" cols="68" name="description" onChange={this.updateInputDescription}  className = "films-panel__description"/>
        <input type = "submit" value = "Add cinema" onClick={this.addFilm}/>
      </div>    
    )
  }
}

export default FilmsPanel;
