import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

// App component - represents the whole app
export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.clearError = this.clearError.bind(this);
    this.registerSubmit = this.registerSubmit.bind(this);
  }

  /**
   * Submits the form with its data to attempt to register a new user
   * @param {Object} event  the event from the form submission
   */
  registerSubmit(event) {
    event.preventDefault();
    const self = this;
    const email = this.refs.txtEmail.value.trim();
    const firstName = this.refs.txtFname.value.trim();
    const lastName = this.refs.txtLname.value.trim();
    const password = this.refs.txtPassword.value.trim();

    if (!email) {
      this.refs.emailError.innerHTML = 'Email address required';
    }

    if (!firstName) {
      this.refs.fnameError.innerHTML = 'First name required';
    }

    if (!lastName) {
      this.refs.lnameError.innerHTML = 'Last name required';
    }

    if (!password) {
      this.refs.pwdError.innerHTML = 'Password should not blank';
    }

    if (email && firstName && lastName && password) {
      Meteor.call('registerUser', firstName, lastName, email, password, (error) => {
        if (error) {
          console.log(error);
        } else {
          alert('Registration success');
          self.clearFields();
        }
      });
    }
  }

  /**
   * Clears any form errors
   */
  clearFields() {
    this.refs.txtEmail.value = '';
    this.refs.txtFname.value = '';
    this.refs.txtLname.value = '';
    this.refs.txtPassword.value = '';
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
                placeholder="Enter email"
                onChange={this.clearError('emailError')}
              />
              <p ref="emailError" className="text-danger" id="emailError" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="email">First name:</label>
            <div className="col-sm-10">
              <input
                ref="txtFname"
                type="text"
                className="form-control"
                placeholder="Enter First Name"
                onChange={this.clearError('fnameError')}
              />
              <p ref="fnameError" className="text-danger" id="fnameError" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="email">Last name:</label>
            <div className="col-sm-10">
              <input
                ref="txtLname"
                type="text"
                className="form-control"
                placeholder="Enter lastName"
                onChange={this.clearError('lnameError')}
              />
              <p ref="lnameError" className="text-danger" id="lnameError" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
            <div className="col-sm-10">
              <input
                ref="txtPassword"
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={this.clearError('pwdError')}
              />
              <p ref="pwdError" className="text-danger" id="pwdError" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" onClick={this.registerSubmit} className="btn btn-default">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
