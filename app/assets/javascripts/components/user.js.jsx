var UserShow = React.createClass ({
  componentDidMount: function(){
    PostStore.addChangeListener(this._changed);
    ApiUtil.fetchSingleUserPosts(this.props.params.username);
  },

  _changed: function(){
    this.setState({posts: PostStore.all()});
  },

  render: function(){
    var userPosts;
    if (this.state){
      // userPosts = this.state.posts.map(function(post){
        // return <Post key={post.id} post={post}/>;
        userPosts = <PostGrid posts={this.state.posts}/>;
    }
    return <div>{userPosts}</div>;
  }

});
