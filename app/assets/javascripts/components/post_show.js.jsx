var PostShow = React.createClass ({

  componentDidMount: function(){
    PostStore.addChangeListener(this._changed);
    ApiUtil.fetchPost(this.props.params.postId);
  },

  _changed: function(){
    this.setState({post: PostStore.getPost()});
  },

  callback: function(){
    ApiUtil.fetchPost(this.props.params.postId);
  },

  componentWillUnmount: function(){
    PostStore.removeChangeListener(this._changed);
  },

  render: function(){

    // debugger;
    var userLink;
    var minutesAgo;
    var image;
    var commentBox;
    var captionUser;
    var caption;
    var theLocation;
    var liked;
    if (this.state){
      theLocation =<li><a className="location-link" href={"/#location/" + this.state.post.locationId}>{this.state.post.location}</a></li>;

      userLink = <a href={"/#users/" + this.state.post.user.username}>{this.state.post.user.username}</a>;
      minutesAgo = this.state.post.minutes_ago;
      image = this.state.post.image;
      commentBox = <CommentsBox liked={this.state.post.liked} caption={this.state.post.caption} username={this.state.post.user.username} postId={this.props.params.postId} comments={this.state.post.comments} callback={this.callback}/>;
    }
    return <div className="post">
                <section className="post-header">
                  <li>
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
