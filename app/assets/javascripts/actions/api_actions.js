var ApiActions = window.ApiActions = {

  receiveAll: function(posts){
    AppDispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      posts: posts
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

  receivePost: function(post){
    AppDispatcher.dispatch({
      actionType: PostConstants.APPEND_POSTS,
      post: post
    });

  },

  receiveFollow: function(follow){
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVE_FOLLOW,
      follow: follow.follow
    });
  }

};
