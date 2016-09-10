(function(){

  var _follow = "";
  var CHANGE_EVENT = 'CHANGE';
  var FollowStore = window.FollowStore = $.extend( {},  EventEmitter.prototype);
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

  FollowStore.dispatcherID = AppDispatcher.register(function(payload){
      if(payload.actionType === UserConstants.RECEIVE_FOLLOW){
        FollowStore.resetFollow(payload.follow);
        FollowStore.emit(CHANGE_EVENT);
      }
    });

})();
