import React from 'react';


class CinemasPanel extends React.Component {
  render() {
    return (
      <div className = "cinemas-panel">
        <label >Add cinema</label>
        <input type = "text" placeholder = "cinema name"/>
        <input type = "submit" value = "Add cinema"/>
      </div>    
    )
  }
}

export default CinemasPanel;
