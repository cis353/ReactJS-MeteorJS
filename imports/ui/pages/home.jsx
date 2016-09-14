import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import {UserText} from '../../api/userText.js';

// Home  component - represents the home activites
export default class HomePage extends Component {  
 
  render() {  
    return (
      <div className="container">
      <h1>HomePage</h1>        
      </div>
    );
  }
}