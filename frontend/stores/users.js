  import {EventEmitter} from 'events';
  import dispatcher from './../dispatcher/dispatcher';
  import UserConstants from './../constants/user_constants';
  var _users = [];
  var CHANGE_EVENT = 'CHANGE';
  var UsersStore = $.extend( {},  EventEmitter.prototype);
  UsersStore.all = function(){
    return _users.slice(0);
  };

  UsersStore.addChangeListener = function(callback){
    this.on(CHANGE_EVENT, callback);
  };

  UsersStore.removeChangeListener = function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  };

  UsersStore.resetPosts = function(users){
      _users = users;
  };

  UsersStore.dispatcherID = dispatcher.register(function(payload){
      if(payload.actionType === UserConstants.USERS_RECEIVED){
        UsersStore.resetPosts(payload.users);
        UsersStore.emit(CHANGE_EVENT);
      }
 });

export default UsersStore;
