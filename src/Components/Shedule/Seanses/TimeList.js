import React from 'react'
import { Link } from 'react-router-dom'


class TimeList extends React.Component {
  render() {
    const {times,id} = this.props
    return (
      <div className = "time-list">
        {times.map((time) => <Link to ={{ pathname: `/choose_seats/${this.props.date}/${this.props.cinema}/${id}/${time}` 
}} key = {time} > <span className = "film-time" title = "1 руб.">{time}</span></Link> )}
      </div>
    )
  }
}

export default TimeList