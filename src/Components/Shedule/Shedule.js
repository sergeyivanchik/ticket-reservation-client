import React from 'react'
import SelectedFilm from './SelectedFilm/SelectedFilm.js'
import SeansesList from './Seanses/SeansesList.js'


class Shedule extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <div className = "shedule">
        <SelectedFilm id = {id} />
        <SeansesList id = {id}/>
      </div>
    )
  }
}

export default Shedule