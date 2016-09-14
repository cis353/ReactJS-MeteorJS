import React, { Component } from 'react'; 
import { Link } from 'react-router';

// import Task from './Task.jsx';
 
// App component - represents the whole app
export default class NavbarHeader extends Component { 
 
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="#">Meteor React</Link>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/login">Login</Link></li>
            <li><Link to="/registration">Registration</Link></li>        
          </ul>
        </div>
      </nav>
    );
  }
}