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
      <div>
      <select>
      <option
        value=""
        selected
        disabled
      >
        Please choose cinema
      </option>
      </select>
      <select>
      <option
        value=""
        selected
        disabled
      >
        Please choose movie
      </option>
      </select>
      <button>Search</button>
      </div>
    )
  }
}

export default Searchs;
