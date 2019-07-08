import React from 'react';
import { connect } from 'react-redux';
import { validateAll } from 'indicative';

import { signUpAsync } from '../../../actions/users.js';
import './SignUp.scss';


class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
    password_confirmation: '',
    email: ''
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = this.state;

    const rules = {
      username: 'required|string|min:3',
      email: 'required|email',
      password: 'required|string|min:6|confirmed'
    }

    const messages = {
      required: 'This {{ field }} is required.',
      'email.email': 'The email is invalid.',
      'password.confirmed': "The password doesn't match",
      'password.min': "Please, enter more, than 5 letters",
      'username.min': "Please, enter more, than 2 letters"
    }

    validateAll(data, rules, messages)
      .then(() => this.props.signUp(data))
      .catch(errors => {
        const formattesErrors = {};
        errors.forEach(error => formattesErrors[error.field] = error.message)
        this.setState({ errors: formattesErrors })
      })
  }



  render() {
    return (
      <div className="signup">
        <form className="signup__form" onSubmit={this.handleSubmit}>
          <label className="signup__title">Sign up</label>
          <input
            type="text"
            className="signup__name"
            placeholder="username"
            name="username"
            onChange={this.handleInputChange}
          />
          <span className='signup__error'>{this.state.errors ? this.state.errors.username : ''}</span>
          <input
            type="text"
            className="signup__password"
            placeholder="password"
            name="password"
            onChange={this.handleInputChange}
          />
          <span className='signup__error'>{this.state.errors ? this.state.errors.password : ''}</span>
          <input
            type="text"
            className="signup__password_confirmation"
            placeholder="password (confirm)"
            name="password_confirmation"
            onChange={this.handleInputChange}
          />
          <span className='signup__error'>{this.state.errors ? this.state.errors.password : ''}</span>
          <input
            type="text"
            className="signup__email"
            placeholder="email"
            name="email"
            onChange={this.handleInputChange}
          />
          <span className='signup__error'>{this.state.errors ? this.state.errors.email : ''}</span>
          <button className="signup__button" type="submit">Sign up</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUp(userInfo) {
    return dispatch(signUpAsync(userInfo))
  }
});

export default connect(null, mapDispatchToProps)(SignUp);
