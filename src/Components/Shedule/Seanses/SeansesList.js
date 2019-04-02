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
    //const seanseInf = SeanseInfo
    return (
      <div className = "seanses-list">
        {this.getDatesByFilm(this.props.id, this.props.seanses).map((seanse) => <DateList id = {this.props.id} date={seanse} seanses = {this.props.seanses} key ={seanse}/> )}
      </div>
    )
  }
}

export default SeansesList