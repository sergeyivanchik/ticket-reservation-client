import React from 'react'
import SelectedFilm from './SelectedFilm/SelectedFilm.js'
import SeansesList from './Seanses/SeansesList.js'


class Shedule extends React.Component {
  render() {
    const {film, filmsList, seansesList} = this.props;
    return (
      <div className = "shedule">
        <SelectedFilm film = {film} filmsList = {filmsList} />
        <SeansesList film = {film} seansesList = {seansesList}/>
      </div>
    )
  }
}

export default Shedule