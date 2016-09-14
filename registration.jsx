// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// import {UserInfo} from '../api/users.js';
 
// // App component - represents the whole app
// export default class RegistrationForm extends Component {

//   registerSubmit(event){    
//     event.preventDefault();
//     const vm = this,
//     email = ReactDOM.findDOMNode(this.refs.txtEmail).value.trim(),
//     firstName = ReactDOM.findDOMNode(this.refs.txtFname).value.trim(),
//     lastName = ReactDOM.findDOMNode(this.refs.txtLname).value.trim(),
//     password = ReactDOM.findDOMNode(this.refs.txtPassword).value.trim();

//     Meteor.call("registerUser", firstName, lastName, email, password, function(error,result){
//       if(error)
//         console.log(error);
//       else{
//         alert("registration sucess");
//         vm.clearFields();
//       }
//     });
//   }

//   clearFields(){    
//     ReactDOM.findDOMNode(this.refs.txtEmail).value="";
//     ReactDOM.findDOMNode(this.refs.txtFname).value="";
//     ReactDOM.findDOMNode(this.refs.txtLname).value="";
//     ReactDOM.findDOMNode(this.refs.txtPassword).value="";
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
//             <label className="control-label col-sm-2" htmlFor="email">First name:</label>
//             <div className="col-sm-10">
//               <input ref="txtFname" type="text" className="form-control" placeholder="Enter First Name" />
//             </div>
//           </div>
//           <div className="form-group">
//             <label className="control-label col-sm-2" htmlFor="email">Last name:</label>
//             <div className="col-sm-10">
//               <input ref="txtLname" type="text" className="form-control" placeholder="Enter lastName" />
//             </div>
//           </div>
//           <div className="form-group">
//             <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
//             <div className="col-sm-10"> 
//               <input ref="txtPassword" type="password" className="form-control" placeholder="Enter password" />
//             </div>
//           </div>
//         {/*  <div className="form-group"> 
//                     <div className="col-sm-offset-2 col-sm-10">
//                       <div className="checkbox">
//                         <label><input type="checkbox" /> Remember me</label>
//                       </div>
//                     </div>
//                   </div>*/}
//           <div className="form-group"> 
//             <div className="col-sm-offset-2 col-sm-10">
//               <button type="submit" onClick={this.registerSubmit.bind(this)}   className="btn btn-default">Submit</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }