import React from 'react';

import {setOption} from '../../functions/index.js'
import './Search.scss';


class Searchs extends React.Component {
  componentDidMount() {
    setOption(this.props.cinemas, 0);
    setOption(this.props.movies, 1);
  }

  render() {
    return (
      <div className="search">
      <select className="search__cinema">
      <option
        value=""
        selected
        disabled
      >
        Please choose cinema
      </option>
      </select>
      <select className="search__movie">
      <option
        value=""
        selected
        disabled
      >
        Please choose movie
      </option>
      </select>
      <button className="search__button">Search</button>
      </div>
    )
  }
}

export default Searchs;
