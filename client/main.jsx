import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import NavbarHeader from '../imports/ui/includes/navbar.jsx';
import RegistrationForm from '../imports/ui/registration.jsx';



// import MyRoutes from 'imports/ui/includes/route.jsx';
import LoginForm from '../imports/ui/login.jsx';
class MyRoutes extends React.Component{
  render(){
    return (
      <div>
        <NavbarHeader/>
        {this.props.children}               
      </div>
    )
  }
}

 
Meteor.startup(() => {
  render(<Router history = {browserHistory}>
      <Route path = "/" component = {MyRoutes}>
         <IndexRoute component = {NavbarHeader} />
         <Route path = "login" component = {LoginForm} />
         <Route path = "registration" component = {RegistrationForm} />
      </Route>
   </Router>, document.getElementById('loginApp'));
}); 





// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

// import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
