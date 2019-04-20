import React from 'react';

import axios from "axios";
import './MoviesPanel.scss';


class MoviesPanel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name : '',
      description : '',
      poster : ''
    };
  }

  updateInputName= event =>{
    this.setState({name : event.target.value})
  }
  updateInputDescription= event =>{
    this.setState({description : event.target.value})
  }
  updateInputPoster= event =>{
    this.setState({poster : event.target.value})
  }

  addMovie =() => {
    axios.post('http://localhost:8080/movies', {
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
      <div className = "movies-panel">
        <label >Add movie</label>
        <input type = "text" placeholder = "movie title" name="name" onChange={this.updateInputName}/>
        <label >Poster</label>
        <input type = "text" placeholder = "poster" name="poster" onChange={this.updateInputPoster}/>
        <label >Descriprion</label>
        <textarea rows="10" cols="68" name="description" onChange={this.updateInputDescription}  className = "movies-panel__description"/>
        <input type = "submit" value = "Add cinema" onClick={this.addMovie}/>
      </div>    
    )
  }
}

export default MoviesPanel;
