var ApiActions = window.ApiActions = {

  receiveAll: function(posts){
    AppDispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      posts: posts
    });
  },

  receivePost: function(post){
    AppDispatcher.dispatch({
      actionType: PostConstants.POST_RECEIVED,
      post: post
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
      user: user
    });
  },

  receiveFollow: function(follow){
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVE_FOLLOW,
      follow: follow.follow
    });
  }

};
