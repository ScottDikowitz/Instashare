(function(){

  var _users = [];
  var CHANGE_EVENT = 'CHANGE';
  var UsersStore = window.UsersStore = $.extend( {},  EventEmitter.prototype);
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

  UsersStore.dispatcherID = AppDispatcher.register(function(payload){
      if(payload.actionType === UserConstants.USERS_RECEIVED){
        UsersStore.resetPosts(payload.users);
        UsersStore.emit(CHANGE_EVENT);
      }
    });

})();
