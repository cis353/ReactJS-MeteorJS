import React from 'react';
import ReactDom from 'react-dom';

// import NavbarHeader import 'imports/ui/includes/navbar.jsx';
// import LoginForm import 'imports/ui/login.jsx';


class MyRoutes extends React.Component{
  render(){
    return {
      <div>
        <NavbarHeader/>
        {this.props.children}                
      </div>
    }
  }
}

export default MyRoutes;


