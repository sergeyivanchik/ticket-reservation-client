import React from 'react';
import { Link } from 'react-router-dom';

import './LogIn.scss'


class LogIn extends React.Component {
  render() {
    return (
      <div className = "login-form">
        <form method = "get">
          <label className = "login-form__title">Log in</label>
          <input type = "text" className = "login-form__username" placeholder = "username"/>
          <input type = "password" className = "login-form__password" placeholder = "password"/>
          <Link to="/">
            <input type = "submit" className = "login-form__button" value = "Log in"/>
          </Link>
          <Link to="/signin">
            <span className = "login-form__signup" >Sign in</span>
          </Link>
        </form>
      </div>  
    )
  }
}

export default LogIn;
