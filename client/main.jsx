import React, { PropTypes } from 'react';

import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import NavbarHeader from '../imports/ui/includes/navbar.jsx';
import RegistrationForm from '../imports/ui/pages/registration.jsx';
import LoginForm from '../imports/ui/pages/login.jsx';
import HomePage from '../imports/ui/pages/home.jsx';

const MyRoutes = ({ children }) => (
  <div>
    <NavbarHeader />
    {children}
  </div>
);

MyRoutes.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={MyRoutes}>
        <IndexRoute component={LoginForm} />
        <Route path="login" component={LoginForm} />
        <Route path="registration" component={RegistrationForm} />
        <Route path="home" component={HomePage} />
      </Route>
    </Router>
  ), document.getElementById('loginApp'));
});
