import React from 'react'
import CinemasPanel from './CinemasPanel.js'
import FilmsPanel from './FilmsPanel.js'
import SeansePanel from './SeansePanel.js'
import './AdminPanel.scss'


class AdminPanel extends React.Component {
  render() {
    return (
      <div className = "admin-panel">
        <div className = "admin-panel__tabs-list">
          <ul className="admin-panel__tabs">
            <li><a href="#cinemas">Cinemas</a></li>
            <li><a href="#films">Films</a></li>
            <li><a href="#seanses">Seanses</a></li>
          </ul>
        </div>
        <div className = "admin-panel__tabs-content">
          <ul>
            <li id="cinemas"> <CinemasPanel/></li>
            <li id="films"><FilmsPanel/></li>
            <li id="seanses"><SeansePanel/></li>
          </ul>
        </div>
      </div>

    )
  }
}

export default AdminPanel