import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';

import {UserInfo} from '../../api/users.js';
 
// import Task from './Task.jsx';
 
// App component - represents the whole app
export default class LoginForm extends Component { 

  loginSubmit(event){
    event.preventDefault();
    const email = ReactDOM.findDOMNode(this.refs.txtEmail).value.trim(),
    password = ReactDOM.findDOMNode(this.refs.txtPassword).value.trim();

    // let userData = UserInfo.findOne({ email, password});
    if(email==""||email==null){
       ReactDOM.findDOMNode(this.refs.emailError).innerHTML="Email address required";
    }else{
      if(password==null||password==""){
         ReactDOM.findDOMNode(this.refs.pwdError).innerHTML="Password required";
      }else{
        Meteor.call("checkLogin", email, password,function(error, result){
         if(error)
            console.log(error);
          else{
            if(result){
              alert("Login success");
              browserHistory.push('/home');                  
            }
            else  
              alert("Error in Login, Please check EmailID and password");    
          }
        });
      }
    }
      
  }
  clearError(e){
    document.getElementById(e).innerHTML=""
  } 
 
  render() {
    return (
      <div className="container">
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="email">Email:</label>
            <div className="col-sm-10">
              <input ref="txtEmail" type="email" className="form-control" placeholder="Email address" onKeyPress={this.clearError.bind(this,"emailError")} />
              <p ref="emailError" className="text-danger" id="emailError"></p>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
            <div className="col-sm-10"> 
              <input ref="txtPassword" type="password" className="form-control" placeholder="Password" onKeyPress={this.clearError.bind(this,"pwdError")}/><p ref="pwdError" className="text-danger" id="pwdError"></p>
            </div>
          </div>        
          <div className="form-group"> 
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" onClick={this.loginSubmit.bind(this)} className="btn btn-default">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}