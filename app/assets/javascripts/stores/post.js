(function(){

  var _posts = [];
  var CHANGE_EVENT = 'CHANGE';
  var PostStore = window.PostStore = $.extend( {},  EventEmitter.prototype);
  PostStore.all = function(){
    return _posts.slice(0);
  };

  PostStore.addChangeListener = function(callback){
    this.on(CHANGE_EVENT, callback);
  };

  PostStore.removeChangeListener = function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  };

  PostStore.resetPosts = function(posts){
      _posts = posts;
  };

  PostStore.getPost = function(posts){
      return _posts;
  };

  PostStore.dispatcherID = AppDispatcher.register(function(payload){
      if(payload.actionType === PostConstants.POSTS_RECEIVED){
        PostStore.resetPosts(payload.posts);
        PostStore.emit(CHANGE_EVENT);
      }
      else if(payload.actionType === PostConstants.POST_RECEIVED){
        PostStore.resetPosts(payload.post);
        PostStore.emit(CHANGE_EVENT);
      }
    });

})();
