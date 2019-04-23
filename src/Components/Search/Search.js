import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from "axios";
import { getCinemas } from '../../actions/cinemas.js';
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
