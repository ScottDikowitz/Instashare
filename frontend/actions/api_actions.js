import dispatcher from './../dispatcher/dispatcher';
import LocationConstants from './../constants/location_constants';
import PostConstants from './../constants/post_constants';
import TagConstants from './../constants/tag_constants';
import UserConstants from './../constants/user_constants';

var ApiActions = {
  receiveAll: function(posts){
    dispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      posts: posts
    });
  },

  insertPost: function(post){
    dispatcher.dispatch({
      actionType: "INSERT_POST_RECEIVED",
      post: post
    });
  },

  deletePost: function(postId){
    dispatcher.dispatch({
      actionType: "DELETE_POST",
      postId: postId
    });
  },

  closeModal: function(){
    dispatcher.dispatch({
      actionType: "CLOSE_MODAL"
    });
  },

  openModal: function(){
    dispatcher.dispatch({
      actionType: "OPEN_MODAL"
    });
  },

  receiveMorePosts: function(posts){
    dispatcher.dispatch({
      actionType: PostConstants.MORE_POSTS_RECEIVED,
      posts: posts
    });
  },

  addLike: function(like){
    dispatcher.dispatch({
      actionType: "LIKE_RECEIVED",
      like: like
    });
  },

  addLikeShow: function(like){
    dispatcher.dispatch({
      actionType: "LIKE_SHOW_RECEIVED",
      like: like
    });
  },

  addUnlikeShow: function(unlike){
    dispatcher.dispatch({
      actionType: "UNLIKE_SHOW_RECEIVED",
      unlike: unlike
    });
  },

  removeLike: function(unlike){
    dispatcher.dispatch({
      actionType: "UNLIKE_RECEIVED",
      unlike: unlike
    });
  },

  receivePost: function(post){
    dispatcher.dispatch({
      actionType: PostConstants.POST_RECEIVED,
      post: post
    });
  },

  receiveLocation: function(location){
    dispatcher.dispatch({
      actionType: LocationConstants.LOCATION_RECEIVED,
      location: location
    });

  },

  receiveLocations: function(locations){
    dispatcher.dispatch({
      actionType: LocationConstants.LOCATIONS_RECEIVED,
      locations: locations

    });

  },

  updateCommentsPostsIndex: function(comment){
    dispatcher.dispatch({
      actionType: "COMMENTS_RECEIVED",
      comment: comment
    });
  },

  updateCommentsPost: function(comment){
    dispatcher.dispatch({
      actionType: "COMMENTS_SHOW_RECEIVED",
      comment: comment
    });
  },

  receiveSingleUser: function(user){
    dispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },

  receiveNotifications: function(notifications){
    dispatcher.dispatch({
      actionType: "NOTIFICATIONS_RECEIVED",
      notifications: notifications
    });
  },

  receiveUser: function(user){
    dispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },

  insertProfilePic: function(profile_pic){
    dispatcher.dispatch({
      actionType: "RECEIVE_PROFILE_PIC",
      profile_pic: profile_pic
    });
  },

  updateBio: function(bio){
    dispatcher.dispatch({
      actionType: "RECEIVE_BIO",
      bio: bio
    });

  },

  receiveUsers: function(users){
    dispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    });
  },

  receiveUserPosts: function(user){
    dispatcher.dispatch({
      actionType: UserConstants.USER_POSTS_RECEIVED,
      user: user
    });
  },

  receiveTagPosts: function(tag){
    dispatcher.dispatch({
      actionType: TagConstants.TAG_POSTS_RECEIVED,
      tag: tag
    });
  },

  receiveFollow: function(follow){
    dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_FOLLOW,
      follow: follow.follow
    });
  }
};

export default ApiActions;
