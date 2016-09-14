import { Meteor } from 'meteor/meteor';
import { UserInfo } from '../imports/api/users.js';
import { UserText } from '../imports/api/userText.js';

Meteor.methods({
  /**
   * Checks the login of a user
   * @param {String} email     the email of the user
   * @param {String} password  the password of the user
   */
  checkLogin(email, password) {
    return UserInfo.findOne({
      email, password,
    }, {
      firstName: 1,
      lastName: 1,
      email: 1,
    });
  },

  /**
   * Registers a new user
   * @param {String} firstName the first name of the user
   * @param {String} lastName  the last name of the user
   * @param {String} email     the email of the user
   * @param {String} password  the password of the user
   */
  registerUser(firstName, lastName, email, password) {
    return UserInfo.insert({
      firstName, lastName, email, password, createdAt: new Date(),
    });
  },

  /**
   * Inserts a new text document
   * @param {String} text   the users entry
   */
  saveText(text) {
    return UserText.insert({
      text, createdAt: new Date(),
    });
  },

});
