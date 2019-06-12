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
            <span className="login__button" onClick = {() => {this.props.onLogIn(this.state)}}>Log in</span>
            <Link to="/signup" className='login__link-to'>
              <span className="login__signup">Sign up</span>
            </Link>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onLogIn(userInfo) {
    return dispatch(logInAsync(userInfo))
  }
});

export default connect(null, mapDispatchToProps)(LogIn);
