import React from 'react';
import { Link } from 'react-router-dom';

import './SignIn.scss';


class SignIn extends React.Component {
  render() {
    return (
      <div className="signin-form">
        <form method="get">
          <label className="signin-form__title">Sign in</label>
          <input type="text" className="signin-form__name" placeholder="name" required/>
          <input type="text" className="signin-form__name" placeholder="login" required/>
          <input type="text" className="signin-form__password" placeholder="password" required/>
          <input type="text" className="signin-form__email" placeholder="email" required/>
          <Link to="/login">
            <input type="submit" className="signin-form__button" value="Sign in"/>
          </Link>
        </form>
      </div>  
    )
  }
}

export default SignIn;
