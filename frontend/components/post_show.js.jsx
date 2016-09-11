import React from 'react';
import ReactRouter from 'react-router';

var PostShow = React.createClass ({

  // mixins: [ReactRouter.History],

  componentDidMount: function(){
    PostStore.addChangeListener(this._changed);
    ApiUtil.fetchPost(this.props.params.postId);
  },

  _changed: function(){
    this.setState({post: PostStore.getPost()});
  },

  callback: function(){
    // ApiUtil.fetchPost(this.props.params.postId);
  },

  componentWillUnmount: function(){
    PostStore.removeChangeListener(this._changed);
  },

  handleDelete: function(){
    var that = this;
    ApiUtil.deletePost(this.props.params.postId, function pushState(el){
      that.history.pushState(null, "/feed");
    });
  },

  render: function(){

    var userLink;
    var minutesAgo;
    var image;
    var commentBox;
    var captionUser;
    var caption;
    var theLocation;
    var liked;
    var user = CurrentUserStore.currentUser();
    var del;
    if (user) {
      if (user.id === 1){
        del = <div onClick={this.handleDelete} className="delete-post">X</div>;
        }
    }
    if (this.state){
      theLocation =<li><a className="location-link" href={"/#location/" + this.state.post.locationId}>{this.state.post.location}</a></li>;

      userLink = <a href={"/#users/" + this.state.post.user.username}>{this.state.post.user.username}</a>;
      minutesAgo = this.state.post.minutes_ago;
      image = this.state.post.image;
      commentBox = <CommentsBox userLikes={this.state.post.userLikes} numLikes={this.state.post.numLikes} likeCallbacks={[ApiActions.addUnlikeShow, ApiActions.addLikeShow]} liked={this.state.post.liked} caption={this.state.post.caption} username={this.state.post.user.username} postId={this.props.params.postId} comments={this.state.post.comments} callback={ApiActions.updateCommentsPost}/>;
    }
    return <div className="post">
                <section className="post-header">
                  <li>
                    {del}
                    {userLink}

                  <small>{minutesAgo}</small>

                  </li>
                  {theLocation}
                </section>
                <section className="post-image-container">
                  <img src={image}/>
                  </section>
                <section className="comments">
                  {commentBox}
                </section>

          </div>;
  }
});

export default PostShow;
