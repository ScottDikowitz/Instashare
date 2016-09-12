  import {EventEmitter} from 'events';
  import UserConstants from './../constants/user_constants';
  import dispatcher from './../dispatcher/dispatcher';
  var _follow = "";
  var CHANGE_EVENT = 'CHANGE';
  var FollowStore = $.extend( {},  EventEmitter.prototype);
  FollowStore.getFollow = function(){
    return _follow;
  };

  FollowStore.addChangeListener = function(callback){
    this.on(CHANGE_EVENT, callback);
  };

  FollowStore.removeChangeListener = function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  };

  FollowStore.resetFollow = function(follow){
      _follow = follow;
  };

  FollowStore.dispatcherID = dispatcher.register(function(payload){
      if(payload.actionType === UserConstants.RECEIVE_FOLLOW){
        FollowStore.resetFollow(payload.follow);
        FollowStore.emit(CHANGE_EVENT);
      }
    });

export default FollowStore;
