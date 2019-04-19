import React from 'react';
import './SeansePanel.scss';
import {setOption} from '../../functions/index.js';


class SeansePanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cinema :''
    }
  }

  changeSelect = (e) => {
    this.setState({cinema : e.target.value});
    console.log(this.state.cinema);
    if (this.state.cinema !== '') {
      setOption(this.props.cinemas.find(cinema => cinema.id === this.state.cinema).halls,1)
    }
  }

  componentDidMount() {
    setOption(this.props.cinemas, 0);
    setOption(this.props.films, 2);
  }
  render() {
    return (
      <div className = "seanses-panel">
        <label >Add seanse</label>
        <select name="select" className = "seanses-panel__cinema" onChange={this.changeSelect}> 
          <option value="" selected disabled>Choose cinema</option>
        </select>
        <input type = "text" placeholder = "price"/>
        <select name="select" className = "seanses-panel__hall"> 
          <option value="" selected disabled>Choose hall</option>
        </select>
        <select name="select" className = "seanses-panel__film"> 
          <option value="" selected disabled>Choose film</option>
        </select>
        <input type = "text" placeholder = "start time"/>
        <input type = "submit" value = "Add seanse"/>
      </div>    
    )
  }
}

export default SeansePanel