import React from 'react'
import DateList from './DateList.js'
import SeanseInfo from './SeanseInfo.js'
import './SeansesList.scss'


class SeansesList extends React.Component {
  render() {
    const seanseInf = SeanseInfo
    return (
      <div className = "seanses-list">
        {seanseInf.map((seans) => <DateList id = {this.props.id} dateList={seans} key ={seans.id}/> )}
      </div>
    )
  }
}

export default SeansesList