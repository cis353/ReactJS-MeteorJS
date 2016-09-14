import React from 'react';
import ReactDom from 'react-dom';

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


