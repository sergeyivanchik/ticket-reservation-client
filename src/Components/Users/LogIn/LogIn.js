import React from 'react';
import { Link } from 'react-router-dom';

import './LogIn.scss'


class LogIn extends React.Component {
  render() {
    return (
      <div className="login">
        <form className="login__form">
          <label className="login__title">Log in</label>
          <input
            type="text"
            className="login__username"
            placeholder="username"
          />
          <input
            type="password"
            className="login__password"
            placeholder="password"
          />
          <Link to="/" className='login__link-to'>
            <input
              type="submit"
              className="login__button"
              value="Log in"
            />
          </Link>
          <Link to="/signup" className='login__link-to'>
            <span className="login__signup">Sign up</span>
          </Link>
        </form>
      </div>
    )
  }
}

export default LogIn;
