import React from 'react'
import './SeansePanel.scss'


class SeansePanel extends React.Component {
  render() {
    return (
      <div className = "seanses-panel">
        <label >Add seanse</label>
        <select name="select" className = "seanses-panel__cinema"> 
          <option value="value1" selected disabled>Cinema</option>
          <option value="value1">Значение 1</option> 
          <option value="value2">Значение 2</option>
          <option value="value3">Значение 3</option>
        </select>
        <input type = "text" placeholder = "price"/>
        <select name="select" className = "seanses-panel__hall"> 
          <option value="value1" selected disabled>Hall</option>
          <option value="value1">Значение 1</option> 
          <option value="value2">Значение 2</option>
          <option value="value3">Значение 3</option>
        </select>
        <select name="select" className = "seanses-panel__film"> 
          <option value="value1" selected disabled>Film</option>
          <option value="value1">Значение 1</option> 
          <option value="value2">Значение 2</option>
          <option value="value3">Значение 3</option>
        </select>
        <input type = "text" placeholder = "start time"/>
        <input type = "submit" value = "Add seanse"/>
      </div>    
    )
  }
}

export default SeansePanel