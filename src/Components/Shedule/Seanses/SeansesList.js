import React from 'react'
import DateList from './DateList.js'
//import SeanseInfo from './SeanseInfo.js'
import './SeansesList.scss'


class SeansesList extends React.Component {
  convertDate = (date) => {
    let convertDate = new Date(+date)
      return `${convertDate.getDate()} ${convertDate.toLocaleString('en', {month: 'long'})}, ${convertDate.toLocaleString('en', {weekday: 'long'})}`.toLowerCase()
  };

  getDatesByFilm = (film, dateMas) => {
    let datesByFilm = [];
    let prov = 0;
    for(let i = 0; i < dateMas.length; i++) {
      prov = 0;
      if(dateMas[i].film === film) {
        if(datesByFilm.length === 0)
          datesByFilm.push(this.convertDate(dateMas[i].date));
        else {
          for (let j = 0; j < datesByFilm.length; j ++) {
            if (datesByFilm[j] !== this.convertDate(dateMas[i].date))
              prov++
          }
          if (prov === datesByFilm.length)
              datesByFilm.push(this.convertDate(dateMas[i].date)); 
        }
      }
    }
    return datesByFilm;	
  }
  render() {
    const {id, seanses} = this.props;
    return (
      <div className = "seanses-list">
        {this.getDatesByFilm(id, seanses).map((date) => <DateList id = {id} date={date} seanses = {seanses} key ={date}/> )}
      </div>
    )
  }
}

export default SeansesList