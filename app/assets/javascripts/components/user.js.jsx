var UserShow = React.createClass ({
  componentDidMount: function(){
    UserStore.addChangeListener(this._changed);
    // debugger;

    ApiUtil.fetchUser(this.props.params.username);
  },

  componentWillUnmount: function(){
    UserStore.removeChangeListener(this._changed);
  },

  _changed: function(){
    this.setState({posts: UserStore.all()});
  },

  render: function(){
    var userPosts;
    var userHeader;
    if (this.state){
        userHeader = <UserHeader curUser={this.state.posts}/>;
        userPosts = <PostGrid posts={this.state.posts.posts}/>;
    }
    return <div>
            <div className = "user-container">
              {userHeader}
              {userPosts}
            </div>
          </div>;
  }

});
