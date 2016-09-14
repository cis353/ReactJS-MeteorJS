import React, { Component } from 'react'; 
import { Link } from 'react-router';
 
// App component - represents the whole app
export default class NavbarHeader extends Component {   

  makeMenuOptionActive(pathName){
    return location.pathname == pathName ? "active" : "";
  }
 
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <h1 className="navbar-brand">Meteor React</h1>
          </div>
          <ul className="nav navbar-nav">
            <li className={this.makeMenuOptionActive('/login')}><Link to="/login">Login</Link></li>
            <li className={this.makeMenuOptionActive('/registration')}><Link to="/registration">Registration</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}