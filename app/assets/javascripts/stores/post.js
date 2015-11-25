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

  PostStore.insertComment = function(comment){
    // debugger;
    for (var i = 0; i < _posts.length; i++){
      if (_posts[i].id == comment.post_id){
        _posts[i].comments.push(comment);
      }
    }
  };

  PostStore.insertCommentShow = function(comment){
    _posts.comments.push(comment);

  };

  PostStore.insertLike = function(like) {
    for (var i = 0; i < _posts.length; i++){
      if (_posts[i].id == like.post_id){
        _posts[i].liked = "liked";
        _posts[i].numLikes = like.numLikes;
      }
    }
  };

  PostStore.insertLikeShow = function(like) {
    _posts.liked = "liked";
    _posts.numLikes = like.numLikes;
  };

  PostStore.insertUnlikeShow = function(unlike) {
    _posts.liked = "unliked";
    _posts.numLikes = unlike.numLikes;
  };

  PostStore.removeLike = function(unlike) {
    for (var i = 0; i < _posts.length; i++){
      if (_posts[i].id == unlike.post_id){
        _posts[i].liked = "unliked";
        _posts[i].numLikes = unlike.numLikes;
      }
    }
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
      else if(payload.actionType === "COMMENT_RECEIVED"){
        PostStore.insertComment(payload.comment);
        PostStore.emit(CHANGE_EVENT);
      }
      else if(payload.actionType === "LIKE_RECEIVED"){
        PostStore.insertLike(payload.like);
        PostStore.emit(CHANGE_EVENT);
      }
      else if(payload.actionType === "LIKE_SHOW_RECEIVED"){
        PostStore.insertLikeShow(payload.like);
        PostStore.emit(CHANGE_EVENT);
      }
      else if(payload.actionType === "UNLIKE_SHOW_RECEIVED"){
        PostStore.insertUnlikeShow(payload.unlike);
        PostStore.emit(CHANGE_EVENT);
      }
      else if(payload.actionType === "COMMENT_SHOW_RECEIVED"){
        PostStore.insertCommentShow(payload.comment);
        PostStore.emit(CHANGE_EVENT);
      }
      else if(payload.actionType === "UNLIKE_RECEIVED"){
        PostStore.removeLike(payload.unlike);
        PostStore.emit(CHANGE_EVENT);
      }
    });

})();
