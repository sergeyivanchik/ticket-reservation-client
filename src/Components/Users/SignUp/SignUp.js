import React from 'react';
import { Link } from 'react-router-dom';

import './SignUp.scss';


class SignUp extends React.Component {
  render() {
    return (
      <div className="signup-form">
        <form>
          <label className="signup-form__title">Sign up</label>
          <input
            type="text"
            className="signup-form__name"
            placeholder="name"
            required
          />
          <input
            type="text"
            className="signup-form__login"
            placeholder="login"
            required
          />
          <input
            type="text"
            className="signup-form__password"
            placeholder="password"
            required
          />
          <input
            type="text"
            className="signup-form__email"
            placeholder="email"
            required
          />
          <Link to="/login">
            <input
              type="submit"
              className="signup-form__button"
              value="Sign up"
            />
          </Link>
        </form>
      </div>
    )
  }
}

export default SignUp;
