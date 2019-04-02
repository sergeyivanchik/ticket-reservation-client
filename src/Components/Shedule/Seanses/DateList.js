import React from 'react'
import CinemaList from './CinemaList.js'


class DateList extends React.Component {
  convertDate = (date) => {
    let convertDate = new Date(+date)
      return `${convertDate.getDate()} ${convertDate.toLocaleString('en', {month: 'long'})}, ${convertDate.toLocaleString('en', {weekday: 'long'})}`.toLowerCase()
  };

  getCinemasByFilmAndDate = (film, date, dateMas) => {
    let cinemasByFilm = [];
    let prov = 0;
    for(let i = 0; i < dateMas.length; i++) {
      prov = 0;
      if(this.convertDate(dateMas[i].date) === date && dateMas[i].film === film) {
        if(cinemasByFilm.length === 0) {
          cinemasByFilm.push(dateMas[i].cinema);
        } else {
          for(let j = 0; j < cinemasByFilm.length; j++) {
            if(cinemasByFilm[j] !== dateMas[i].cinema) 
              prov ++;
          }
          if (prov === cinemasByFilm.length)
              cinemasByFilm.push(dateMas[i].cinema);
        }
      }			
    }			
    return cinemasByFilm;	
  }
  render() {
    const {date, id, seanses} = this.props
    return (
      <div className = "seanse">
        <div className = "seanse-date">
          <span className = "film-date" >{date}</span>
        </div> 
          {this.getCinemasByFilmAndDate(id, date, seanses).map((cinema) => <CinemaList cinema ={cinema} id = {this.props.id} date = {date} seanses = {seanses}/>)} 
        {/* {dateList.seanses.map((seanse) => <CinemaList date = {dateList.date} id = {this.props.id} cinema={seanse}  key = {`${seanse.cinemaName}${dateList.date}`}/>)} */}
      </div>
    )
  }
}

export default DateList