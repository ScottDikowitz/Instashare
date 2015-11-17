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

  fetchSingleUser: function(userId){
    $.ajax ({
      url: 'api/posts_users/' + userId,
      type: 'GET',
      dataType: 'json',
      data: {userId: parseInt(userId)},
      success: function(data) {
        ApiActions.receiveUser(data);
      }
    });
  }

};
