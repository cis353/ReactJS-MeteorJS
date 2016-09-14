import {
  Meteor
}
from 'meteor/meteor';
// import '../imports/api/users.js';
import {
  UserInfo
}
from '../imports/api/users.js';

Meteor.startup(() => {
  // code to run on server at startup
});


Meteor.methods({
  checkLogin: function(email, password) {
    let userData = UserInfo.findOne({
      email, password
    }, {
      firstName: 1,
      lastName: 1,
      email: 0
    });
    console.log(userData);
    return userData;
  },

  registerUser: function(firstName, lastName, email, password) {
    let userInsert = UserInfo.insert({
      firstName, lastName, email, password, createdAt: new Date()
    });
    console.log(userInsert);
    return userInsert;
  }

});
