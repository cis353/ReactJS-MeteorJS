import { Meteor } from 'meteor/meteor';
import { UserText } from '../imports/api/userText.js';

// publishes all user text
Meteor.publish('userTextPublish', () => UserText.find());
