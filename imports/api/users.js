import { Mongo } from 'meteor/mongo';

// This is the user collection where we will store all information about our users
export const UserInfo = new Mongo.Collection('userinfo');
