import React from 'react';
import CurrentUserStore from './../stores/current_user';
import PostStore from './../stores/post';
import ApiUtil from './../util/api_util';
import CommentsBox from './comments_box.js';
import ApiActions from './../actions/api_actions';

var PostShow = React.createClass ({
    contextTypes: {
            router: React.PropTypes.object.isRequired
    },

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
    ApiUtil.deletePost(this.props.params.postId, (el) => {
      this.context.router.push("/feed");
    });
  },

  render: function(){

    var userLink;
    var minutesAgo;
    var image;
    var commentBox;
    var theLocation;
    var profilePic;
    var user = CurrentUserStore.currentUser();
    var del;
    if (user) {
      if (user.id === 1){
        del = <div onClick={this.handleDelete} className="delete-post">&times;</div>;
        }
    }
    if (this.state){
      theLocation = <a className="location-link" href={"/#location/" + this.state.post.locationId}>{this.state.post.location}</a>;
      profilePic = <a href={"#/users/" + this.state.post.user.username} className={"post-head-pic"}><img src={this.state.post.profile_picture}/></a>;
      userLink = <a href={"/#users/" + this.state.post.user.username}>{this.state.post.user.username}</a>;
      minutesAgo = this.state.post.minutes_ago;
      image = this.state.post.image;
      commentBox = <CommentsBox userLikes={this.state.post.userLikes} numLikes={this.state.post.numLikes} likeCallbacks={[ApiActions.addUnlikeShow, ApiActions.addLikeShow]} liked={this.state.post.liked} caption={this.state.post.caption} username={this.state.post.user.username} postId={this.props.params.postId} comments={this.state.post.comments} callback={ApiActions.updateCommentsPost}/>;
    }
    return <div className="post">
                <section className="post-header">
                    {del}
                    <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
                    {profilePic}
                        <div style={{display: 'inline-block', verticalAlign: 'middle'}}>
                            {userLink}
                            {theLocation}
                        </div>
                    </div>
                    <div style={{display: 'table-cell', textAlign: 'right', verticalAlign: 'middle'}}>
                      <small>{minutesAgo}</small>
                    </div>
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
