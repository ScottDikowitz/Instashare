var Post = React.createClass ({

  render: function(){
    return <div className="post">
                <section className="post-header">
                  <li>
                  <ReactRouter.Link to={"/users/" + this.props.post.user.username}>
                    <span>{this.props.post.user.username}</span>
                  </ReactRouter.Link>
                  <small>{this.props.post.minutes_ago}</small>
                  </li>
                  <li className="location-link"><a href={"/#location/" + this.props.post.locationId}>{this.props.post.location}</a></li>
                </section>
                <section className="post-image-container">
                  <img src={this.props.post.image}/></section>
                <section className="comments">


                <CommentsBox likeCallbacks={[ApiActions.removeLike, ApiActions.addLike]} liked={this.props.post.liked} caption={this.props.post.caption} username={this.props.post.user.username} postId={this.props.post.id} comments={this.props.post.comments}/>
                </section>

          </div>;
  }

});
