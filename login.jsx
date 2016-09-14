// import React, { Component, PropTypes } from 'react';
// import { createContainer } from 'meteor/react-meteor-data';
// import ReactDOM from 'react-dom';

// import {UserInfo} from '../api/users.js';
 
// // import Task from './Task.jsx';
 
// // App component - represents the whole app
// export default class LoginForm extends Component { 
//   loginSubmit(event){
//     event.preventDefault();
//     const email = ReactDOM.findDOMNode(this.refs.txtEmail).value.trim(),
//     password = ReactDOM.findDOMNode(this.refs.txtPassword).value.trim();
    
//     Meteor.call("checkLogin", email, password,function(error, result){      
//       if(error)
//         console.log(error);
//       else{
//         if(result)
//           alert("login success");
//         else  
//           alert("login failed");    
//       }
//     });
//   } 
 
//   render() {
//     return (
//       <div className="container">
//         <form className="form-horizontal">
//           <div className="form-group">
//             <label className="control-label col-sm-2" htmlFor="email">Email:</label>
//             <div className="col-sm-10">
//               <input ref="txtEmail" type="email" className="form-control" placeholder="Enter email" />
//             </div>
//           </div>
//           <div className="form-group">
//             <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
//             <div className="col-sm-10"> 
//               <input ref="txtPassword" type="password" className="form-control" placeholder="Enter password" />
//             </div>
//           </div>
//           {/*<div className="form-group"> 
//                       <div className="col-sm-offset-2 col-sm-10">
//                         <div className="checkbox">
//                           <label><input type="checkbox" /> Remember me</label>
//                         </div>
//                       </div>
//                     </div>*/}
//           <div className="form-group"> 
//             <div className="col-sm-offset-2 col-sm-10">
//               <button type="submit" onClick={this.loginSubmit.bind(this)} className="btn btn-default">Submit</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }