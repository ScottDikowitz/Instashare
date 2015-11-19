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
        ApiActions.receiveAll(data);
      }
    });
  },

  createPost: function(post){
    $.ajax ({
      url: 'api/posts',
      type: 'POST',
      dataType: 'json',
      data: {post: post},
      success: function(data) {
        // debugger;
        // ApiActions.receivePost(data);
      }
    });

  }

};
