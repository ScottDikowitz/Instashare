(function(){

  var _users = [];
  var CHANGE_EVENT = 'CHANGE';
  var UserStore = window.UserStore = $.extend( {},  EventEmitter.prototype);
  UserStore.all = function(){
    return _users.slice(0);
  };

  UserStore.addChangeListener = function(callback){
    this.on(CHANGE_EVENT, callback);
  };

  UserStore.removeChangeListener = function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  };

  UserStore.resetUsers = function(users){
      _users = users;
  };

  UserStore.dispatcherID = AppDispatcher.register(function(payload){
      if(payload.actionType === UserConstants.USER_RECEIVED){
        UserStore.resetUsers(payload.users);
        UserStore.emit(CHANGE_EVENT);
      }
    });

})();
