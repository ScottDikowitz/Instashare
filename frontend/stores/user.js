  import {EventEmitter} from 'events';
  import UserConstants from './../constants/user_constants';
  import dispatcher from './../dispatcher/dispatcher';
  var _user = {};
  var CHANGE_EVENT = 'CHANGE';
  var UserStore = $.extend( {},  EventEmitter.prototype);
  UserStore.all = function(){
    return _user;
  };

  UserStore.addChangeListener = function(callback){
    this.on(CHANGE_EVENT, callback);
  };

  UserStore.removeChangeListener = function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  };

  UserStore.resetUser = function(user){
      _user = user;
  };

  UserStore.resetProfilePic = function(profile_pic){
    _user.profile_picture = profile_pic;
  };

  UserStore.updateBio = function(bio){
    _user.body = bio;
  };

  UserStore.dispatcherID = dispatcher.register(function(payload){
      if(payload.actionType === UserConstants.USER_RECEIVED){
        UserStore.resetUser(payload.user);
        UserStore.emit(CHANGE_EVENT);
      }
      else if(payload.actionType === UserConstants.USER_POSTS_RECEIVED){
        UserStore.resetUser(payload.user);
        UserStore.emit(CHANGE_EVENT);
      }
      else if(payload.actionType === "RECEIVE_PROFILE_PIC"){
        UserStore.resetProfilePic(payload.profile_pic.profile_picture);
        UserStore.emit(CHANGE_EVENT);
      }
      else if(payload.actionType === "RECEIVE_BIO"){
        UserStore.updateBio(payload.bio);
        UserStore.emit(CHANGE_EVENT);
      }

    });

export default UserStore;
