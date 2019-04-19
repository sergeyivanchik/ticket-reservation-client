import React from 'react'
import { Link } from 'react-router-dom'


class TimeList extends React.Component {

  convertDate = (date) => {
    let convertDate = new Date(+date)
      return `${convertDate.getDate()} ${convertDate.toLocaleString('en', {month: 'long'})}, ${convertDate.toLocaleString('en', {weekday: 'long'})}`.toLowerCase()
  };

  getTime = (date) => {
    let currentDate = new Date(+date);
    let hours = currentDate.getHours().toString().length === 2 ? `${currentDate.getHours()}`:`0${currentDate.getHours()}`
    let minutes = currentDate.getMinutes().toString().length === 2? `${currentDate.getMinutes()}`:`${currentDate.getMinutes()}0`;
    return `${hours}.${minutes}`;	
  }

  getTimesByFilmAndDateAndCinema = (film, date, cinema, dateMas) => {
    let timesByFilm = [];
    for(let i = 0; i < dateMas.length; i++ )
      if(this.convertDate(dateMas[i].date) === date && cinema === dateMas[i].cinema && film === dateMas[i].film) 
        timesByFilm.push({time :this.getTime(dateMas[i].date), hall : dateMas[i].hall, id :dateMas[i].id});
    return timesByFilm;	
  }

  render() {
    const {id, date, cinema, seanses} = this.props
    return (
      <div className = "time-list">
        {this.getTimesByFilmAndDateAndCinema(id, date, cinema, seanses).map((time) => <Link to = {{ pathname: `/choose_seats/${id}/${cinema}/${time.hall}/${date}/${time.time}`}} key = {time.id} > <span className = "film-time" title = {time.hall}>{time.time}</span></Link> )}
      </div>
    )
  }
}

export default TimeList