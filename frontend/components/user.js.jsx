import React from 'react';
import UserStore from './../stores/user';
import ApiUtil from './../util/api_util';
import PostGrid from './post_grid.js';
import UserHeader from './user_header.js';

var UserShow = React.createClass ({
  componentDidMount: function(){
    UserStore.addChangeListener(this._changed);

    ApiUtil.fetchUser(this.props.params.username);
  },

  componentWillReceiveProps: function(newProps){
    if (this.props.params.username !== newProps.params.username){
      ApiUtil.fetchUser(newProps.params.username);
    }
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

export default UserShow;
