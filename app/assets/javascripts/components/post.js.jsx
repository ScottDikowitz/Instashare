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
                </section>
                <section className="post-image-container">
                  <img src={this.props.post.image}/></section>
                <section className="comments">

                <ReactRouter.Link to={"/users/" + this.props.post.user.username}>
                  <span>{this.props.post.user.username}: </span>
                </ReactRouter.Link>
                  <span>{this.props.post.caption}</span>
                <CommentsBox comments={this.props.post.comments}/>
                </section>
                <section>
                  <CreateComment post_id={this.props.post.id}/>
                </section>
          </div>;
  }

});
