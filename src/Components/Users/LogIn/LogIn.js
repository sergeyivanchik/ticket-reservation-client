import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logInAsync } from '../../../actions/users.js';
import TopNavBar from '../../Navbars/TopNavbar/TopNavbar.js';
import './LogIn.scss'


class LogIn extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { logIn } = this.props;
    return (
      <div>
      <TopNavBar/>
        <div className="login">
          <form className="login__form">
            <label className="login__title">Log in</label>
            <input
              type="text"
              name="username"
              className="login__username"
              placeholder="username"
              onChange={this.handleInputChange}
            />
            <input
              type="password"
              name="password"
              className="login__password"
              placeholder="password"
              onChange={this.handleInputChange}
            />
            <span className="login__button" onClick = {() => logIn(this.state)}>Log in</span>
            <Link to="/signup" className='login__signup'>Sign up</Link>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  logIn(userInfo) {
    return dispatch(logInAsync(userInfo))
  }
});

export default connect(null, mapDispatchToProps)(LogIn);
