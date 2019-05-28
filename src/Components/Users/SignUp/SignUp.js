import React from 'react';
import { Link } from 'react-router-dom';

import './SignUp.scss';


class SignUp extends React.Component {
  render() {
    return (
      <div className="signup">
        <form className="signup__form">
          <label className="signup__title">Sign up</label>
          <input
            type="text"
            className="signup__name"
            placeholder="name"
            required
          />
          <input
            type="text"
            className="signup__login"
            placeholder="login"
            required
          />
          <input
            type="text"
            className="signup__password"
            placeholder="password"
            required
          />
          <input
            type="text"
            className="signup__email"
            placeholder="email"
            required
          />
          <Link to="/login" className='signup__link-to'>
            <input className="signup__button" value="Sign up"/>
          </Link>
        </form>
      </div>
    )
  }
}

export default SignUp;
