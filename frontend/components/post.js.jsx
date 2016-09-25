import React from 'react';
const ReactRouter = require('react-router');
import ApiActions from './../actions/api_actions';
import ApiUtil from './../util/api_util';
import CurrentUserStore from './../stores/current_user';
import CommentsBox from './comments_box.js';

var Post = React.createClass ({
  handleDelete: function(){
    ApiUtil.deletePost(this.props.post.id, ApiActions.deletePost);
  },

  render: function(){
    var user = CurrentUserStore.currentUser();
    var del;
    var nudge;
    if (user) {
      if (user.id === 1){
        del = <div onClick={this.handleDelete} className="delete-post">&times;</div>;
        }
      if (this.props.post.location){
        nudge = " nudge";
      } else {
        nudge = "";
      }
    }

    return <div className="post">
                <section className="post-header">
                  {del}
                  <div style={{display: 'table-cell', width: '50%', verticalAlign: 'middle'}}>
                      <a href={"#/users/" + this.props.post.user.username} className={"post-head-pic"}><img src={this.props.post.profile_picture}/></a>
                      <div style={{display: 'inline-block', verticalAlign: 'middle'}}>
                          <ReactRouter.Link to={"/users/" + this.props.post.user.username}>
                              <span>{this.props.post.user.username}</span>
                          </ReactRouter.Link>
                      <a className='location-link' href={"/#location/" + this.props.post.locationId}>{this.props.post.location}</a>
                      </div>
                </div>
                <div style={{display: 'table-cell', width: '50%', textAlign: 'right', verticalAlign: 'middle'}}>
                  <a href={"/#posts/" + this.props.post.id}><small>{this.props.post.minutes_ago}</small></a>
              </div>
                </section>
                <section className="post-image-container">
                  <img src={this.props.post.image}/></section>
                <section className="comments">
                <CommentsBox commDel={ApiActions.updateCommentsPostsIndex} userLikes={this.props.post.userLikes} numLikes={this.props.post.numLikes} likeCallbacks={[ApiActions.removeLike, ApiActions.addLike]} liked={this.props.post.liked} caption={this.props.post.caption} username={this.props.post.user.username} postId={this.props.post.id} comments={this.props.post.comments} callback={ApiActions.updateCommentsPostsIndex}/>
                </section>

          </div>;
  }
});

export default Post;
