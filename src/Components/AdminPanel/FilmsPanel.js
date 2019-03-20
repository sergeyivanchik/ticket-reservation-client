import React from 'react'
import './FilmsPanel.scss'


class FilmsPanel extends React.Component {
  render() {
    return (
      <div className = "films-panel">
        <label >Add film</label>
        <input type = "text" placeholder = "film title"/>
        <label >Start date</label>
        <input type = "date" className = "films-panel__start-date"/>
        <label >End date</label>
        <input type = "date" className = "films-panel__end-date"/>
        <label >Descriprion</label>
        <textarea rows="10" cols="68" name="Description" className = "films-panel__description"/>
        <input type = "submit" value = "Add cinema"/>
      </div>    
    )
  }
}

export default FilmsPanel