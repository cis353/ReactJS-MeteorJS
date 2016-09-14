import {
  UserText
}
from '../imports/api/userText.js';


Meteor.publish("userTextPublish", function() {
  return UserText.find();
});
