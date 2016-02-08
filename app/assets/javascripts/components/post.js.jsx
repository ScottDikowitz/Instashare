var Post = React.createClass ({
handleDelete: function(){
  // debugger;
  ApiUtil.deletePost(this.props.post.id, ApiActions.deletePost);
},

  render: function(){
    var user = CurrentUserStore.currentUser();
    var del;
    var nudge;
    if (user) {
      if (user.id === 1){
        del = <div onClick={this.handleDelete} className="delete-post">X</div>;
        }
        if (this.props.post.location){
          nudge = " nudge";
        }
        else
        {
          nudge = "";
        }
    }

    return <div className="post">
                <section className="post-header">
                  {del}
                  <li>
                    <a href={"#/users/" + this.props.post.user.username} className={"post-head-pic" + nudge}><img src={this.props.post.profile_picture}/></a>
                  <ReactRouter.Link to={"/users/" + this.props.post.user.username}>
                    <span>{this.props.post.user.username}</span>
                  </ReactRouter.Link>
                  <a href={"/#posts/" + this.props.post.id}><small>{this.props.post.minutes_ago}</small></a>
                  </li>
                  <li className="location-link"><a href={"/#location/" + this.props.post.locationId}>{this.props.post.location}</a></li>
                </section>
                <section className="post-image-container">
                  <img src={this.props.post.image}/></section>
                <section className="comments">


                <CommentsBox commDel={ApiActions.updateCommentsPostsIndex} userLikes={this.props.post.userLikes} numLikes={this.props.post.numLikes} likeCallbacks={[ApiActions.removeLike, ApiActions.addLike]} liked={this.props.post.liked} caption={this.props.post.caption} username={this.props.post.user.username} postId={this.props.post.id} comments={this.props.post.comments} callback={ApiActions.updateCommentsPostsIndex}/>
                </section>

          </div>;
  }

});
