import React from 'react'
import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js'
import Searchs from '../Search/Search.js'
import CardList from '../CardList/CardList.js'


class MainPage extends React.Component {
  render() {
    return(
      <div className = "main-page">
        <TopNavBar/>
        <Searchs/>
        <CardList/>
      </div>
    )
  }
}

export default MainPage