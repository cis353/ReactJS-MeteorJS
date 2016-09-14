import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';

// App component - represents the whole app
export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.clearError = this.clearError.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
  }

  /**
   * Submits the form with its data to attempt to log the user in
   * @param {Object} event  the event from the form submission
   */
  loginSubmit(event) {
    event.preventDefault();
    const email = this.refs.txtEmail.value.trim();
    const password = this.refs.txtPassword.value.trim();

    if (email === '' || email === null) {
      this.refs.emailError.innerHTML = 'Email address required';
    } else {
      if (password == null || password === '') {
        this.refs.pwdError.innerHTML = 'Password required';
      } else {
        Meteor.call('checkLogin', email, password, (error, result) => {
          if (error) {
            console.log(error);
          } else {
            if (result) {
              alert('Login success');
              browserHistory.push('/home');
            } else {
              alert('Error in Login, Please check EmailID and password');
            }
          }
        });
      }
    }
  }

  /**
   * Clears the errors on keyup of an input field
   * @param {String} element  the ref to lookup
   */
  clearError(element) {
    return () => { this.refs[element].innerHTML = ''; };
  }

  render() {
    return (
      <div className="container">
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="email">Email:</label>
            <div className="col-sm-10">
              <input
                ref="txtEmail"
                type="email"
                className="form-control"
                placeholder="Email address"
                onChange={this.clearError('emailError')}
              />
              <p ref="emailError" className="text-danger" id="emailError" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
            <div className="col-sm-10">
              <input
                ref="txtPassword"
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={this.clearError('pwdError')}
              />
              <p ref="pwdError" className="text-danger" id="pwdError" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" onClick={this.loginSubmit} className="btn btn-default">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
