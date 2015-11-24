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

  fetchPost: function(postId){
    $.ajax ({
      url: 'api/posts/' + postId,
      type: 'GET',
      dataType: 'json',
      success: function(post) {
        ApiActions.receivePost(post);
      }
    });
  },

  fetchLocation: function(locationId){
    $.ajax ({
      url: 'api/locations/' + locationId,
      type: 'GET',
      dataType: 'json',
      success: function(location) {
        ApiUtil.getMapLocation(location.place);
      }
    });
  },

  fetchLocationPosts: function(locationId){
    $.ajax ({
      url: 'api/location_posts/' + locationId,
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        // ApiUtil.getMapLocation(location.place);
        ApiActions.receiveTagPosts(data);
      }
    });
  },



  getMapLocation: function(location){

    $.ajax ({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location + "&key=AIzaSyAJGTQhnNdiql8vG1pvjQpxLouPkIrZJns",
      type: 'GET',
      dataType: 'json',
      success: function(location) {
        // that.setState({location: location.results[0]});
        ApiActions.receiveLocation(location.results[0]);
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

  fetchTag: function(tagName){
    $.ajax ({
      url: 'api/tags/' + tagName,
      type: 'GET',
      dataType: 'json',
      data: {tagName: tagName},
      success: function(data) {
        ApiActions.receiveTagPosts(data);
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

        ApiUtil.fetchPosts();
      },
      error: function(formData){
        ApiUtil.queryLocation(formData.responseText);
        ApiUtil.fetchPosts();
      }
    });
  },

  queryLocation: function(location){
    $.ajax ({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location + "&key=AIzaSyAJGTQhnNdiql8vG1pvjQpxLouPkIrZJns",
      type: 'GET',
      dataType: 'json',
      success: function(location) {
        ApiUtil.createLocation(location.results[0].address_components[0].long_name);

      }
    });

  },

  createLocation: function(location){
    $.ajax ({
      url: 'api/locations',
      type: 'POST',
      dataType: 'json',
      data: {location: location},
      success: function(data) {
        // callback && callback(data);
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

  fetchUserList: function(){

    $.ajax ({
      url: 'api/users/',
      type: 'GET',
      dataType: 'json',
      success: function(users) {
        ApiActions.receiveUsers(users);
      }
    });


  },

  updateProfilePic: function(formData, username){
    $.ajax ({
      url: 'api/users/' + username,
      type: 'PATCH',
      processData: false,
      contentType: false,
      dataType: formData,
      data: formData,
      success: function(formData) {
        // callback(username);

      },
      error: function(formData){
        // callback(username);

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
        callback && callback();
      },
      error: function(user){
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
        ApiActions.receiveFollow(data);
      }
    });

  }

};
