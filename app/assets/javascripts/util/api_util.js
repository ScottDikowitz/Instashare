var ApiUtil = window.ApiUtil = {

  fetchPosts: function(){
    $.ajax ({
      url: 'api/posts',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        ApiActions.receiveAll(data);
      }
    });
  },

  fetchSingleUserPosts: function(username){
    $.ajax ({
      url: 'api/users/' + username,
      type: 'GET',
      dataType: 'json',
      data: {username: username},
      success: function(data) {
        ApiActions.receiveUserPosts(data);
      }
    });
  },

  fetchUser: function(username){
    $.ajax ({
      url: 'api/users/' + username,
      type: 'GET',
      dataType: 'json',
      data: {username: username},
      success: function(data) {
        ApiActions.receiveUserPosts(data);
      }
    });
  },

  createPost: function(formData, callback){

    $.ajax ({
      url: 'api/posts',
      type: 'POST',
      processData: false,
      contentType: false,
      dataType: formData,
      data: formData,
      success: function(formData) {

        // ApiActions.receivePost(formData);
        ApiUtil.fetchPosts();
      },
      error: function(formData){
        // ApiActions.receivePost(formData);
        // callback && callback();
        ApiUtil.fetchPosts();
      }
    });
  },

  followUser: function(follow){
    $.ajax ({
      url: 'api/follows',
      type: 'POST',
      dataType: 'json',
      data: {follow: follow},
      success: function(data) {
        ApiActions.receiveFollow(data);
      }
    });

  },

unfollowUser: function(follow){
  $.ajax ({
    url: 'api/follows/' + follow.follower_id,
    type: 'DELETE',
    dataType: 'json',
    data: {follow: follow},
    success: function(data) {
      ApiActions.receiveFollow(data);
    }
  });

},

  createComment: function(comment, callback){
    $.ajax ({
      url: 'api/comments',
      type: 'POST',
      dataType: 'json',
      data: {comment: comment},
      success: function(data) {
        callback && callback(data);
      }
    });

  },

  createUser: function (attrs, callback) {
    $.ajax({
      url: 'api/users',
      type: 'POST',
      dataType: 'json',
      data: {user: attrs},
      success: function (user) {
        CurrentUserActions.receiveCurrentUser(user);
        debugger;
        callback && callback();
      },
      error: function(user){
        debugger;
        CurrentUserActions.receiveCurrentUser(user);
        callback && callback();
      }
    });
  },

  fetchFollowStatus: function(curUser){
    $.ajax ({
      url: 'api/follows/' + curUser.username,
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        // debugger;
        ApiActions.receiveFollow(data);
      }
    });

  }

};
