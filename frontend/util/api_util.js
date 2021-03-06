import ApiActions from './../actions/api_actions';
import CurrentUserActions from './../actions/current_user_actions';

var ApiUtil = {

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

  getNotifications: function(){
    $.ajax ({
      url: 'api/notifications',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
          console.log(data);
        ApiActions.receiveNotifications(data);
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

  deletePost: function(postId, callback){
    $.ajax ({
      url: 'api/posts/' + postId,
      type: 'DELETE',
      dataType: 'json',
      success: function(post) {
        callback(postId);
      }
    });
  },

  deleteComment: function(commentId, callback){
    $.ajax ({
      url: 'api/comments/' + commentId,
      type: 'DELETE',
      dataType: 'json',
      success: function(data) {
        callback && callback(data);
      }
    });
  },

  loadMorePosts: function(pageNum){
    $.ajax ({
      url: 'api/posts',
      type: 'GET',
      dataType: 'json',
      data: {pageNum: pageNum},
      success: function(posts) {
        ApiActions.receiveMorePosts(posts);
      }
    });
  },

  createLike: function(post_id, callback){
  $.ajax ({
    url: 'api/likes',
    type: 'POST',
    dataType: 'json',
    data: {like: {post_id: post_id}},
    success: function(data) {
      callback && callback(data);
    }
  });

},

removeLike: function(post_id, callback){
$.ajax ({
  url: 'api/likes/' + 1,
  type: 'DELETE',
  dataType: 'json',
  data: {like: {post_id: post_id}},
  success: function(data) {
    // ApiActions.removeLike(data);
    callback && callback(data);
  }
});

},

  fetchLocation: function(locationId){
    $.ajax ({
      url: 'api/locations/' + locationId,
      type: 'GET',
      dataType: 'json',
      success: function(location) {
        ApiActions.receiveLocation(location);
      }
    });
  },

  fetchLocationsList: function(query){
    $.ajax ({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + query + "&key=AIzaSyAJGTQhnNdiql8vG1pvjQpxLouPkIrZJns",
      type: 'GET',
      dataType: 'json',
      success: function(locations) {

        var addresses = locations.results.map(function(location){
          return location.formatted_address;
        });
        ApiActions.receiveLocations(addresses.slice(0,4));
      }
    });
  },

  fetchLocationPosts: function(locationId){
    $.ajax ({
      url: 'api/location/' + locationId + "/posts",
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        ApiActions.receiveTagPosts(data);
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
      dataType: 'json',
      data: formData,
      success: function(data) {
        ApiActions.insertPost(data.post);
      }
    });
  },

  queryLocation: function(location, post){
    $.ajax ({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location + "&key=AIzaSyAJGTQhnNdiql8vG1pvjQpxLouPkIrZJns",
      type: 'GET',
      dataType: 'json',
      success: function(location) {
        ApiUtil.createLocation(location.results[0].address_components[0].long_name, post);

      }
    });

  },

  createLocation: function(location, post){
    $.ajax ({
      url: 'api/locations',
      type: 'POST',
      dataType: 'json',
      data: {location: location},
      success: function(data) {
        post.location = data.location;
        post.locationId = data.locationId;
        ApiActions.insertPost(post);
      }
    });

  },

  followUser: function(follow, cb){
    $.ajax ({
      url: 'api/follows',
      type: 'POST',
      dataType: 'json',
      data: {follow: follow},
      success: function(data) {
          if (typeof cb === 'undefined'){
            ApiActions.receiveFollow(data);
          } else {
              cb({userId: follow.follower_id, following: true});
          }
      }
    });

  },

  fetchUserList: function(page){

    $.ajax ({
      url: 'api/users/',
      type: 'GET',
      dataType: 'json',
      data: {page: page},
      success: function(users) {
        ApiActions.receiveUsers(users.users);
      }
    });
  },

  fetchUsersPage: function(page){
    $.ajax ({
      url: 'api/users/',
      type: 'GET',
      dataType: 'json',
      data: {page: page},
      success: function(users) {
        ApiActions.receiveUsers(users.users);
      }
    });
  },

  updateBio: function(bio){
    $.ajax ({
      url: 'api/users/' + 1,
      type: 'PATCH',
      dataType: 'json',
      data: {user: {body: bio}},
      success: function(bio) {
        ApiActions.updateBio(bio.body);
      },
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
        ApiActions.insertProfilePic(JSON.parse(formData.responseText));
      }
    });

  },

unfollowUser: function(follow, cb){
  $.ajax ({
    url: 'api/follows/' + follow.follower_id,
    type: 'DELETE',
    dataType: 'json',
    data: {follow: follow},
    success: function(data) {
      if (typeof cb === 'undefined'){
        ApiActions.receiveFollow(data);
      } else {
          cb({userId: follow.follower_id, following: false});
      }
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

export default ApiUtil;
