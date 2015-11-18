var UserShow = React.createClass ({
  componentDidMount: function(){
    PostStore.addChangeListener(this._changed);
    ApiUtil.fetchSingleUserPosts(this.props.params.username);
  },

  componentWillUnmount: function(){
    PostStore.removeChangeListener(this._changed);
  },

  _changed: function(){
    this.setState({posts: PostStore.all()});
  },

  render: function(){
    var userPosts;
    var userHeader;
    if (this.state){
        userHeader = <UserHeader curUser={this.state.posts.pop()}/>;
        userPosts = <PostGrid posts={this.state.posts}/>;
    }
    return <div>
            <div className = "user-container">
              {userHeader}
              {userPosts}
            </div>
          </div>;
  }

});
