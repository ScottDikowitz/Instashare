(function(){

  var _tag = {};
  var CHANGE_EVENT = 'CHANGE';
  var TagStore = window.TagStore = $.extend( {},  EventEmitter.prototype);
  TagStore.all = function(){
    return _tag;
  };

  TagStore.addChangeListener = function(callback){
    this.on(CHANGE_EVENT, callback);
  };

  TagStore.removeChangeListener = function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  };

  TagStore.resetTag = function(tag){
      _tag = tag;
  };

  TagStore.dispatcherID = AppDispatcher.register(function(payload){
      if(payload.actionType === TagConstants.TAG_RECEIVED){
        TagStore.resetTag(payload.tag);
        TagStore.emit(CHANGE_EVENT);
      }
      else if(payload.actionType === TagConstants.TAG__POSTS_RECEIVED){
        TagStore.resetTag(payload.tag);
        TagStore.emit(CHANGE_EVENT);
      }
    });

})();
