var ApiActions = window.ApiActions = {

  receiveAll: function(posts){
    AppDispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      posts: posts
    });
  },

  insertPost: function(post){
    AppDispatcher.dispatch({
      actionType: "INSERT_POST_RECEIVED",
      post: post
    });
  },

  receiveMorePosts: function(posts){
    AppDispatcher.dispatch({
      actionType: PostConstants.MORE_POSTS_RECEIVED,
      posts: posts
    });
  },

  addLike: function(like){
    AppDispatcher.dispatch({
      actionType: "LIKE_RECEIVED",
      like: like
    });
  },

  addLikeShow: function(like){
    AppDispatcher.dispatch({
      actionType: "LIKE_SHOW_RECEIVED",
      like: like
    });
  },

  addUnlikeShow: function(unlike){
    AppDispatcher.dispatch({
      actionType: "UNLIKE_SHOW_RECEIVED",
      unlike: unlike
    });
  },

  removeLike: function(unlike){
    AppDispatcher.dispatch({
      actionType: "UNLIKE_RECEIVED",
      unlike: unlike
    });
  },

  receivePost: function(post){
    AppDispatcher.dispatch({
      actionType: PostConstants.POST_RECEIVED,
      post: post
    });
  },

  receiveLocation: function(location){
    AppDispatcher.dispatch({
      actionType: LocationConstants.LOCATION_RECEIVED,
      location: location
    });

  },

  updateCommentsPostsIndex: function(comment){
    AppDispatcher.dispatch({
      actionType: "COMMENTS_RECEIVED",
      comment: comment
    });
  },

  updateCommentsPost: function(comment){
    AppDispatcher.dispatch({
      actionType: "COMMENTS_SHOW_RECEIVED",
      comment: comment
    });
  },

  receiveSingleUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },

  receiveUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },

  insertProfilePic: function(profile_pic){
    AppDispatcher.dispatch({
      actionType: "RECEIVE_PROFILE_PIC",
      profile_pic: profile_pic
    });
  },

  receiveUsers: function(users){
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    });
  },

  receiveUserPosts: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_POSTS_RECEIVED,
      user: user
    });
  },

  receiveTagPosts: function(tag){
    AppDispatcher.dispatch({
      actionType: TagConstants.TAG_POSTS_RECEIVED,
      tag: tag
    });
  },

  receiveFollow: function(follow){
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVE_FOLLOW,
      follow: follow.follow
    });
  }

};
