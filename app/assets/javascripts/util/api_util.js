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

  createPost: function(formData){

    $.ajax ({
      url: 'api/posts',
      type: 'POST',
      processData: false,
      contentType: false,
      dataType: formData,
      data: formData,
      success: function(formData) {

        ApiActions.receivePost(formData);
      },
      error: function(formData){

        ApiActions.receivePost(formData);
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
        // debugger;
        // ApiActions.receivePost(data);
      }
    });

  },

  createComment: function(comment){
    $.ajax ({
      url: 'api/comments',
      type: 'POST',
      dataType: 'json',
      data: {comment: comment},
      success: function(data) {
        // debugger;
        // ApiActions.receivePost(data);
      }
    });

  }

};
