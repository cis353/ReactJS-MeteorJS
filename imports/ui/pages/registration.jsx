import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {UserInfo} from '../../api/users.js';
 
// App component - represents the whole app
export default class RegistrationForm extends Component {
  registerSubmit(event){    
    event.preventDefault();
   const self = this,
    email = ReactDOM.findDOMNode(this.refs.txtEmail).value.trim(),
    firstName = ReactDOM.findDOMNode(this.refs.txtFname).value.trim(),
    lastName = ReactDOM.findDOMNode(this.refs.txtLname).value.trim(),
    password = ReactDOM.findDOMNode(this.refs.txtPassword).value.trim();

    if(email==null||email==""){
      ReactDOM.findDOMNode(this.refs.emailError).innerHTML="Email address required";
    }else{
      if(firstName==""||firstName==null){
        ReactDOM.findDOMNode(this.refs.fnameError).innerHTML="First name required";
      }else{
        if(lastName==""||lastName==null){
          ReactDOM.findDOMNode(this.refs.lnameError).innerHTML="Last name required";
        }else{
          if(password==""||password==null){
            ReactDOM.findDOMNode(this.refs.pwdError).innerHTML="Password should not blank";
          }else{
            Meteor.call("registerUser", firstName, lastName, email, password, function(error,result){
              if(error)
                console.log(error);
              else{
                alert("Registration success");
                self.clearFields();
              }
            });
          }
        }
      }      
    }    
  }

  clearError(e){
    document.getElementById(e).innerHTML=''
  }


  clearFields(){    
    ReactDOM.findDOMNode(this.refs.txtEmail).value="";
    ReactDOM.findDOMNode(this.refs.txtFname).value="";
    ReactDOM.findDOMNode(this.refs.txtLname).value="";
    ReactDOM.findDOMNode(this.refs.txtPassword).value="";
  }
  
  render() {
    return (
      <div className="container">
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="email">Email:</label>
            <div className="col-sm-10">
              <input ref="txtEmail" type="email" className="form-control" placeholder="Enter email" onKeyPress={this.clearError.bind(this,"emailError")}/><p ref="emailError" className="text-danger" id="emailError"></p>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="email">First name:</label>
            <div className="col-sm-10">
              <input ref="txtFname" type="text" className="form-control" placeholder="Enter First Name" onKeyPress={this.clearError.bind(this,"fnameError")}/><p ref="fnameError" className="text-danger" id="fnameError"></p>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="email">Last name:</label>
            <div className="col-sm-10">
              <input ref="txtLname" type="text" className="form-control" placeholder="Enter lastName" onKeyPress={this.clearError.bind(this,"lnameError")}/><p ref="lnameError" className="text-danger" id="lnameError"></p>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
            <div className="col-sm-10"> 
              <input ref="txtPassword" type="password" className="form-control" placeholder="Enter password" onKeyPress={this.clearError.bind(this,"pwdError")}/><p ref="pwdError" className="text-danger" id="pwdError"></p>
            </div>
          </div>        
          <div className="form-group"> 
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" onClick={this.registerSubmit.bind(this)}   className="btn btn-default">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}